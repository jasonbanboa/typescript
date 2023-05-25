
import { ChangeEvent } from 'react';
import { Todo } from '../types/todo'
import { DispatchSetStateAction } from '../types/util';

interface TodoListProps {
  todos: Todo[];
  searchValue: string;
  deleteTodo: (id: Todo['id']) => void;
  setSelectedTodo: DispatchSetStateAction<Todo['id'][]>;
  toggleEditTodo: (todo: Todo) => void;
  editingTodo?: Todo;
  setTodos: DispatchSetStateAction<Todo[]>;
}

export default function TodoList({ 
  todos,
  searchValue,
  deleteTodo,
  setSelectedTodo,
  toggleEditTodo ,
  editingTodo,
  setTodos
}: TodoListProps) {

  const editTodo = () => {
    setTodos((prevState) => {
      const temp = structuredClone(prevState);

      const data = temp.reduce((acc: Todo[], todo: Todo) => {
        if (editingTodo?.id === todo.id) 
          return [...acc, editingTodo];
        return [...acc, todo];
      }, []);

      return data;
    });
    cancleEditTodo();
  }

  const handleInputChange = ({ target: { value }}: ChangeEvent<HTMLInputElement>) => {
    const editedTodo: Todo = {
      id: editingTodo!.id,
      name: value
    }
    toggleEditTodo(editedTodo);
  }

  const cancleEditTodo = () => {
    const nullTodo: Todo = {
      id: '',
      name: ''
    }
    toggleEditTodo(nullTodo);
  }

  return (
    <ul>
      {todos.filter(({ name }) => name.includes(searchValue)).map((todo) => (
        <li key={todo.id}>
          {editingTodo?.id === todo.id ? (
            <>
              <input value={editingTodo.name}  onChange={handleInputChange}/>
              <button onClick={editTodo}>수정</button>
              <button onClick={cancleEditTodo}>취소</button>
            </>
          ) : (  
            <>
              {todo.name}
              <button onClick={() => deleteTodo(todo.id)}>삭제</button>
              <button onClick={() => toggleEditTodo(todo)}>수정</button>
            </>
          )}
        </li>
    ))}
    </ul>
  )
}
