// import React from 'react';
// import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { addWater } from '../../redux/usersGoal/operations';
import {
  ModalOverly,
  ModalContentAlt,
  ModalHeadAlt,
  AltText,
  AltText2,
  ModalForm,
  ModalInput,
  ModalBtnConfirm,
  ModalContent,
  ModalHead,
  ModalLabel,
  ModalBtnCancel,
} from './addWaterModalStyled';
const AddWaterModal = ({ closeModal, waterGoal, waterUsed }) => {
  const dispatch = useDispatch();
  Notiflix.Notify.init({ zindex: 100000, position: 'center-top' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const login = Number(form.elements.number.value);

    if (login <= 0) {
      Notiflix.Notify.failure(
        'The entered number must be greater than zero :)'
      );

      return;
    }

    dispatch(addWater(login));
    form.reset();
    closeModal();
  };
  const handleOnClose = (e) => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  window.addEventListener('keydown', handleOnClose);

  const handleOverlyClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  return (
    <ModalOverly onClick={handleOverlyClick}>
      {waterUsed >= waterGoal ? (
        <ModalContentAlt>
          <ModalHeadAlt>Good result buddy</ModalHeadAlt>

          <AltText>Yours daily goal achieved</AltText>

          <AltText2>
            But don’t stop, remember, there is never too much water
          </AltText2>
          <ModalForm onSubmit={handleSubmit}>
            <ModalInput
              type="number"
              name="number"
              placeholder="Enter milliliters"
            />

            <ModalBtnConfirm type="submit">Confirm</ModalBtnConfirm>

            <ModalBtnCancel onClick={closeModal}>Cancel</ModalBtnCancel>
          </ModalForm>
        </ModalContentAlt>
      ) : (
        <ModalContent>
          <ModalHead>Add water intake</ModalHead>

          <ModalForm>
            <ModalLabel>How much water</ModalLabel>

            <ModalInput
              type="number"
              name="number"
              placeholder="Enter milliliters"
            />

            <ModalBtnConfirm type="submit">Confirm</ModalBtnConfirm>

            <ModalBtnCancel onClick={closeModal}>Cancel</ModalBtnCancel>
          </ModalForm>
        </ModalContent>
      )}
    </ModalOverly>
  );
};

export default AddWaterModal;
