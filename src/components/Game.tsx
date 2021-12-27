import * as React from 'react'
import { useEffect, useState } from 'react'

import { useCounter } from '../hooks/counter'
import { getChains2 } from '../utils/chain'
import { generateGame } from '../utils/game'

import { Cell } from './Cell'
import { LabelFormElement } from './LabelFormElement'
import { Row } from './Row'

interface Props {
    sessionId: string
}

// TODO: Get this from backend
// const values = [
//     'e', 't', 'r', 'c', 'h',
//     'd', 'a', 'i', 'd', 'p',
//     'x', 'f', 'o', 'b', 'l',
//     's', 'm', 'g', 'e', 'n',
//     'e', 'v', 'i', 'a', 'u',
// ]
const cells = generateGame()

export const Game = (props: Props) => {
    const { sessionId } = props
    const [userWord, setUserWord] = useState('')
    const [highlights, setHighlights] = useState<number[]>([])
    const { count } = useCounter()
    useEffect(() => {
        if (userWord.length > 0) {
            const chains = getChains2(cells, userWord)
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
    }, [userWord])
    return (
        <>
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
                                    {cells.slice(val, val + 5).map((cell) => {
                                        return (
                                            <Cell
                                                value={cell.value}
                                                id={cell.id}
                                                key={cell.id}
                                                status={highlights.includes(cell.id) ? 'HIGHLIGHTED' : 'NORMAL'}
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
                        setUserWord('')
                    }}
                >
                    Submit
                </button>
            </form>
            <div>
                <p>Time left: {Math.floor(count / 60)}:{count % 60 < 10 ? `0${count % 60}`: count % 60}</p>
                <p>session id to move later on: {sessionId}</p>
            </div>
        </>
    )
}