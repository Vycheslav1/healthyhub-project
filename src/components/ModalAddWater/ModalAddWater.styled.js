import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalContent = styled.div`
  position: absolute;
  padding-top: 16px;
  padding-left: 12px;
  padding-right: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 266px;
  border-radius: 12px;
  background: #0f0f0f;
  box-shadow: 0px 4px 14px rgba(227, 255, 168, 0.2);

  @media screen and (min-width: 834px) {
    width: 338px;
    height: 280px;
    padding-top: 24px;
    padding-left: 40px;
    padding-right: 40;
  }
`;

export const ModalHead = styled.h1`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    line-height: 36px;
    font-size: 30px;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ModalDesc = styled.p`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
`;

export const ModalInput = styled.input`
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: 276px;
  height: 36px;
  display: flex;
  padding: 8px 10px;
  margin-bottom: 16px;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid var(--primary-light-green-color);
  background: var(--primary-black-second-color);
  &[type='number'] {
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -moz-appearance: textfield;
    }
  }
`;

export const ModalBtnSubmit = styled.button`
  color: var(--primary-black-second-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  width: 276px;
  height: 36px;
  margin-bottom: 16px;
  border-radius: 12px;
  border: 1px solid var(--primary-light-green-color);
  background: var(--primary-light-green-color);
`;

export const ModalBtnCancel = styled.button`
  width: 276px;
  height: 20px;
  background: var(--primary-black-second-color);
  color: var(--primary-grey-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  border: none;
`;
