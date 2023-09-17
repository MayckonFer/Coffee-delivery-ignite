import { ContainerButton } from "./styles";

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

export function ButtonComponent({ children, ...rest }: ButtonProps) {
  return <ContainerButton {...rest}>{children}</ContainerButton>;
}
