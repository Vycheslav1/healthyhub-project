import { useState } from 'react';
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

export const AddWaterModal = () => {
  const [openModal, setOpenModal] = useState(true);

  const closeModalHendler = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHead>Add water intake</ModalHead>

        <ModalForm>
          <ModalDesc>How much water</ModalDesc>

          <ModalInput
            type="number"
            name="number"
            placeholder="Enter milliliters"
          />

          <ModalBtnSubmit type="submit">Confirm</ModalBtnSubmit>

          <ModalBtnCancel onClick={closeModalHendler}>Cancel</ModalBtnCancel>
        </ModalForm>
      </ModalContent>
    </ModalOverlay>
  );
};
