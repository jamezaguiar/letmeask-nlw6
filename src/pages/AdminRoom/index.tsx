import { useHistory, useParams } from 'react-router-dom';

import { database } from '../../services/firebase';

import { useRoom } from '../../hooks/useRoom';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';

import {
  Container,
  Header,
  Content,
  Main,
  RoomTitle,
  QuestionList,
  DeleteButton
} from './styles';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';

type AdminRoomParams = {
  id: string;
};

export function AdminRoom() {
  const history = useHistory();
  const params = useParams<AdminRoomParams>();
  const roomId = params.id;

  const { questions, title } = useRoom(roomId);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    });

    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir essa pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return (
    <Container>
      <Header>
        <Content>
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined={true} onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </Content>
      </Header>
      <Main>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length > 0 && (
            <span>
              {questions.length}{' '}
              {questions.length === 1 ? 'pergunta' : 'perguntas'}
            </span>
          )}
        </RoomTitle>

        <QuestionList>
          {questions.map((question) => (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
            >
              <DeleteButton
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="Remover pergunta" />
              </DeleteButton>
            </Question>
          ))}
        </QuestionList>
      </Main>
    </Container>
  );
}
