import { Route, Routes } from 'react-router-dom';
// import SharedLayout from 'components/SharedLayout/SharedLayout';
// import FirstPage from 'pages/FirstPage/FirstPage';
// import SecondPage from 'pages/SecondPage/SecondPage';
// import HalfPage from 'pages/HalfPage/HalfPage';
// import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './AppStyled';
import { MainPage } from '../src/pages/MainPage';
import { SingUpPage } from '../src/pages/SingUpPage';
import { SingInPage } from '../src/pages/SingInPage';
import { ForgotPasswordPage } from '../src/pages/ForgotPasswordPage';
import { RestrictedRoude } from './components/RestrictedRoude';
import { PrivateRoute } from './components/PrivateRoute';
import { OnePage } from './pages/OnePage';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { DashboardPage } from './pages/DashboardPage/DashboardPage';

// const test = import.meta.env.VITE_API_TEST;

function App() {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <AppWrapper>
      <Routes>
        <Route></Route>
        <Route path="/" element={<OnePage />} />
        <Route
          path="/signup"
          element={
            <RestrictedRoude redirectTo="/dairy" component={<SingUpPage />} />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoude redirectTo="/main" component={<SingInPage />} />
          }
        />
        <Route
          path="/main"
          element={
            <PrivateRoute redirectTo="/signin" component={<MainPage />} />
          }
        />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* <Route path="/" element={<SharedLayout />}>
          <Route path="/first" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />}>
            <Route path=":half" element={<HalfPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route> */}
      </Routes>
    </AppWrapper>
  );
}

export default App;
