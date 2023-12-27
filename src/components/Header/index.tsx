import { ReactNode } from 'react';
import { Container } from './styled';

interface HeaderProps {
  className?: string;
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}

export const Header = (props: HeaderProps) => {
  const { className, left, right, center } = props;
  return (
    <Container className={className}>
      <div className="left">{left}</div>
      <div className="center">{center}</div>
      <div className="right">{right}</div>
    </Container>
  );
};
