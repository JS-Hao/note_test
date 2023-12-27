import { memo } from 'react';
import { Container } from './styled';

export const Empty = memo(() => {
  return (
    <Container>
      <div className="text-box">
        <p>这里空空如也</p>
        <p>点击右下角新建一个笔记吧</p>
      </div>
    </Container>
  );
});
