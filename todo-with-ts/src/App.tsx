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
  const [editingTodo, setEditingTodo] = useState<Todo | undefined>();

  const deleteTodo = (todoId: Todo['id']) => {
    setTodos(prevState => {
      return [...prevState].filter(({ id }) => id !== todoId);
    });
  }

  useEffect(() =>  {
    console.log(editingTodo);
  }, [editingTodo]);

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
  
  const handleSearchInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
  }

  const toggleEditTodo = (todo: Todo) => {
    setEditingTodo(todo);
  }

  return (
    <div className="App">
      <Input onKeyUp={handleEnterPress} onChange={handleInputChange} value={todoName} placeholder='todo name...'/>
      <button onClick={handleCreate}>create</button> <br />
      <Input onChange={handleSearchInputChange} value={searchValue} placeholder="search todo..."/>
      <TodoList setTodos={setTodos} editingTodo={editingTodo} toggleEditTodo={toggleEditTodo} deleteTodo={deleteTodo} searchValue={searchValue} setSelectedTodo={setSelectedTodo} todos={todos}/>
    </div>
  );
}

export default App;
