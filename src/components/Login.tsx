import * as React from "react"

interface Props {
    onClick: () => void
}

export const Login = (props: Props) => {
    const { onClick } = props
    return (
        <div>
            <h1>
                Welcome to Boggle app
            </h1>
            <div>
                <label> Enter your name</label>
                <input />
            </div>

            <div>
                <label> Enter code to join game</label>
                <input />
            </div>

            <div>
                <button title="Create new game" onClick={onClick}>Create new game</button>
            </div>
        </div>
    )
}