import * as React from 'react';
import { useState } from 'react'
import './App.css';
import { Login } from './components/Login'
import { Game } from './components/Game'

type Mode = 'LOGIN' | 'GAME'

function App() {
  const [mode, setMode] = useState<Mode>('LOGIN')
  return (
    <div className="App">
      {mode === 'LOGIN' ? (
        <Login
          onClick={() => {
            setMode('GAME')
          }}
        />
      ) : (
        <Game />
      )}
    </div>
  );
}

export default App;
