import * as React from 'react'

interface Props {
    words: string[]
}

export const RightPanel = (props: Props) => {
    const { words } = props

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
            {words.map((word) => {
                return (
                    <>
                        <span>{word}</span>
                        <br/>
                    </>
                )
            })}
        </div>
    )
}