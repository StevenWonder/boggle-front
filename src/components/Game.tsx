import * as React from 'react'
import { useState } from 'react'

import { useCounter } from '../hooks/counter'
import { generateGame } from '../utils/game'

import { Cell } from './Cell'
import { LabelFormElement } from './LabelFormElement'
import { Row } from './Row'

// TODO: Get this from backend
// const values = [
//     'e', 't', 'r', 'c', 'h',
//     'd', 'a', 'i', 'd', 'p',
//     'x', 'f', 'o', 'b', 'l',
//     's', 'm', 'g', 'e', 'n',
//     'e', 'v', 'i', 'a', 'u',
// ]
const cells = generateGame()

export const Game = () => {
    const [userWord, setUserWord] = useState('')
    const { count } = useCounter()
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
                                    {cells.slice(val, val + 5).map((cell, index) => {
                                        return <Cell value={cell.value} id={index} key={index}/>
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
            </div>
        </>
    )
}