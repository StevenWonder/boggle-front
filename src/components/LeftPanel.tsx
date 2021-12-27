import * as React from 'react'

interface Props {
    name: string,
    id: string
}

export const LeftPanel = (props: Props) => {
    const { name, id } = props
    return (
        <div style={{ maxWidth: '300px', padding: 16}}>
            <h4>Name: {name}</h4>
            <h4>Game id: {id}</h4>
            <p style={{textAlign: 'left'}}>
                Find as many words as you can. Words must be a minimum length of 4. Every letter in the word must be adjascent to another letter. Diagonally adjascent is allowed. You cannot use the same letter more than once in the puzzle unless it appears more than once.
            </p>
        </div>
    )
}