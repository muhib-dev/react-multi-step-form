import { ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  children?: ReactNode | ReactNode[];
}

const CardWraper = styled.div`
  box-shadow: 1px 1px 12px rgba(124, 124, 124, 0.4);
  padding: 1.2rem 1.6rem;
`;

export const Card = ({ children }: CardProps) => {
  return <CardWraper>{children}</CardWraper>;
};
