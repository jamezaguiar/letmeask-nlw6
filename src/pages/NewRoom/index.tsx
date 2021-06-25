import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { database } from '../../services/firebase';

import { useAuth } from '../../hooks/useAuth';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import { Container, Aside, Main, MainContent } from './styles';

import { Button } from '../../components/Button';

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();

  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = roomRef.push({
      title: newRoom,
      authorId: user?.id
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <Container>
      <Aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </Aside>
      <Main>
        <MainContent>
          <img src={logoImg} alt="Letmeask" />
          <h2>Crie uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              value={newRoom}
              onChange={(event) => setNewRoom(event.target.value)}
            />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </MainContent>
      </Main>
    </Container>
  );
}
