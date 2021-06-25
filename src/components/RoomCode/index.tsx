import copyImg from '../../assets/images/copy.svg';

import { Container, Content } from './styles';

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <Container onClick={copyRoomCodeToClipboard}>
      <Content>
        <img src={copyImg} alt="Copiar código da sala" />
      </Content>
      <span>Sala #{props.code}</span>
    </Container>
  );
}
