import * as React from "react"
import { LabelFormElement } from "./LabelFormElement"

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
                <LabelFormElement labelText="Enter your name">
                    <input />
                </LabelFormElement>
            </div>

            <div style={{ paddingBottom: PADDING }}>
                <LabelFormElement labelText="Enter code to join game">
                    <input />
                </LabelFormElement>
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