import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { SudokuProvider } from './context/SudokuContext'
import './styles/global.css'

const BASENAME = '/CS5610-26Spring-HaoranWang-QilinZeng-Project2'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={BASENAME}>
      <SudokuProvider>
        <App />
      </SudokuProvider>
    </BrowserRouter>
  </React.StrictMode>
)
