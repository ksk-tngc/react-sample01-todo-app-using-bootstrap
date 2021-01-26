/*
  Reducer (todos)
*/

// Action
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, RETURN_TODO } from '../actions'

export const todos = (state, action) => {
  switch (action.type) {
    // --------------------------------
    // ToDoを追加
    // --------------------------------
    case ADD_TODO: {
      const todo = {
        todoText: action.todoText,
        done: false,
      }
      return [...state, todo]
    }
    // --------------------------------
    // 未完了のToDo ▶ 完了ボタン
    // --------------------------------
    case COMPLETE_TODO: {
      return state
    }
    // --------------------------------
    // 未完了のToDo ▶ 削除ボタン
    // --------------------------------
    case DELETE_TODO: {
      return state
    }
    // --------------------------------
    // 完了したToDo ▶ 戻すボタン
    // --------------------------------
    case RETURN_TODO: {
      return state
    }
    // --------------------------------
    // 上記以外
    // --------------------------------
    default: {
      return state
    }
  }
}
