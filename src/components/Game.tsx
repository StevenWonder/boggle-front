import * as React from 'react'
import { useState } from 'react'
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
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Row>
                    <>
                        {cells.slice(0, 5).map((cell, index) => {
                            return <Cell value={cell.value} id={index} key={index}/>
                        })}
                    </>
                </Row>
                <Row>
                    <>
                        {cells.slice(5, 10).map((cell, index) => {
                            return <Cell value={cell.value} id={index} key={index}/>
                        })}
                    </>
                </Row>
                <Row>
                    <>
                        {cells.slice(10, 15).map((cell, index) => {
                            return <Cell value={cell.value} id={index} key={index}/>
                        })}
                    </>
                </Row>
                <Row>
                    <>
                        {cells.slice(15, 20).map((cell, index) => {
                            return <Cell value={cell.value} id={index} key={index}/>
                        })}
                    </>
                </Row>
                <Row>
                    <>
                        {cells.slice(20, 25).map((cell, index) => {
                            return <Cell value={cell.value} id={index} key={index}/>
                        })}
                    </>
                </Row>
            </div>
            <form style={{
                paddingTop: '30px'
            }}>
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
        </>
    )
}