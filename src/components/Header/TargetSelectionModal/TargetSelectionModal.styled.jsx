import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  font-family: Poppins;

  @media (min-width: 834px) {
    top: 100px;
  }
`;

export const TargetLayout = styled.div`
  position: relative;
  width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 834px) {
    width: 834px;
    padding-left: 27px;
    padding-right: 27px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding-left: 34px;
    padding-right: 34px;
  }
`;

export const TargetContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--primary-black-color);
  padding: 24px 10px;

  @media (min-width: 834px) {
    position: absolute;
    top: 0;
    width: 392px;
    height: 352px;
    border-radius: 12px;
    background: var(--primary-black-second-color);
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
    padding: 20px 24px 40px;
    margin-left: 294px;
    margin-right: 148px;
  }

  @media (min-width: 1440px) {
    margin-left: 800px;
    margin-right: 248px;
  }
`;

export const MobileTargetContainer = styled.div`
  width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 834px) {
    width: 100%;
    height: 352px;
    padding: 0;
    margin: 0;
  }
`;

export const Title = styled.h3`
  color: var(--primary-white-color);
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const Subtitle = styled.p`
  color: var(--primary-grey-color);
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 1.43;
`;

export const RadioForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 834px) {
    align-items: flex-start;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 8px 10px;
  color: var(--primary-black-second-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  border-radius: 12px;
  background: var(--primary-light-green-color);
  border: 1px solid var(--primary-light-green-color);

  @media (min-width: 834px) {
    width: 166px;
  }
`;

export const RadioInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;
`;

export const RadioContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const RadioLabel = styled.label`
  color: var(--primary-white-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  cursor: pointer;

  @media (min-width: 834px) {
    font-weight: 400;
  }
`;

export const CheckedRadioLabel = styled.label`
  color: var(--primary-violet-color);
  font-size: 14px;
  line-height: 1.43;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-grey-color);
  background: rgba(255, 255, 255, 0.01);
`;

export const CheckedImageContainer = styled.div`
  padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-violet-color);
  background: rgba(255, 255, 255, 0.01);
`;

export const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  color: var(--primary-grey-color);
  font-size: 14px;
  line-height: 1.43;
  background: transparent;
  margin-top: 24px;
  border: none;

  @media (min-width: 834px) {
    display: none;
  }
`;
