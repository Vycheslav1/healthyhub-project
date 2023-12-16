import { NavLink } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

export const SignInForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <div>
      <div>
        <img />
      </div>
      <div>
        <h2>Sign in</h2>
        <p>You need to login to use the service</p>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" name="email" placeholder="E-mail" />
          </label>
          <label>
            <input type="password" name="password" placeholder="Password" />
          </label>
          <button type="submit">Sing in</button>
        </form>
        <NavLink to={'/forgot-password'}>Forgot your password?</NavLink>
        <div>
          <p>Do you already have an account?</p>
          <NavLink to={'/signup'}>Sing up</NavLink>
        </div>
      </div>
    </div>
  );
};
