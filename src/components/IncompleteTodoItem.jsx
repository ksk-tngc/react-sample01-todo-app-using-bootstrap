/*
  Component (IncompleteTodoItem)
  - 未完了のToDoのListItem
*/

// React
import React, { useContext } from 'react'
// Context
import { AppContext } from '../contexts/AppContext'
// Action
import { COMPLETE_TODO } from '../actions'

export const IncompleteTodoItem = (props) => {
  const { index, incompleteTodo } = props
  const { dispatch } = useContext(AppContext)

  // 完了ボタンのイベントハンドラ
  const onClickDoneButton = () => {
    dispatch({
      type: COMPLETE_TODO,
      index,
    })
  }

  return (
    <li className="list-group-item d-flex">
      <span className="flex-grow-1">{incompleteTodo}</span>
      <button
        className="btn btn-sm btn-outline-primary mr-1"
        onClick={onClickDoneButton}
      >
        完了
      </button>
      <button className="btn btn-sm btn-outline-danger">削除</button>
    </li>
  )
}
