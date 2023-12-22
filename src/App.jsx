import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import FirstPage from 'pages/FirstPage/FirstPage';
import SecondPage from 'pages/SecondPage/SecondPage';
import HalfPage from 'pages/HalfPage/HalfPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './AppStyled';
import { MainPage } from 'pages/MainPage';
import { SingUpPage } from 'pages/SingUpPage';
import { SingInPage } from 'pages/SingInPage';
import { ForgotPasswordPage } from 'pages/ForgotPasswordPage';
import { RecommendedFood } from 'pages/RecommendedFood/RecommendedFood';
import { RestrictedRoude } from 'components/RestrictedRoude';
import { PrivateRoute } from 'components/PrivateRoute';
import { OnePage } from 'pages/OnePage';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { useAuth } from 'src/hooks/useAuth';

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
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<OnePage />} />
          <Route
            path="/signup"
            element={
              <RestrictedRoude redirectTo="/main" component={<SingUpPage />} />
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

          <Route path="/recommended-page" element={<RecommendedFood />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}

export default App;
