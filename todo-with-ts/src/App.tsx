import './App.css';
import Input from './components/Input';
import TodoList from './TodoList';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
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
    if (!todoName) 
      return;

    const todo: Todo = {
      id: uuidv4(),
      name: todoName,
    }

    setTodos((prevState) => {
      return [...prevState, todo];
    });
    setTodoName('');
  }

  const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setTodoName(value);
  }
  
  const handleEnterPress = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key !== 'Enter') 
      return;
    handleCreate();
  }
  
  return (
    <div className="App">
      <Input onKeyUp={handleEnterPress} onChange={handleInputChange} value={todoName} placeholder='todo name...'/>
      <button onClick={handleCreate}>create</button>
      <TodoList deleteTodo={deleteTodo} searchValue={searchValue} setSelectedTodo={setSelectedTodo} todos={todos}/>
    </div>
  );
}

export default App;
