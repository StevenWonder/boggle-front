import * as React from "react"
import { useState } from 'react'
import axios from 'axios'
import { LabelFormElement } from "./LabelFormElement"

interface Props {
    onSuccess: (id: string) => void
}

const PADDING = 30

export const Login = (props: Props) => {
    const { onSuccess } = props
    const [name, setName] = useState('')
    const [sessionId, setSessionId] = useState('')
    const [failure, setFailure] = useState('')

    const createGame = async () => {
        try {
            const result = await axios.post('/sessions', undefined)
            setFailure('')
            onSuccess(result.data.sessionId)
        } catch (e) {
            setFailure('Error creating game')
        }
    }

    const joinGame = async () => {
        try {
            await axios.get(`/sessions/${sessionId}`, undefined)
            setFailure('')
            onSuccess(sessionId)
        } catch (e) {
            setFailure('Session not found. Try again')
        }
    }

    return (
        <div>
            <h1> Welcome to Boggle app</h1>

            {failure !== '' && <h2 style={{ color: 'red' }}>{failure}</h2>}

            <div style={{ paddingBottom: PADDING }}>
                <LabelFormElement labelText="Enter your name">
                    <input
                        onChange={(e) => {
                            const value = e.target.value
                            setName(value)
                        }}
                    />
                </LabelFormElement>
            </div>

            <div style={{ paddingBottom: PADDING }}>
                <LabelFormElement labelText="Enter code to join game">
                    <input
                        onChange={(e) => {
                            const value = e.target.value
                            setSessionId(value)
                        }}                    
                    />
                </LabelFormElement>
            </div>

            <div style={{ paddingBottom: PADDING }}>
                <button
                    title="Create new game"
                    onClick={createGame}
                    disabled={name === ''}
                >
                    Create new game
                </button>
            </div>
            
            <div style={{ paddingBottom: PADDING }}>
                <button
                    title="Join game"
                    onClick={joinGame}
                    disabled={name === '' || sessionId.length !== 5}
                >
                    Join game
                </button>
            </div>
        </div>
    )
}