import { styled } from 'styled-components';

export const Container = styled.div<{ placeholder?: string }>`
  width: 100%;
  height: 100%;
  outline: none;
  padding: 0;
  border: 0;
  -webkit-user-modify: read-write-plaintext-only;

  &:empty:before {
    content: '${({ placeholder }) => placeholder || ''}';
    color: #ccc;
  }
`;
