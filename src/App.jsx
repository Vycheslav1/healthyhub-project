import { Route, Routes } from 'react-router-dom';
// import SharedLayout from 'components/SharedLayout/SharedLayout';
// import FirstPage from 'pages/FirstPage/FirstPage';
// import SecondPage from 'pages/SecondPage/SecondPage';
// import HalfPage from 'pages/HalfPage/HalfPage';
// import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { MainPage } from '../src/pages/MainPage';
import { SingUpPage } from '../src/pages/SingUpPage';
import { SingInPage } from '../src/pages/SingInPage';
import { Dairy } from '../src/pages/Dairy';
import { ForgotPasswordPage } from '../src/pages/ForgotPasswordPage';
import { RestrictedRoude } from './components/RestrictedRoude';
import { PrivateRoute } from './components/PrivateRoute';
import { RecommendedFood } from './pages/RecomendedFood/RecomendedFood';

// const test = import.meta.env.VITE_API_TEST;

function App() {
  // console.log(test);
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/signup"
        element={
          <RestrictedRoude redirectTo="/dairy" component={<SingUpPage />} />
        }
      />
      <Route path="/signup" element={<SingUpPage />} />
      <Route
        path="/signin"
        element={
          <RestrictedRoude redirectTo="/dairy" component={<SingInPage />} />
        }
      />
      <Route path="/signin" element={<SingInPage />} />
      <Route
        path="/dairy"
        element={<PrivateRoute redirectTo="/signin" component={<Dairy />} />}
      />
      <Route path="/dairy" element={<Dairy />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/recommended-food" element={<RecommendedFood />} />
    </Routes>
  );
}
export default App;
