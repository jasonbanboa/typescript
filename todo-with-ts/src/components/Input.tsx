import { InputHTMLAttributes } from "react";

type myType = {
  color: string;
}

interface myInterface {
  color: string;
}

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} />
  );
}

