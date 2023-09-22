import { ChangeEventHandler } from "react";
import { ContainerInput } from "./styles";

interface InputProps {
  type?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  text?: string;
  value?: string;
  required?: boolean;
  checked?: boolean;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

export function InputComponent({ text, ...rest }: InputProps) {
  return (
    <ContainerInput>
      <input {...rest} />
      {text !== "" ? <small>{text}</small> : ""}
    </ContainerInput>
  );
}
