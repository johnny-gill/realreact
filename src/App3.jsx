import { useContext } from 'react';
import { Card } from './components/Card';
import { AdminFlagContext } from './components/providers/AdminFlagProvider';

export const App3 = () => {
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {isAdmin ? <span>관리자입니다</span> : <span>관리자가 아입니다</span>}
      <button onClick={onClickSwitch}>전환</button>
      <Card />
    </div>
  );
};
