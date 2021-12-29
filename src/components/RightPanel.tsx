import * as React from 'react'
import { WordResult } from '../types'

interface Props {
    wordResults: WordResult[]
}

export const RightPanel = (props: Props) => {
    const { wordResults } = props

    return (
        <div
            id='wordList'
            className='hideScroll'
            style={{
                fontSize: '13px',
                padding: 16,
                maxHeight: '500px',
                columnWidth: '40px',
                backgroundColor: 'lightgray'
            }}
        >
            {wordResults.map((wordResult) => {
                const { word, points, reason, isValid } = wordResult
                return (
                    <>
                        <span style={{ color: reason === 'not a word' ? 'red' : undefined }}>{word}</span>: <span>{points}</span>
                        <br/>
                    </>
                )
            })}
        </div>
    )
}