import styled from 'styled-components';

export const BodyParametersContainer = styled.div`
  display: flex;
  /* max-width: 1440px; */
  padding: 40px 150px 66px 150px;
  margin: auto;
`;

export const ImageBodyParameters = styled.img`
  width: 592px;
  height: 594px;
`;
export const BodyParametersWrapper = styled.div`
  width: 50%;
  margin-top: 80px;
  margin-left: 104px;
  /* width: 444px; */
`;

export const BodyParametersTitle = styled.h2`
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const BodyParametersDescr = styled.p`
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-top: 0;
  margin-bottom: 24px;
`;

export const BodyParametersForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 234px;
`;

export const BodyParametersWrapperLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
`;
export const BodyParametersLabel = styled.label`
  width: 192px;
  display: flex;
  flex-direction: column;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const BodyParametersInput = styled.input`
  margin-top: 12px;
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--Color-Primary-Green-Lite, #e3ffa8);
  background: var(--Color-Primary-Black-2, #0f0f0f);
  background-color: transparent;
  color: #fff;
`;

export const BodyParametersButtonNext = styled.button`
  width: 192px;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--Color-Primary-Green-Lite, #e3ffa8);
  color: var(--Color-Primary-Black-2, #0f0f0f);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const BodyParametersButtonBack = styled.button`
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
