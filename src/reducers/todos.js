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
      const { todoText } = action
      // 未完了のToDOに追加
      return {
        incompleteTodos: [...state.incompleteTodos, todoText],
        completeTodos: [...state.completeTodos],
      }
    }
    // --------------------------------
    // 未完了のToDo ▶ 完了ボタン
    // --------------------------------
    case COMPLETE_TODO: {
      const { index: doneTodoIndex } = action
      // 完了したToDoのテキスト
      const doneTodoText = state.incompleteTodos[doneTodoIndex]
      // 未完了のToDoからindex番目の要素を削除
      const newIncompleteTodos = state.incompleteTodos.filter(
        (incompleteTodo, index) => index !== doneTodoIndex
      )
      return {
        incompleteTodos: newIncompleteTodos,
        completeTodos: [...state.completeTodos, doneTodoText],
      }
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
