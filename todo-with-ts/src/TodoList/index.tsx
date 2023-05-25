
import { Todo } from '../types/todo'
import { DispatchSetStateAction } from '../types/util';

interface TodoListProps {
  todos: Todo[];
  searchValue: string;
  deleteTodo: (id: Todo['id']) => void;
  setSelectedTodo: DispatchSetStateAction<Todo['id'][]>;
}

export default function TodoList({ 
  todos,
  searchValue,
  deleteTodo,
  setSelectedTodo 
}: TodoListProps) {
  return (
    <ul>
      {todos.map(({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  )
}
