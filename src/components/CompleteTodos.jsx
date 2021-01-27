/*
  Component (CompleteTodos)
  - 完了したToDo
*/

// React
import React from 'react'

export const CompleteTodos = () => {
  return (
    <>
      <div className="mb-3 p-4 shadow rounded-lg">
        <p className="text-center font-weight-bold text-muted">完了したToDo</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex">
            <span className="flex-grow-1">完了したToDo</span>
            <button className="btn btn-sm btn-outline-warning">戻す</button>
          </li>
          <li className="list-group-item d-flex">
            <span className="flex-grow-1">完了したToDo</span>
            <button className="btn btn-sm btn-outline-warning">戻す</button>
          </li>
        </ul>
      </div>
    </>
  )
}
