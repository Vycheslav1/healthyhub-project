import { useNavigate } from 'react-router-dom';
import one from './images/one.png';
import {
  ForgotPasswordContainer,
  ForgotPasswordWrapper,
  ImageForgotPassword,
  ForgotPasswordTitle,
  ForgotPasswordDescrip,
  ForgotPasswordFormWrapper,
  ForgotPasswordLabel,
  ForgotPasswordInput,
  ForgotPasswordButton,
  ForgotPasswordTextWrapper,
  ForgotPasswordText,
  ForgotPasswordLink,
} from './ForgotPasswordForm.styled';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../redux/auth/operations';

export const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      forgotPassword({
        email: form.elements.email.value,
      })
    );
    navigate('/signin');
    form.reset();
  };

  return (
    <ForgotPasswordContainer>
      <div>
        <ImageForgotPassword src={one} alt="Sport and fitness tracker" />
      </div>
      <ForgotPasswordWrapper>
        <ForgotPasswordTitle>Forgot your password</ForgotPasswordTitle>
        <ForgotPasswordDescrip>
          We will send you an email with recovery instructions
        </ForgotPasswordDescrip>
        <ForgotPasswordFormWrapper onSubmit={handleForgotPassword}>
          <ForgotPasswordLabel>
            <ForgotPasswordInput
              type="text"
              name="email"
              placeholder="E-mail"
            />
          </ForgotPasswordLabel>
          <ForgotPasswordButton type="submit">Send</ForgotPasswordButton>
        </ForgotPasswordFormWrapper>
        <ForgotPasswordTextWrapper>
          <ForgotPasswordText>
            Do you already have an account?
          </ForgotPasswordText>
          <ForgotPasswordLink to={'/signin'}>Sing up</ForgotPasswordLink>
        </ForgotPasswordTextWrapper>
      </ForgotPasswordWrapper>
    </ForgotPasswordContainer>
  );
};
