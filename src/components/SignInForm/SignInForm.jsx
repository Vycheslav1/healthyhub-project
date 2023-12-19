import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import {
  ImageSignIn,
  SignInContainer,
  SignInDescription,
  SignInFormWrapper,
  SignInTitle,
  SignInLabel,
  FormSignIn,
  SignInInput,
  SignInButton,
  FootWrapperTwo,
  FootLinkOne,
  FootWrapperOne,
  FootLinkTextTwo,
  FootLinkTwo,
} from './SignInForm_styled';
import one from '../../images/one.png';

export const SignInForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
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
    <SignInContainer>
      <div>
        <ImageSignIn src={one} alt="Sport and fitness tracker" />
      </div>
      <SignInFormWrapper>
        <SignInTitle>Sign in</SignInTitle>
        <SignInDescription>
          You need to login to use the service
        </SignInDescription>
        <FormSignIn onSubmit={handleSubmit}>
          <SignInLabel>
            <SignInInput type="text" name="email" placeholder="E-mail" />
          </SignInLabel>
          <SignInLabel>
            <SignInInput
              type="password"
              name="password"
              placeholder="Password"
            />
          </SignInLabel>
          <SignInButton type="submit">Sing in</SignInButton>
        </FormSignIn>
        <FootWrapperOne>
          <FootLinkOne to={'/forgot-password'}>
            Forgot your password?
          </FootLinkOne>
        </FootWrapperOne>
        <FootWrapperTwo>
          <FootLinkTextTwo>If you don't have an account yet?</FootLinkTextTwo>
          <FootLinkTwo to={'/signup'}>Sing up</FootLinkTwo>
        </FootWrapperTwo>
      </SignInFormWrapper>
    </SignInContainer>
  );
};
