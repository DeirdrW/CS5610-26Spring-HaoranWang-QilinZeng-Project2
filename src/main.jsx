import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { SudokuProvider } from './context/SudokuContext'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SudokuProvider>
        <App />
      </SudokuProvider>
    </BrowserRouter>
  </React.StrictMode>
)
