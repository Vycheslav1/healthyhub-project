import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { SingUpPage } from 'pages/SingUpPage';
import { SingInPage } from 'pages/SingInPage';
import { ForgotPasswordPage } from 'pages/ForgotPasswordPage';
import { RecommendedFood } from 'pages/RecommendedFood/RecommendedFood';
import { OnePage } from 'pages/OnePage';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { useAuth } from 'src/hooks/useAuth';
import { PrivateRoute } from './components/PrivateRoute';
import { SettingPage } from './pages/SettingPage/SettingPage';
import { DiaryPage } from './pages/DiaryPage/DiaryPage';
import { Dashboard } from './components/Dashboard/Dashboard';
import { RestrictedRoute } from './components/RestrictedRoute';
import { Loader } from './components/Loader/Loader';
import { Main } from './pages/Main/Main';

function App() {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const { isLoggedIn } = useAuth();

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route path="/main" element={<Main />}></Route> */}

        <Route index element={isLoggedIn ? <Main /> : <OnePage />} />
        <Route
          path="signup"
          element={
            <RestrictedRoute redirectTo="/signin" component={<SingUpPage />} />
          }
        />
        <Route
          path="signin"
          element={
            <RestrictedRoute redirectTo="/main" component={<SingInPage />} />
          }
        />
        <Route
          path="main"
          element={<PrivateRoute redirectTo="/signin" component={<Main />} />}
        />
        <Route
          path="forgot-password"
          element={
            <RestrictedRoute
              redirectTo="/"
              component={<ForgotPasswordPage />}
            />
          }
        />
        <Route
          path="dashboard"
          element={
            <PrivateRoute redirectTo="/signin" component={<Dashboard />} />
          }
        />
        <Route
          path="diary"
          element={
            <PrivateRoute redirectTo="/signin" component={<DiaryPage />} />
          }
        />
        <Route
          path="recommended-food"
          element={
            <PrivateRoute
              redirectTo="/signin"
              component={<RecommendedFood />}
            />
          }
        />
        <Route
          path="settings"
          elements={
            <PrivateRoute redirectTo="/signin" component={<SettingPage />} />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
