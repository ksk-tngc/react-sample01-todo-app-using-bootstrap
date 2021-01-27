// React
import React, { useReducer } from 'react'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Component
import { InputTodo } from './InputTodo'
import { IncompleteTodos } from './IncompleteTodos'
import { CompleteTodos } from './CompleteTodos'
// Reducer
import { todos } from '../reducers/todos'
// Context
import { AppContext } from '../contexts/AppContext'

// 初期state
const initialState = {
  incompleteTodos: [],
  completeTodos: [],
}

export const App = () => {
  const [state, dispatch] = useReducer(todos, initialState)

  return (
    <>
      <div className="container mt-5 pt-3 w-50">
        <AppContext.Provider value={{ state, dispatch }}>
          <InputTodo />
          <IncompleteTodos />
          <CompleteTodos />
        </AppContext.Provider>
      </div>
    </>
  )
}
