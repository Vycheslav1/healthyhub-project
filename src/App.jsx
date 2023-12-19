import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import FirstPage from 'pages/FirstPage/FirstPage';
import SecondPage from 'pages/SecondPage/SecondPage';
import HalfPage from 'pages/HalfPage/HalfPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App_styled';
import { MainPage } from '../src/pages/MainPage';
import { SingUpPage } from '../src/pages/SingUpPage';
import { SingInPage } from '../src/pages/SingInPage';
import { ForgotPasswordPage } from '../src/pages/ForgotPasswordPage';
import { RestrictedRoude } from './components/RestrictedRoude';
import { PrivateRoute } from './components/PrivateRoute';
import { OnePage } from './pages/OnePage';

export default function App() {
  return (
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
//export default App;
