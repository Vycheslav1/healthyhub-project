import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Div } from './SharedLayoutStyled.jsx';

export default function SharedLayout() {
  return (
    <Div>
      <Header />
      <Outlet />
    </Div>
  );
}

//export default SharedLayout;
