import { InputHTMLAttributes, forwardRef } from "react";
import { ContainerInput } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  textHelp?: string;
};

export const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", name = "", textHelp, ...props }, ref) => {
    return (
      <ContainerInput>
        <input type={type} name={name} ref={ref} {...props} />
        {textHelp && <small>{textHelp}</small>}
      </ContainerInput>
    );
  }
);
