import './App.css';
import Input from './components/Input';
import TodoList from './TodoList';
import { useState } from 'react';
import { Todo } from './types/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedTodo, setSelectedTodo] = useState<Todo['id'][]>([]);

  const deleteTodo = (todoId: Todo['id']) => {
    setTodos(prevState => {
      return [...prevState].filter(({ id }) => id !== todoId);
    });
  }

  return (
    <div className="App">
      <Input />
      <TodoList deleteTodo={deleteTodo} searchValue={searchValue} setSelectedTodo={setSelectedTodo} todos={todos}/>
    </div>
  );
}

export default App;
