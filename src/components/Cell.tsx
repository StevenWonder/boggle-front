import * as React from "react"

type Status = 'GREY' | 'HIGHLIGHTED' | 'NORMAL'

interface Link {
    left?: number
    right?: number
    up?: number
    down?: number
    upLeft?: number
    upRight?: number
    downLeft?: number
    downRight?: number
}

interface Props extends Link {
    id: number
    value: string
    status?: Status
}

export const Cell = (props: Props) => {
    const { status, value } = props
    const getColour = () => {
        switch (status) {
            case 'GREY':
                return 'grey'
            case 'HIGHLIGHTED':
                return 'green'
            default:
                return undefined
        }
    }
    return (
        <div style={{
            height: 100,
            width: 100,
            borderColor: 'black',
            borderWidth: '1px',
            borderStyle: 'solid',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            backgroundColor: getColour()
        }}>
            <p style={{
                fontSize: 64,
                marginTop: 'auto',
                marginBottom: 'auto',
            }}>{value}</p>
        </div>
    )
}
