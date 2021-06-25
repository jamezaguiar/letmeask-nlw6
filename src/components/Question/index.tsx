import { ReactNode } from 'react';
import { Container, Footer, UserInfo, Buttons } from './styles';

type QuestionProps = {
  children?: ReactNode;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
};

export function Question({ children, content, author }: QuestionProps) {
  return (
    <Container>
      <p>{content}</p>
      <Footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <Buttons>{children}</Buttons>
      </Footer>
    </Container>
  );
}
