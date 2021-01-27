/*
  Component (InputTodo)
  - ToDo入力エリア
*/

// React
import React, { useContext, useState } from 'react'
// Context
import { AppContext } from '../contexts/AppContext'
// Action
import { ADD_TODO } from '../actions'

export const InputTodo = () => {
  const [todoText, setTodoText] = useState('')
  const { dispatch } = useContext(AppContext)

  // 追加ボタンのイベントハンドラ
  const onClickAddButton = () => {
    dispatch({
      type: ADD_TODO,
      todoText,
    })
    setTodoText('')
  }

  return (
    <>
      <div className="mb-3 p-4 shadow rounded-lg box">
        <input
          className="form-control mb-3"
          placeholder="ToDoを入力"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          className="btn btn-info btn-sm px-3"
          onClick={onClickAddButton}
          disabled={todoText === ''}
        >
          追加
        </button>
      </div>
    </>
  )
}
