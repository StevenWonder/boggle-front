import * as React from 'react'
import { Cell } from './Cell'
import { Row } from './Row'

// TODO: Get this from backend
const values = [
    'e', 't', 'r', 'c', 'h',
    'd', 'a', 'i', 'd', 'p',
    'x', 'f', 'o', 'b', 'l',
    's', 'm', 'g', 'e', 'n',
    'e', 'v', 'i', 'a', 'u',
]

export const Game = () => {
    return (
        <div>
            <Row>
                <>
                    {values.slice(0, 5).map((val, index) => {
                        return <Cell value={val} id={index} key={index}/>
                    })}
                </>
            </Row>
            <Row>
                <>
                    {values.slice(5, 10).map((val, index) => {
                        return <Cell value={val} id={index} key={index}/>
                    })}
                </>
            </Row>
            <Row>
                <>
                    {values.slice(10, 15).map((val, index) => {
                        return <Cell value={val} id={index} key={index}/>
                    })}
                </>
            </Row>
            <Row>
                <>
                    {values.slice(15, 20).map((val, index) => {
                        return <Cell value={val} id={index} key={index}/>
                    })}
                </>
            </Row>
            <Row>
                <>
                    {values.slice(20, 25).map((val, index) => {
                        return <Cell value={val} id={index} key={index}/>
                    })}
                </>
            </Row>
            {/* {values.flatMap((val, index) => {
                let lineBreak = null
                if ((index + 1) % 5 === 0) {
                    lineBreak = (
                        <br />
                    )
                }
                return (
                    <>
                        <Cell value={val} id={index} key={index}/>
                        {lineBreak}
                    </>
                )
            })} */}
        </div>
    )
}