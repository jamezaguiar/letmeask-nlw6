import styled, { css } from 'styled-components';

type ContainerProps = {
  isOutlined: boolean;
};

export const Container = styled.button<ContainerProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #835afd;
  color: #fff;
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  ${(props) =>
    props.isOutlined &&
    css`
      background: #fff;
      border: 1px solid #835afd;
      color: #835afd;
    `}

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
