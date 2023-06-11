import { useEffect, useState } from 'react';
import { ColoredMessage } from './components/ColoredMessage';
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponent } from './components/StyledComponent';
import { Emotion } from './components/Emotion';
import { TailwindCss } from './components/TailwindCss';

export const App = () => {
  console.log('Rendering App');

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    console.log('mount 및 num2이 바뀔때만~');
  }, [num2]);

  const onClickButton1 = () => {
    setNum1((prev) => prev + 1);
  };

  const onClickButton2 = () => {
    setNum2((prev) => prev + 1);
  };

  return (
    <>
      <TailwindCss />
      <CssModules />
      <StyledJsx />
      <StyledComponent />
      <Emotion />
      <h1 style={{ color: 'red' }}>안녕</h1>
      <ColoredMessage color="blue">사랑해요?</ColoredMessage>
      <ColoredMessage color="pink">사랑해요!</ColoredMessage>
      <button onClick={onClickButton1}>버튼1</button>
      <p>{num1}</p>
      <button onClick={onClickButton2}>버튼2</button>
      <p>{num2}</p>
    </>
  );
};
