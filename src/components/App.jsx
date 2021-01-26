// React
import React from 'react'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

export const App = () => {
  return (
    <>
      <div className="container mt-5 pt-3 w-50">
        {/* ToDo入力エリア */}
        <div className="mb-3 p-4 shadow rounded-lg box">
          <input className="form-control mb-3" placeholder="ToDoを入力" />
          <button className="btn btn-info btn-sm px-3">追加</button>
        </div>
        {/* 未完了のToDo */}
        <div className="mb-3 p-4 shadow rounded-lg">
          <p className="text-center font-weight-bold text-muted">
            未完了のToDo
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex">
              <span className="flex-grow-1">未完了のToDo</span>
              <button className="btn btn-sm btn-primary mr-1">完了</button>
              <button className="btn btn-sm btn-danger">削除</button>
            </li>
            <li className="list-group-item d-flex">
              <span className="flex-grow-1">未完了のToDo</span>
              <button className="btn btn-sm btn-primary mr-1">完了</button>
              <button className="btn btn-sm btn-danger">削除</button>
            </li>
            <li className="list-group-item d-flex">
              <span className="flex-grow-1">未完了のToDo</span>
              <button className="btn btn-sm btn-primary mr-1">完了</button>
              <button className="btn btn-sm btn-danger">削除</button>
            </li>
          </ul>
        </div>
        {/* 完了したToDo */}
        <div className="mb-3 p-4 shadow rounded-lg">
          <p className="text-center font-weight-bold text-muted">
            完了したToDo
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex">
              <span className="flex-grow-1">完了したToDo</span>
              <button className="btn btn-sm btn-warning">戻す</button>
            </li>
            <li className="list-group-item d-flex">
              <span className="flex-grow-1">完了したToDo</span>
              <button className="btn btn-sm btn-warning">戻す</button>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </>
  )
}
