
interface TodoProps {
  deleteTodo: () => void;
  handleSelected: (checked: boolean) => boolean;
 }

export default function Todo({ deleteTodo, handleSelected } : TodoProps) {
  return (
    <div>
      a
    </div>
  );
}
