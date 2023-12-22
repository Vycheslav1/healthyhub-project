import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
  IconSpan,
  ErrorsMessage,
} from './ForgotPasswordFormStyled';
import { forgotPassword } from '../../redux/auth/operations';
import one from 'src/images/one.png';
import error from 'src/images/svg/error.svg';
import correct from 'src/images/svg/correct.svg';

export const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleForgotPassword = (e) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     forgotPassword({
  //       email: form.elements.email.value,
  //     })
  //   );
  //   navigate('/signin');
  //   form.reset();
  // };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Email is required'),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      dispatch(
        forgotPassword({
          email: values.email,
        }),
        navigate('/signin')
      );
    },
  });
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
        <ForgotPasswordFormWrapper
          onSubmit={formik.handleSubmit}
          autoComplete="off"
        >
          <div>
            <ForgotPasswordLabel
              style={{
                border:
                  formik.values.email === '' && !formik.touched.email
                    ? '1px solid #e3ffa8'
                    : formik.errors.email
                    ? '1px solid red'
                    : '1px solid #3CBC81',
              }}
            >
              <ForgotPasswordInput
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
            </ForgotPasswordLabel>
            {formik.errors.email && formik.touched.email && (
              <ErrorsMessage>{formik.errors.email}</ErrorsMessage>
            )}
          </div>
          <ForgotPasswordButton type="submit">Send</ForgotPasswordButton>
        </ForgotPasswordFormWrapper>
        <ForgotPasswordTextWrapper>
          <ForgotPasswordText>
            Do you already have an account?
          </ForgotPasswordText>
          <ForgotPasswordLink to={'/signin'}>Sing in</ForgotPasswordLink>
        </ForgotPasswordTextWrapper>
      </ForgotPasswordWrapper>
    </ForgotPasswordContainer>
  );
};
