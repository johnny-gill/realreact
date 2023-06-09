export const App = () => {
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      <h1 style={{ color: 'red' }}>안녕</h1>

      <p style={contentStyle}>사랑해</p>
      <button onClick={onClickButton}>버튼</button>
    </>
  );
};
