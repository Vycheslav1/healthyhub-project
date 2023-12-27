import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import { getDateLastWeight } from '../../../redux/auth/selectors';
import { refreshUser, updateWeightThunk } from '../../../redux/auth/operations';
import { fetchCaloriesIntake } from '../../../redux/dialyGoalCalories/operations';

import CloseModalButton from '../CloseModalButton/CloseModalButton';
import {
  Overlay,
  WeightContainer,
  WeightLayout,
  MobileWeightContainer,
  DateContainer,
  Subtitle,
  Title,
  Text,
  Date,
  WeightForm,
  SubmitButton,
  WeightInput,
  ErrorText,
  CancelButton,
} from './CurrentWeightModal.styled';

const schema = yup.object({
  weight: yup
    .number()
    .min(1, 'weight can not be less 1 kg')
    .max(300, 'weight can not be more 300 kg')
    .required('please enter your weight'),
});

export default function CurrentWeightModal({ onClose, date }) {
  const dispatch = useDispatch();
  const dateLastWeight = useSelector(getDateLastWeight);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleSubmit = ({ weight }, actions) => {
    dispatch(updateWeightThunk({ weight }));
    Notiflix.Notify.success('Your data has been successfully updated!');
    dispatch(refreshUser());
    setTimeout(() => {
      dispatch(fetchCaloriesIntake());
    }, 200);

    actions.resetForm();
    onClose();
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <WeightLayout>
        <WeightContainer>
          <MobileWeightContainer>
            <CloseModalButton onClose={onClose} />
            <Title>Enter your current weight</Title>
            <Subtitle>You can record your weight once a day</Subtitle>
            <DateContainer>
              <Text>Today</Text>
              <Date>{date}</Date>
            </DateContainer>
            {dateLastWeight === date ? (
              <p>You already recorded your weight today</p>
            ) : (
              <Formik
                initialValues={{
                  weight: '',
                }}
                validationSchema={schema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <WeightForm
                    $showIcon={
                      errors.weight && touched.weight ? 'block' : 'none'
                    }
                  >
                    <div>
                      <div>
                        <WeightInput
                          name="weight"
                          type="number"
                          placeholder="Enter your weight"
                          borderstyle={
                            errors.weight && touched.weight
                              ? '1px solid rgba(231, 74, 59, 1)'
                              : ''
                          }
                        />
                        <ErrorMessage name="weight">
                          {(msg) => <ErrorText>{msg}</ErrorText>}
                        </ErrorMessage>
                      </div>
                    </div>
                    <SubmitButton type="submit">Confirm</SubmitButton>
                  </WeightForm>
                )}
              </Formik>
            )}
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
          </MobileWeightContainer>
        </WeightContainer>
      </WeightLayout>
    </Overlay>
  );
}
