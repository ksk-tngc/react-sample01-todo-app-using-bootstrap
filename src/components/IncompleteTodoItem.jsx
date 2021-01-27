/*
  Component (IncompleteTodoItem)
  - 未完了のToDoのListItem
*/

// React
import React from 'react'

export const IncompleteTodoItem = (props) => {
  const { todo } = props

  const element = (
    <li className="list-group-item d-flex">
      <span className="flex-grow-1">{todo.todoText}</span>
      <button className="btn btn-sm btn-outline-primary mr-1">完了</button>
      <button className="btn btn-sm btn-outline-danger">削除</button>
    </li>
  )

  return !todo.done ? element : ''
}
