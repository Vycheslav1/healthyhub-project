import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Div } from './SharedLayout_styled.jsx';

const SharedLayout = () => {
  return (
    <Div>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Div>
  );
};

export default SharedLayout;
