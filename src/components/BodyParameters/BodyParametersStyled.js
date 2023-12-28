import styled from 'styled-components';

export const BodyParametersContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  padding: 24px 10px 24px 10px;
  margin: auto;

  @media screen and (min-width: 834px) {
    align-items: center;
    width: 834px;
    padding: 40px 195px 286px 195px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    width: 1440px;
    padding: 40px 150px 66px 150px;
    margin: auto;
  }
`;

export const ImageBodyParameters = styled.img`
  width: 300px;
  height: 302px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 382px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 594px;
  }
`;

export const BodyParametersWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    width: 50%;
    margin-top: 80px;
    margin-left: 104px;
  }
`;

export const BodyParametersTitle = styled.h2`
  width: 280px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin: 24px auto 16px auto;

  @media screen and (min-width: 834px) {
    width: 264px;
    text-align: center;
    font-size: 30px;
    line-height: 36px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    text-align: start;
    margin-top: 0;
    margin-bottom: 16px;
  }
`;

export const BodyParametersDescr = styled.p`
  width: 280px;
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 834px) {
    width: 380px;
    text-align: center;
    font-size: 22px;
    line-height: 32px;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    margin-top: 0;
    margin-bottom: 24px;
  }
`;

export const BodyParametersForm = styled.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 234px;
  }
`;

export const BodyParametersWrapperLabel = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 458px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
  }
`;

export const BodyParametersLabel = styled.label`
  width: 280px;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 834px) {
    width: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
    display: flex;
    flex-direction: column;
    color: var(--primary-white-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 0;
  }
`;

export const BodyParametersInput = styled.input`
  margin-top: 12px;
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-light-green-color);
  color: #fff;
  outline: transparent;
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

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const BodyParametersButtonNext = styled.button`
  width: 280px;
  padding: 8px 10px;
  border-radius: 12px;
  /* background: var(--primary-light-green-color); */
  color: var(--primary-black-second-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`;

export const BodyParametersButtonBack = styled.button`
  width: 280px;
  color: var(--primary-grey-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 834px) {
    width: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`;
