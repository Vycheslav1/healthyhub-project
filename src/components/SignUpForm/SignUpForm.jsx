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

  const dispatch = useDispatch();
  const validation = [
    Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
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
              <Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </Label>
              {/* <div>{formik.errors.name}</div> */}

              <Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </Label>
              {/* <div>{formik.errors.email}</div> */}
              <Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </Label>
              {/* <div>{formik.errors.password}</div> */}

              <ButtonNext
                type="button"
                // disabled={!formik.isValid || !formik.dirty || !formik.touched}
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

// const SignupSchema = Yup.object({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   password: Yup.string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
//   goal: Yup.string().required('Required'),
//   gender: Yup.string().required('Required'),
//   age: Yup.string().required('Required'),
//   height: Yup.string().required('Required'),
//   weight: Yup.string().required('Required'),
//   activity: Yup.string().required('Required'),
// });

// validationSchema: Yup.object({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
// password: Yup.string()
//   .min(6, 'Password must be at least 6 characters')
//   .required('Password is required'),
//   goal: Yup.string().required('Please select your goal'),
//   gender: Yup.string().required('Please select your gender'),
//   age: Yup.string().required('Required'),
//   height: Yup.string().required('Required'),
//   weight: Yup.string().required('Required'),
//   activity: Yup.string().required('Please select your activity'),
// }),
