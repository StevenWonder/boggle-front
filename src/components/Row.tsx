import * as React from "react"

interface Props {
    children: JSX.Element
}

export const Row = (props: Props) => {
    const { children } = props
    return (
        <div id='row' style={{
            flexDirection: 'row',
            display: 'flex'
        }}>
            {children}
        </div>
    )
}