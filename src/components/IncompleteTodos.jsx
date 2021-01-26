/*
  Component (IncompleteTodos)
  - 未完了のToDo
*/

// React
import React, { useContext } from 'react'

// Context
import { AppContext } from '../contexts/AppContext'

// Component
import { IncompleteTodoItem } from './IncompleteTodoItem'

export const IncompleteTodos = () => {
  const { state } = useContext(AppContext)

  return (
    <>
      <div className="mb-3 p-4 shadow rounded-lg">
        <p className="text-center font-weight-bold text-muted">未完了のToDo</p>
        <ul className="list-group list-group-flush">
          {state.map((todo, index) => (
            <IncompleteTodoItem key={index} todo={todo} />
          ))}
        </ul>
      </div>
    </>
  )
}
