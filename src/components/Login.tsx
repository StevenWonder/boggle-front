import * as React from "react"
import { InputWithLabel } from "./InputWithLabel"

interface Props {
    onClick: () => void
}

const PADDING = 30

export const Login = (props: Props) => {
    const { onClick } = props
    return (
        <div>
            <h1>
                Welcome to Boggle app
            </h1>

            <div style={{ paddingBottom: PADDING }}>
                <InputWithLabel labelText="Enter your name" />
            </div>

            <div style={{ paddingBottom: PADDING }}>
                <InputWithLabel labelText="Enter code to join game" />
            </div>

            <div style={{ paddingBottom: PADDING }}>
                <button title="Create new game" onClick={onClick}>Create new game</button>
            </div>
            
            <div style={{ paddingBottom: PADDING }}>
                <button title="Join game" onClick={onClick}>Join game</button>
            </div>
        </div>
    )
}