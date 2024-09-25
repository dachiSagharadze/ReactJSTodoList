import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

 const [todos, setTodos] = useState([])
 const [todoValue, setTodoValue] = useState('')

 function addTodo(newTodo){
  const newTodoList = [...todos, newTodo]
  newTodoList.reverse()
  setTodos(newTodoList)
 }

 function deleteTodo(index){
  const newTodoList = todos.filter((todo, todoIndex) => {
    return todoIndex !== index
  })
  setTodos(newTodoList)
 }

 function editTodo(index){
  const editableValue = todos[index]
  setTodoValue(editableValue)
  deleteTodo(index)
 }

  return (
    <main>
      <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue} addTodo = {addTodo}/>
      <TodoList editTodo = {editTodo} deleteTodo = {deleteTodo} todos = {todos} />
    </main>
  )
}

export default App
