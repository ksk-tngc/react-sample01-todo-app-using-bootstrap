State
================================

### 入力したToDoテキスト

```js
const todo = '入力したToDo'
```

### 未完了のToDoと完了したToDo

```js
const todo = {
  incompleteTodos: [
    '未完了のToDo1',
    '未完了のToDo2',
  ],
  completeTodos: [
    '完了したToDo1',
    '完了したToDo2',
  ],
}
```

Action
================================

### ① ToDoを追加

- `state.incompleteTodos`の末尾に要素を追加

```js
{
  type: 'ADD_TODO',
  todoText: '未完了のToDo',
}
```

### ② 未完了のToDo ▶ 完了ボタン

- `state.incompleteTodos`から指定のindexの要素を削除
- `state.completeTodos`の末尾に要素を追加

```js
{
  type: 'COMPLETE_TODO',
  index: 2,
}
```

### ③ 未完了のToDo ▶ 削除ボタン

- `state.incompleteTodos`から指定のindexの要素を削除

```js
{
  type: 'DELETE_TODO',
  index: 1
}
```

### ④ 完了したToDo ▶ 戻すボタン

- `state.completeTodos`から指定のindexの要素を削除
- `state.incompleteTodos`の末尾に要素を追加

```js
{
  type: 'RETURN_TODO',
  index: 3
}
```

