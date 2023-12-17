import styled from 'styled-components';

export const GenderContainer = styled.div`
  display: flex;
  /* background-color: #050505; */
  /* max-width: 1440px; */
  padding: 40px 150px 90px 150px;
  margin: auto;
`;

export const GenderImage = styled.img`
  width: 592px;
  height: 570px;
`;

export const GenresWrapper = styled.div`
  width: 50%;
  margin-top: 80px;
  margin-left: 104px;
  width: 444px;
`;

export const GenresTitle = styled.h2`
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const GenderDescription = styled.p`
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-top: 0;
  margin-bottom: 24px;
`;

export const FormGenres = styled.form`
  display: flex;
  flex-direction: column;
  width: 234px;
  /* gap: 16px; */
`;

export const GenresText = styled.p`
  width: 234px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 0;
  margin-bottom: 12px;
`;
export const GenderRadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const InputGenres = styled.input`
  margin-right: 8px;
  color: #e3ffa8;
`;

export const AgeLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 24px;
  margin-bottom: 40px;
  width: 192px;
`;

export const AgeInput = styled.input`
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--Color-Primary-Green-Lite, #e3ffa8);
  background: var(--Color-Primary-Black-2, #0f0f0f);
  margin-top: 12px;
  color: #fff;
  background-color: transparent;
`;

export const ButtonGenderNext = styled.button`
  width: 192px;
  padding: 8px 10px;
  gap: 10px;
  border-radius: 12px;
  background-color: var(--Color-Primary-Green-Lite, #e3ffa8);
  color: var(--Color-Primary-Black-2, #0f0f0f);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const ButtonGenderBack = styled.button`
  width: 192px;
  color: var(--Color-Primary-Grey, #b6b6b6);
  text-align: center;
  background-color: transparent;
  border: none;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 20px;
`;
