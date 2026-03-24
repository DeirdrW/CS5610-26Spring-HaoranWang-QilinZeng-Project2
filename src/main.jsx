import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { SudokuProvider } from './context/SudokuContext'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <SudokuProvider>
        <App />
      </SudokuProvider>
    </HashRouter>
  </React.StrictMode>
)
