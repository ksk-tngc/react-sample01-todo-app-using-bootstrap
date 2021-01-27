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
      // 完了させるToDoのテキスト
      const doneTodoText = state.incompleteTodos[doneTodoIndex]
      // 未完了のToDoからindex番目の要素を削除
      const newIncompleteTodos = state.incompleteTodos.filter(
        (incompleteTodo, index) => index !== doneTodoIndex
      )
      // 状態遷移
      return {
        incompleteTodos: newIncompleteTodos,
        completeTodos: [...state.completeTodos, doneTodoText],
      }
    }
    // --------------------------------
    // 未完了のToDo ▶ 削除ボタン
    // --------------------------------
    case DELETE_TODO: {
      const { index: deleteTodoIndex } = action
      // 未完了のToDoからindex番目の要素を削除
      return {
        incompleteTodos: state.incompleteTodos.filter(
          (incompleteTodo, index) => index !== deleteTodoIndex
        ),
        completeTodos: [...state.completeTodos],
      }
    }
    // --------------------------------
    // 完了したToDo ▶ 戻すボタン
    // --------------------------------
    case RETURN_TODO: {
      const { index: returnTodoIndex } = action
      // 戻すToDoのテキスト
      const returnTodoText = state.completeTodos[returnTodoIndex]
      // 完了したToDoからindex番目の要素を削除
      const newCompleteTodos = state.completeTodos.filter(
        (completeTodo, index) => index !== returnTodoIndex
      )
      // 状態遷移
      return {
        incompleteTodos: [...state.incompleteTodos, returnTodoText],
        completeTodos: newCompleteTodos,
      }
    }
    // --------------------------------
    // 上記以外
    // --------------------------------
    default: {
      return state
    }
  }
}
