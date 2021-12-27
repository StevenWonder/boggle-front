import * as React from 'react';
import { useState } from 'react'
import './App.css';
import { Login } from './components/Login'
import { Game } from './components/Game'

type Mode = 'LOGIN' | 'GAME'

function App() {
  const [mode, setMode] = useState<Mode>('LOGIN')
  const [sessionId, setSessionId] = useState('')
  return (
    <div className="App">
      {mode === 'LOGIN' ? (
        <Login
          onSuccess={(id: string) => {
            setSessionId(id)
            setMode('GAME')
          }}
        />
      ) : (
        <Game sessionId={sessionId}/>
      )}
    </div>
  );
}

export default App;
