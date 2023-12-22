import styled from 'styled-components';
import { Field, Form } from 'formik';
import errorIcon from '/src/components/Header/images-for-header/error.svg';

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

export const WeightLayout = styled.div`
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

export const WeightContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(5, 5, 5, 1);
  padding: 24px 10px;

  @media (min-width: 834px) {
    position: absolute;
    top: 0;
    width: 392px;
    height: 200px;
    border-radius: 12px;
    background: rgba(15, 15, 15, 1);
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
    padding: 20px 24px 40px;
    margin-left: 294px;
    margin-right: 148px;
  }

  @media (min-width: 1440px) {
    margin-left: 1012px;
    margin-right: 36px;
  }
`;

export const MobileWeightContainer = styled.div`
  width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 834px) {
    width: 100%;
    height: 200px;
    padding: 0;
    margin: 0;
  }
`;

export const Title = styled.h3`
  color: #ffffff;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const Subtitle = styled.p`
  color: #b6b6b6;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 1.43;
`;

export const DateContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.43;
  color: #ffffff;
`;

export const Date = styled.p`
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
  font-weight: 500;
`;

export const WeightForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;

  &::after {
    position: absolute;
    top: 12px;
    right: 10px;
    content: '';
    display: ${({ $showIcon }) => $showIcon};
    width: 16px;
    height: 16px;
    background-image: url('${errorIcon}');

    @media (min-width: 834px) {
      bottom: 29px;
      left: 140px;
    }
  }

  @media (min-width: 834px) {
    flex-direction: row;

    align-items: flex-start;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 8px 10px;
  color: rgba(15, 15, 15, 1);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  border-radius: 12px;
  background: rgba(227, 255, 168, 1);
  border: 1px solid rgba(227, 255, 168, 1);

  @media (min-width: 834px) {
    width: 166px;
  }
`;

export const WeightInput = styled(Field)`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 8px 10px;
  color: #ffffff;
  font-size: 14px;
  line-height: 1.43;
  border-radius: 12px;
  background: rgba(5, 5, 5, 1);
  border: 1px solid rgba(227, 255, 168, 1);
  outline: none;
  border: ${({ borderstyle }) => borderstyle};
  font-family: Poppins;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    color: #b6b6b6;
  }

  @media (min-width: 834px) {
    background: rgba(15, 15, 15, 1);
    width: 166px;
  }
`;

export const ErrorText = styled.p`
  color: rgba(231, 74, 59, 1);
  font-size: 12px;
  line-height: 1.17;
  margin-top: 4px;
`;

export const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  color: #b6b6b6;
  font-size: 14px;
  line-height: 1.43;
  background: transparent;
  margin-top: 24px;
  border: none;

  @media (min-width: 834px) {
    display: none;
  }
`;
