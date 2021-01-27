/*
  Component (CompleteTodos)
  - 完了したToDo
*/

// React
import React, { useContext } from 'react'
// Context
import { AppContext } from '../contexts/AppContext'
// Component
import { CompleteTodoItem } from './CompleteTodoItem'

export const CompleteTodos = () => {
  const { state } = useContext(AppContext)

  return (
    <>
      <div className="mb-3 p-4 shadow rounded-lg">
        <p className="text-center font-weight-bold text-muted">完了したToDo</p>
        <ul className="list-group list-group-flush">
          {state.completeTodos.map((completeTodo, index) => (
            <CompleteTodoItem
              key={index}
              index={index}
              completeTodo={completeTodo}
            />
          ))}
        </ul>
      </div>
    </>
  )
}
