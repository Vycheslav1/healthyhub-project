import styled from 'styled-components';

export const GenderContainer = styled.div`
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
    padding: 40px 150px 90px 150px;
    margin: auto;
  }
`;

export const GenderImage = styled.img`
  width: 300px;
  height: 288px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 366px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 570px;
  }
`;

export const GenresWrapper = styled.div`
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    width: 50%;
    margin-top: 80px;
    margin-left: 104px;
    width: 444px;
  }
`;

export const GenresTitle = styled.h2`
  width: 280px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-top: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 36px;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    margin: 0 0 16px 0;
  }
`;

export const GenderDescription = styled.p`
  width: 280px;
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 400px;
    text-align: center;
    font-size: 22px;
    line-height: 32px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    margin-top: 0;
    margin-bottom: 24px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const FormGenres = styled.form`
  @media screen and (min-width: 834px) {
    width: 380px;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    width: 234px;
    margin: 0;
  }
`;

export const GenresText = styled.p`
  width: 234px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
    margin-bottom: 12px;
  }
`;

export const GenderRadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  width: 120px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const InputGenres = styled.input`
  margin-right: 8px;
  color: #e3ffa8;
`;

export const AgeLabel = styled.label`
  width: 234px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
  margin-bottom: 40px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`;

export const AgeInput = styled.input`
  background: var(--Color-Primary-Black-2, #0f0f0f);
  width: 280px;
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--Color-Primary-Green-Lite, #e3ffa8);
  color: #fff;
  outline: transparent;
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
    width: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
    margin-top: 12px;
  }
`;

export const ButtonGenderNext = styled.button`
  width: 280px;
  padding: 8px 10px;
  gap: 10px;
  border-radius: 12px;
  background: var(--Color-Primary-Green-Lite, #e3ffa8);
  color: var(--Color-Primary-Black-2, #0f0f0f);
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

export const ButtonGenderBack = styled.button`
  width: 280px;
  background-color: transparent;
  border: none;
  color: var(--Color-Primary-Grey, #b6b6b6);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    width: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`;
