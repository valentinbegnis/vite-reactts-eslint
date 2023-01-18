import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import typescriptLogo from './assets/typescript.svg'
import eslintLogo from './assets/eslint.svg'
import './App.css'

function App (): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noreferrer">
          <img src={typescriptLogo} className="logo typescript" alt="TypeScript logo" />
        </a>
        <a href="https://eslint.org/docs/latest/" target="_blank" rel="noreferrer">
          <img src={eslintLogo} className="logo eslint" alt="ESLint logo" />
        </a>
      </div>
      <h1>Vite + React + TypeScript + ESLint 🚀</h1>
      <div className="card">
        <button onClick={() => { setCount((count) => count + 1) }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test
        </p>
      </div>
      <p className="notes">
        Do not forget to install the ESLint extension on VSCode.
        <br />
        I hope this boilerplate helps.
      </p>
    </div>
  )
}

export default App
