/*
  Component (CompleteTodoItem)
  - 完了したToDoのListItem
*/

// React
import React, { useContext } from 'react'
// Context
import { AppContext } from '../contexts/AppContext'
// Action
import { RETURN_TODO } from '../actions'

export const CompleteTodoItem = (props) => {
  const { index, completeTodo } = props
  const { dispatch } = useContext(AppContext)

  // 戻すボタンのイベントハンドラ
  const onClickReturnButton = () => {
    dispatch({
      type: RETURN_TODO,
      index,
    })
  }

  return (
    <li className="list-group-item d-flex">
      <span className="flex-grow-1">{completeTodo}</span>
      <button
        className="btn btn-sm btn-outline-warning"
        onClick={onClickReturnButton}
      >
        戻す
      </button>
    </li>
  )
}
