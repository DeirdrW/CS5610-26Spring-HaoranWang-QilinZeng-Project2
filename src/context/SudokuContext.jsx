import React, { createContext, useContext, useReducer, useEffect, useRef } from 'react'
import { generatePuzzle, validateBoard } from '../utils/generator'

const SudokuStateContext = createContext()
const SudokuDispatchContext = createContext()

const LS_KEY = 'sudoku_game_v1'

const initial = {
  size: 9,
  puzzle: [],
  original: [],
  filledCount: 0,
  seconds: 0,
  running: false,
  lastAction: null,
}

function reducer(state, action){
  switch(action.type){
    case 'NEW_GAME':{
      const {size} = action.payload
      const puzzle = generatePuzzle(size)
      return {...state, size, puzzle, original: puzzle.map(r=>r.slice()), seconds:0, running:true, lastAction: 'NEW_GAME'}
    }
    case 'RESET':{
      return {...state, puzzle: state.original.map(r=>r.slice()), seconds:0, running:true, lastAction: 'RESET'}
    }
    case 'SET_CELL':{
      const {row,col,value} = action.payload
      const puzzle = state.puzzle.map(r=>r.slice())
      puzzle[row][col] = value
      return {...state, puzzle, lastAction: 'SET_CELL'}
    }
    case 'TICK':
      return {...state, seconds: state.seconds + 1, lastAction: 'TICK'}
    case 'STOP':
      return {...state, running:false, lastAction: 'STOP'}
    default:
      return state
  }
}

function init(){
  try{
    const raw = window.localStorage.getItem(LS_KEY)
    if(raw){
      const parsed = JSON.parse(raw)
      console.log('[Sudoku] loaded state from localStorage', parsed)
      return {...initial, ...parsed}
    }
  }catch(e){
  }
  return initial
}

export function SudokuProvider({children}){
  const [state, dispatch] = useReducer(reducer, initial, init)

  useEffect(()=>{
    if(!state.puzzle || state.puzzle.length === 0){
      dispatch({type:'NEW_GAME', payload:{size:9}})
    }
  },[])

  useEffect(()=>{
    let t
    if(state.running){
      t = setInterval(()=>dispatch({type:'TICK'}),1000)
    }
    return ()=> clearInterval(t)
  },[state.running])

  useEffect(()=>{
    const ok = validateBoard(state.puzzle)
    if(ok.complete){
      dispatch({type:'STOP'})
    }
  },[state.puzzle])

  const _didInit = useRef(false)
  useEffect(()=>{
    if(!_didInit.current){
      _didInit.current = true
      return
    }
    try{
      if(state.lastAction === 'RESET' || state.lastAction === 'STOP'){
        console.log('[Sudoku] removing localStorage due to', state.lastAction)
        window.localStorage.removeItem(LS_KEY)
      } else {
        const toSave = {...state}
        toSave.lastAction = null
        window.localStorage.setItem(LS_KEY, JSON.stringify(toSave))
        console.log('[Sudoku] saved state to localStorage')
      }
    }catch(e){
    }
  },[state])

  return (
    <SudokuStateContext.Provider value={state}>
      <SudokuDispatchContext.Provider value={dispatch}>
        {children}
      </SudokuDispatchContext.Provider>
    </SudokuStateContext.Provider>
  )
}

export function useSudokuState(){
  return useContext(SudokuStateContext)
}

export function useSudokuDispatch(){
  return useContext(SudokuDispatchContext)
}
