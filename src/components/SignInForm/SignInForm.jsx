import { useFormik } from 'formik';
import * as Yup from 'yup';
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
  ImageToggle,
  ErrorsMessage,
  IconSpan,
} from './SignInFormStyled';
import one from 'src/images/one.png';
import error from 'src/images/svg/error.svg';
import correct from 'src/images/svg/correct.svg';
import eye from 'src/images/svg/eye.svg';
import eyeOff from 'src/images/svg/eye-off.svg';
import { useState } from 'react';

export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const toggleCheckboxChange = () => {
    setShowPassword(!showPassword);
    setIsPasswordValid(false);
  };

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .min(6, 'Enter a valid Password')
        .required('Password is required'),
    }),

    onSubmit: (values) => {
      console.log(values);
      dispatch(
        logIn({
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  return (
    <>
      <SignInContainer>
        <div>
          <ImageSignIn src={one} alt="Sport and fitness tracker" />
        </div>
        <SignInFormWrapper>
          <SignInTitle>Sign in</SignInTitle>
          <SignInDescription>
            You need to login to use the service
          </SignInDescription>
          <FormSignIn onSubmit={formik.handleSubmit} autoComplete="off">
            <SignInLabel
              style={{
                border:
                  formik.values.email === '' && !formik.touched.email
                    ? '1px solid #e3ffa8'
                    : formik.errors.email
                    ? '1px solid red'
                    : '1px solid #3CBC81',
              }}
            >
              <SignInInput
                id="email"
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.values.email === '' ? null : formik.errors.email ? (
                <IconSpan src={error} alt="Error icon" />
              ) : (
                <IconSpan src={correct} alt="Correct icon" />
              )}
            </SignInLabel>
            {formik.errors.email && formik.touched.email && (
              <ErrorsMessage>{formik.errors.email}</ErrorsMessage>
            )}

            <SignInLabel
              style={{
                border:
                  formik.values.password === '' && !formik.touched.password
                    ? '1px solid #e3ffa8'
                    : formik.errors.password
                    ? '1px solid red'
                    : '1px solid #3CBC81',
              }}
            >
              <SignInInput
                id="password"
                name="password"
                title="Min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.values.password !== '' && (
                <>
                  {showPassword ? (
                    <ImageToggle
                      className="icon"
                      src={eye}
                      alt=""
                      onClick={toggleCheckboxChange}
                    />
                  ) : (
                    <ImageToggle
                      className="icon"
                      src={eyeOff}
                      alt=""
                      onClick={toggleCheckboxChange}
                    />
                  )}
                </>
              )}
            </SignInLabel>
            {formik.errors.password &&
            formik.touched.password &&
            formik.values.password === '' ? (
              <ErrorsMessage>{formik.errors.password}</ErrorsMessage>
            ) : formik.values.password !== '' && formik.errors.password ? (
              <ErrorsMessage>{formik.errors.password}</ErrorsMessage>
            ) : formik.values.password !== '' && !formik.errors.password ? (
              <ErrorsMessage style={{ color: '#3CBC81' }}>
                Correct
              </ErrorsMessage>
            ) : null}
            <SignInButton
              style={{
                backgroundColor:
                  !formik.isValid || !formik.dirty || !formik.touched
                    ? 'lightgray'
                    : '#e3ffa8',
              }}
              type="submit"
              disabled={!formik.isValid || !formik.dirty || !formik.touched}
            >
              Sing in
            </SignInButton>
          </FormSignIn>
          <FootWrapperOne>
            <FootLinkOne to={'/forgot-password'}>
              Forgot your password?
            </FootLinkOne>
          </FootWrapperOne>
          <FootWrapperTwo>
            <FootLinkTextTwo>If you don't have an account yet</FootLinkTextTwo>
            <FootLinkTwo to={'/signup'}>Sing up</FootLinkTwo>
          </FootWrapperTwo>
        </SignInFormWrapper>
      </SignInContainer>
    </>
  );
};
