import { InputHTMLAttributes } from "react";

type myType = {
  color: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
  color?: string;
}

// interface Todo {
//   tite: string;
//   description: string;
// }
// 
// type OptionalTodo = Partial<Todo>;
// 
// interface Props {
//   a?: number;
//   b?: string;
// }
//  
// const obj: Props = { a: 5 };
// // makes required 
// const obj2: Required<Props> = { a: 5 };

export default function Input(props: InputProps) {
  return (
    <input {...props} />
  );
}

