import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { BodyParameters } from 'src/components/BodyParameters/BodyParameters';
import { SelectGenderAge } from 'src/components/SelectGenderAge/SelectGenderAge';
import { YourActivity } from 'src/components/YourActivity/YourActivity';
import { YourGoal } from 'src/components/YourGoal/YourGoal';
import { register } from '../../redux/auth/operations';
import {
  ButtonNext,
  ErrorsMessage,
  Form,
  FormContainer,
  FormDescription,
  FormTitle,
  FormWrapper,
  IconSpan,
  ImageFormOne,
  Input,
  Label,
  NavLinkSignIn,
  ImageToggle,
  TextSignIn,
  TextSignInWrapper,
} from './SingUpFormStyled';
import one from 'src/images/one.png';
import error from 'src/images/svg/error.svg';
import correct from 'src/images/svg/correct.svg';
import eye from 'src/images/svg/eye.svg';
import eyeOff from 'src/images/svg/eye-off.svg';

export const SignUpForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const toggleCheckboxChange = () => {
    setShowPassword(!showPassword);
    setIsPasswordValid(false);
  };

  const dispatch = useDispatch();

  const validation = [
    Yup.object().shape({
      name: Yup.string().min(2, 'Too short').required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
          'Enter a valid Password (min 6 characters, 1 upper case, 1 lower case, 1 number)'
        )
        .required('Password is required'),
    }),
    Yup.object().shape({
      goal: Yup.string().required('Please select your goal'),
    }),
    Yup.object().shape({
      gender: Yup.string().required('Please select your gender'),
      age: Yup.string().required('Required'),
    }),
    Yup.object().shape({
      height: Yup.string().required('Required'),
      weight: Yup.string().required('Required'),
    }),
    Yup.object().shape({
      activity: Yup.string().required('Please select your activity'),
    }),
  ];

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      goal: '',
      gender: '',
      age: '',
      height: '',
      weight: '',
      activity: '',
    },
    validationSchema: validation[currentPage - 1],

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {currentPage === 1 && (
        <FormContainer>
          <div>
            <ImageFormOne src={one} alt="Sport and fitness tracker" />
          </div>
          <FormWrapper>
            <FormTitle>Sign up</FormTitle>
            <FormDescription>
              You need to register to use the service
            </FormDescription>

            <Form autoComplete="off" onSubmit={formik.handleSubmit}>
              <div>
                <Label
                  style={{
                    border:
                      formik.values.name === '' && !formik.touched.name
                        ? '1px solid #e3ffa8'
                        : formik.errors.name
                        ? '1px solid red'
                        : '1px solid #3CBC81',
                  }}
                >
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                  />

                  {formik.values.name === '' ? null : formik.errors.name ? (
                    <IconSpan src={error} alt="Error icon" />
                  ) : (
                    <IconSpan src={correct} alt="Correct icon" />
                  )}
                </Label>
                {formik.errors.name && formik.touched.name && (
                  <ErrorsMessage>{formik.errors.name}</ErrorsMessage>
                )}
              </div>
              <div>
                <Label
                  style={{
                    border:
                      formik.values.email === '' && !formik.touched.email
                        ? '1px solid #e3ffa8'
                        : formik.errors.email
                        ? '1px solid red'
                        : '1px solid #3CBC81',
                  }}
                >
                  <Input
                    id="email"
                    name="email"
                    type="email"
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
                </Label>
                {formik.errors.email && formik.touched.email && (
                  <ErrorsMessage>{formik.errors.email}</ErrorsMessage>
                )}
              </div>
              <div>
                <Label
                  style={{
                    border:
                      formik.values.password === '' && !formik.touched.password
                        ? '1px solid #e3ffa8'
                        : formik.errors.password
                        ? '1px solid red'
                        : '1px solid #3CBC81',
                  }}
                >
                  <Input
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
                </Label>
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
              </div>
              <ButtonNext
                style={{
                  boxShadow:
                    !formik.isValid || !formik.dirty || !formik.touched
                      ? 'none'
                      : '0px 0px 5px #e3ffa8',
                }}
                type="button"
                disabled={!formik.isValid || !formik.dirty || !formik.touched}
                onClick={nextPage}
              >
                Next
              </ButtonNext>
            </Form>

            <TextSignInWrapper>
              <TextSignIn>Do you already have an account?</TextSignIn>
              <NavLinkSignIn to={'/signin'}>Sing in</NavLinkSignIn>
            </TextSignInWrapper>
          </FormWrapper>
        </FormContainer>
      )}

      {currentPage === 2 && (
        <YourGoal formik={formik} next={nextPage} prev={prevPage} />
      )}
      {currentPage === 3 && (
        <SelectGenderAge formik={formik} next={nextPage} prev={prevPage} />
      )}
      {currentPage === 4 && (
        <BodyParameters formik={formik} next={nextPage} prev={prevPage} />
      )}
      {currentPage === 5 && <YourActivity formik={formik} prev={prevPage} />}
    </>
  );
};
