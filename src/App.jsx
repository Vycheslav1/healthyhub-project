import { Route, Routes } from 'react-router-dom';
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
import { RestrictedRoude } from 'components/RestrictedRoude';
import { PrivateRoute } from 'components/PrivateRoute';
import { OnePage } from 'pages/OnePage';

// const test = import.meta.env.VITE_API_TEST;

function App() {
  // console.log(test)
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
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
          {/* <Route path="/" element={<SharedLayout />}>
          <Route path="/first" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />}>
            <Route path=":half" element={<HalfPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/recommended-page" element={<RecommendedFood />} />
        </Route> */}
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
