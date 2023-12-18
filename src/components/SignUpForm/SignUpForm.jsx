import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { BodyParameters } from 'components/BodyParameters/BodyParameters';
import { SelectGenderAge } from 'components/SelectGenderAge/SelectGenderAge';
import { YourActivity } from 'components/YourActivity/YourActivity';
import { YourGoal } from 'components/YourGoal/YourGoal';
import { register } from '../../redux/auth/operations';
import {
  ButtonNext,
  Checkbox,
  ErrorsMessage,
  Form,
  FormContainer,
  FormDescription,
  FormTitle,
  FormWrapper,
  ImageFormOne,
  Input,
  Label,
  NavLinkSignIn,
  TextSignIn,
  TextSignInWrapper,
} from './SingUpForm.styled';
import one from '../../images/one.png';

export const SignUpForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();
  const validation = [
    Yup.object().shape({
      name: Yup.string().min(2, 'Too short').required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .min(6, 'Enter a valid Password')
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
                      formik.values.name === ''
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
                </Label>
                {formik.errors.name &&
                  formik.touched.name &&
                  formik.values.name !== '' && (
                    <ErrorsMessage>{formik.errors.name}</ErrorsMessage>
                  )}
              </div>
              <div>
                <Label
                  style={{
                    border:
                      formik.values.email === ''
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
                </Label>

                {formik.errors.email &&
                  formik.touched.email &&
                  formik.values.email !== '' && (
                    <ErrorsMessage>{formik.errors.email}</ErrorsMessage>
                  )}
              </div>
              <div>
                <Label
                  style={{
                    border:
                      formik.values.password === ''
                        ? '1px solid #e3ffa8'
                        : formik.errors.password
                        ? '1px solid red'
                        : '1px solid #3CBC81',
                  }}
                >
                  <Input
                    id="password"
                    name="password"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                  {formik.values.password !== '' && (
                    <>
                      <Checkbox
                        type="checkbox"
                        onChange={handleCheckboxChange}
                      />
                    </>
                  )}
                </Label>
                {formik.errors.password &&
                  formik.touched.password &&
                  formik.values.password !== '' && (
                    <ErrorsMessage>{formik.errors.password}</ErrorsMessage>
                  )}
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
