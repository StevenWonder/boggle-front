import axios from 'axios'
import * as React from 'react'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'

import { useCounter } from '../hooks/counter'
import { getChains2 } from '../utils/chain'
import { placeholderGame } from '../utils/game'
import { rotate } from '../utils/rotate'
import { CellType } from '../utils/types'

import { Cell } from './Cell'
import { LabelFormElement } from './LabelFormElement'
import { LeftPanel } from './LeftPanel'
import { Results } from './Results'
import { RightPanel } from './RightPanel'
import { Row } from './Row'

interface Props {
    sessionId: string
    name: string
}

interface NewGame {
    game: CellType[]
    sessionId: string
}

interface ResultsType {
    words: {
        [key: string]: string[]
    }
    sessionId: string
}

let socket : ReturnType<typeof io>

export const Game = (props: Props) => {
    const { sessionId, name } = props
    const [userWord, setUserWord] = useState('')
    const [words, setWords] = useState<string[]>([])
    const [highlights, setHighlights] = useState<number[]>([])
    const [game, setGame] = useState<CellType[]>(placeholderGame)
    const [results, setResults] = useState<ResultsType['words']>({})
    const [active, setActive] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const { count, restartCountdown } = useCounter(0)

    useEffect(() => {
        if (userWord.length > 0) {
            const chains = getChains2(game, userWord)
            const activeCells : number[] = []
            // Only display one chain. It's better UX
            // TODO: Validate this point with some beta testers
            if (chains.length > 0) {
                chains[0].forEach((cell) => {
                    activeCells.push(cell.id)
                })
                setHighlights(activeCells)
            } else {
                setHighlights([])    
            }
        } else {
            setHighlights([])
        }
    }, [userWord, game])

    useEffect(() => {
        socket = io()
    }, [])

    useEffect(() => {
        socket.on('new game created', (response: NewGame) => {
            console.log(`new game created. SessionId: ${response.sessionId}`)
            if (sessionId === response.sessionId) {
                setGame(response.game)
                setActive(true)
                restartCountdown(180)
            }
        })

        socket.on('results', (response: ResultsType) => {
            if (sessionId === response.sessionId) {
                setShowResults(true)
                setResults(response.words)
            }
        })
    }, [restartCountdown, sessionId])

    useEffect(() => {
        if (count === 0) {
            setGame(placeholderGame)
            setActive(false)
        }
    }, [count])

    const startNewGame = () => {
        setGame(placeholderGame)
        setActive(false)
        socket.emit('new game', sessionId)
        // REMOVE
        // setActive(true)
        // restartCountdown(180)
    }

    const submitWord = async (word: string) => {
        try {
            const response = await axios.post('/words', {
                name,
                word
            }, {
                headers: {
                    sessionid: sessionId
                }
            })
            if (response.data.isValid === true) {
                setWords(
                    (words) => {
                        words.push(word)
                        return words
                    }
                )
            }
        } catch (e) {
            // Handle error
        }
    }

    return (
        <>
        {showResults === true && <Results words={results} onClose={() => {
            setShowResults(false)
        }}/>}
        <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div>
                <LeftPanel name={name} id={sessionId}/>
            </div>
            <div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    {
                        [0, 5, 10, 15, 20].map((val) => {
                            return (
                                <Row>
                                    <>
                                        {game.slice(val, val + 5).map((cell) => {
                                            return (
                                                <Cell
                                                    value={cell.value}
                                                    id={cell.id}
                                                    key={cell.id}
                                                    status={!active ? 'GREY' : highlights.includes(cell.id) ? 'HIGHLIGHTED' : 'NORMAL'}
                                                />
                                            )
                                        })}
                                    </>
                                </Row>                            
                            )
                        })
                    }
                </div>
                <form style={{ paddingTop: '30px' }}>
                    <LabelFormElement labelText='Enter a word'>
                        <input
                            style={{
                                fontSize: '32px'
                            }}
                            onChange={(e) => {
                                const value = e.target.value
                                setUserWord(value)
                            }}
                            value={userWord}
                        />
                    </LabelFormElement>
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            console.log(`Sending to backend: ${userWord}`)
                            submitWord(userWord)
                            setUserWord('')
                        }}
                    >
                        Submit
                    </button>
                </form>
                <div>
                    <p>Time left: {Math.floor(count / 60)}:{count % 60 < 10 ? `0${count % 60}`: count % 60}</p>
                    {(count === 0 || count === undefined) &&
                        <button onClick={startNewGame}> New game </button>
                    }
                    <button onClick={(e) => {
                        e.preventDefault()
                        setUserWord('')
                        rotate(game)
                    }}>Rotate</button>
                </div>
            </div>
            <div>
                <RightPanel words={words} />
            </div>
        </div>
        </>
    )
}