import './App.css';
import Input from './components/Input';
import TodoList from './TodoList';
import { useEffect, useState } from 'react';
import { Todo } from './types/todo';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedTodo, setSelectedTodo] = useState<Todo['id'][]>([]);
  const [todoName, setTodoName] = useState<Todo['name']>('');

  const deleteTodo = (todoId: Todo['id']) => {
    setTodos(prevState => {
      return [...prevState].filter(({ id }) => id !== todoId);
    });
  }

  useEffect(() =>  {
    console.log(todos);
  }, [todos]);

  const handleCreate = () => {
    const todo: Todo = {
      id: uuidv4(),
      name: 'test',
    }
    setTodos((prevState) => {
      return [...prevState, todo];
    });
  }

  
  return (
    <div className="App">
      <Input value={todoName} placeholder='todo name...'/>
      <button onClick={handleCreate}>create</button>
      <TodoList deleteTodo={deleteTodo} searchValue={searchValue} setSelectedTodo={setSelectedTodo} todos={todos}/>
    </div>
  );
}

export default App;
