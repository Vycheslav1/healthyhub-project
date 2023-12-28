import Notiflix from 'notiflix';
import {
  ModalBtnCancel,
  ModalBtnSubmit,
  ModalContent,
  ModalDesc,
  ModalForm,
  ModalHead,
  ModalInput,
  ModalOverlay,
} from './ModalAddWater.styled';
import { useDispatch } from 'react-redux';
import { addWater } from '../../redux/usersGoal/operations';

export const AddWaterModal = ({ closeModal }) => {
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
    <ModalOverlay onClick={handleOverlyClick}>
      <ModalContent>
        <ModalHead>Add water intake</ModalHead>

        <ModalForm onSubmit={handleSubmit}>
          <ModalDesc>How much water</ModalDesc>

          <ModalInput
            type="number"
            name="number"
            placeholder="Enter milliliters"
          />

          <ModalBtnSubmit type="submit">Confirm</ModalBtnSubmit>

          <ModalBtnCancel onClick={closeModal}>Cancel</ModalBtnCancel>
        </ModalForm>
      </ModalContent>
    </ModalOverlay>
  );
};
