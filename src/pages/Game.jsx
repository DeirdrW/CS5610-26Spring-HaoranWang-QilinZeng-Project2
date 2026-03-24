import React, { useEffect } from 'react'
import '../styles/game.css'
import { useSudokuState, useSudokuDispatch } from '../context/SudokuContext'
import Board from '../components/Board'

export default function Game({mode}){
  const state = useSudokuState()
  const dispatch = useSudokuDispatch()

  const size = mode==='easy'?6:9

  useEffect(()=>{
    const needsGame = state.puzzle.length === 0 || state.size !== size
    if(needsGame){
      dispatch({type:'NEW_GAME', payload:{size}})
    }
  },[mode, size, state.puzzle.length, state.size, dispatch])


  function newGame(){ dispatch({type:'NEW_GAME', payload:{size}}) }
  function reset(){ dispatch({type:'RESET'}) }

  return (
    <div className="game-page">
      <h2>{mode==='easy'? 'Easy (6x6)':'Normal (9x9)'}</h2>
      <div className="game-top">
        <div>Time: {state.seconds}s</div>
      </div>
      <Board />
      <div className="board-controls">
        <button className="button" onClick={newGame}>New Game</button>
        <button className="button secondary" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
