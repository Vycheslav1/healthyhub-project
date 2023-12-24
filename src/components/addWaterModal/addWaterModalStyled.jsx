import styled from 'styled-components';

export const ModalOverly = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalContentAlt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding-top: 16px;
  padding-left: 12px;
  padding-right: 12px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 350px;
  border-radius: 12px;
  background: var(--color-primary-black-2, #0f0f0f);
  box-shadow: 0px 4px 14px rgba(227, 255, 168, 0.2);
`;
export const ModalHeadAlt = styled.h3`
  color: var(--color-primary-white, #fff);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 12px;
`;

export const AltText = styled.p`
  text-align: center;
  color: var(--color-primary-white, #fff);

  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
`;
export const AltText2 = styled.span`
  text-align: center;
  color: var(--color-primary-white, #fff);

  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
  margin-bottom: 20px;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ModalInput = styled.input`
  color: var(--color-primary-grey, #b6b6b6);
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
  border: 1px solid var(--color-primary-green-lite, #e3ffa8);
  background: var(--color-primary-black-2, #0f0f0f);
`;

export const ModalBtnConfirm = styled.button`
  color: var(--color-primary-black-2, #0f0f0f);
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
  border: 1px solid var(--color-primary-green-lite, #e3ffa8);
  background: var(--color-primary-green-lite, #e3ffa8);
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
  background: var(--color-primary-black-2, #0f0f0f);
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
  color: var(--color-primary-white, #fff);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 24px;
`;

export const ModalLabel = styled.p`
  color: var(--color-primary-white, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
`;

export const ModalBtnCancel = styled.button`
  width: 276px;
  height: 20px;
  background: var(--color-primary-black-2, #0f0f0f);

  color: var(--color-primary-grey, #b6b6b6);
  text-align: center;

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
