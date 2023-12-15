import { NavLink } from 'react-router-dom';

export const ForgotPasswordForm = () => {
  return (
    <div>
      <div>
        <img />
      </div>
      <div>
        <h2>Forgot your password</h2>
        <p>We will send you an email with recovery instructions</p>
        <form>
          <label>
            <input type="text" name="email" placeholder="E-mail" />
          </label>
          <button type="submit">Send</button>
        </form>
        <div>
          <p>Do you already have an account?</p>
          <NavLink to={'/signup'}>Sing up</NavLink>
        </div>
      </div>
    </div>
  );
};
