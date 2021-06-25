import styled, { css } from 'styled-components';

type LikeButtonProps = {
  isLiked: boolean;
};

export const Container = styled.div``;

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 45px;
  }
`;

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;

  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 16px;
      border-radius: 8px;
      background: #fefefe;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      resize: vertical;
      min-height: 130px;
    }
  }
`;

export const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: #29292e;
  }

  span {
    margin-left: 16px;
    background: #e559f9;
    border-radius: 9999px;
    padding: 8px 16px;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  span {
    font-size: 14px;
    font-weight: 500;
    color: #737380;

    button {
      background: transparent;
      border: 0;
      color: #835afd;
      text-decoration: underline;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  > span {
    margin-left: 8px;
    color: #29292e;
    font-weight: 500;
    font-size: 14px;
  }
`;

export const QuestionList = styled.div`
  margin-top: 32px;
`;

export const LikeButton = styled.button<LikeButtonProps>`
  display: flex;
  align-items: flex-end;
  color: #737380;
  gap: 8px;

  transition: filter 0.2s;

  ${(props) =>
    props.isLiked &&
    css`
      color: #835afd;

      svg path {
        stroke: #835afd;
      }
    `}

  &:hover {
    filter: brightness(0.7);
  }
`;
