import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../src/pages/MainPage';
import { SingUpPage } from '../src/pages/SingUpPage';
import { SingInPage } from '../src/pages/SingInPage';
import { ForgotPasswordPage } from '../src/pages/ForgotPasswordPage';
import { RestrictedRoude } from './components/RestrictedRoude';
import { PrivateRoute } from './components/PrivateRoute';
import { OnePage } from './pages/OnePage';
import { RecommendedFood } from './pages/RecomendedFood/RecomendedFood';

// const test = import.meta.env.VITE_API_TEST;
function App() {
  // console.log(test);
  return (
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
        element={<PrivateRoute redirectTo="/signin" component={<MainPage />} />}
      />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/recommended-food" element={<RecommendedFood />} />
    </Routes>
  );
}
export default App;
