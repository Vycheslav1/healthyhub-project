import { NavLink } from 'react-router-dom';
import one from '../../images/one.png';
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

export const ForgotPasswordForm = () => {
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
        <ForgotPasswordFormWrapper>
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
