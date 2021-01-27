/*
  Component (CompleteTodoItem)
  - 完了したToDoのListItem
*/

// React
import React from 'react'

export const CompleteTodoItem = (props) => {
  const { index, completeTodo } = props

  return (
    <li className="list-group-item d-flex">
      <span className="flex-grow-1">{completeTodo}</span>
      <button className="btn btn-sm btn-outline-warning">戻す</button>
    </li>
  )
}
