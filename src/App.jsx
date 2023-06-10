import { ColoredMessage } from './components/ColoredMessage';

export const App = () => {
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      <h1 style={{ color: 'red' }}>안녕</h1>
      <ColoredMessage color="blue">사랑해요?</ColoredMessage>
      <ColoredMessage color="pink">사랑해요!</ColoredMessage>
      <button onClick={onClickButton}>버튼</button>
    </>
  );
};
