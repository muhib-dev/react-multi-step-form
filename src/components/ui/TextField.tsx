import { ChangeEvent } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  color: rgb(66, 66, 66);
  margin-bottom: 8px;
  font-size: 1.2rem;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 15px;
  outline: none;
  transition: all 350ms ease;
  &:focus {
    box-shadow: 0 0 8px rgba(0, 88, 240, 0.2);
  }
`;

interface TextFieldProps {
  name?: string;
  value?: string;
  id?: string;
  label?: string;
  type?: string;
  autoFocus?: boolean;
  required?: boolean;
  pattern?: string;

  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({ label, ...rest }: TextFieldProps) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <Input {...rest} />
    </InputWrapper>
  );
};

TextField.defaultProps = {
  type: "text",
};

export default TextField;
