import styled from 'styled-components';

export const Container = styled.div`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  p {
    color: #29292e;
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 24px;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
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
    color: #737380;
    font-size: 14px;
  }
`;

export const Buttons = styled.div``;
