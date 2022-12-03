import { ReactNode } from "react";
import styled from "styled-components";

interface BaseProps {
  variant: "contained" | "outlined";
}

interface ButtonProps extends BaseProps {
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  children: ReactNode | string;
  rest?: any;
}

const varients = {
  contained: `
  background-color:#2e31de;
  color:#fff;
  &:hover {
    background-color: #484ac7;
  }
`,
  outlined: `
  background-color:#fff;
  color:#2e31de;
  border: 1px solid #2e31de;
  &:hover {
    color: #5154de;
    border: 1px solid #cccdf5;
  }
`,
};

const ButtonStyle = styled.button`
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 150ms linear;
  margin: 0 0.2rem;
  ${(props: BaseProps) => varients[props.variant]};
`;

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <ButtonStyle {...rest}>{children}</ButtonStyle>;
};

Button.defaultProps = {
  type: "button",
  variant: "contained",
};
