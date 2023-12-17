import styled from 'styled-components';

export const ActivityContainer = styled.div`
  display: flex;
  /* background-color: #050505; */
  /* width: 1440px; */
  padding: 40px 150px 62px 150px;
  margin: auto;
`;

export const ActivityImage = styled.img`
  width: 592px;
  height: 598px;
`;

export const ActivityWrapper = styled.div`
  width: 50%;
  margin-top: 80px;
  margin-left: 104px;
`;

export const ActivityTitle = styled.h2`
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const ActivityDescription = styled.p`
  width: 308px;
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-top: 0;
  margin-bottom: 24px;
`;

export const ActivityForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 308px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const ActivityLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const ActivityInput = styled.input`
  margin-right: 8px;
`;

export const ActivityButtonSignUp = styled.button`
  width: 192px;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--Color-Primary-Green-Lite, #e3ffa8);
  color: var(--Color-Primary-Black-2, #0f0f0f);
  /* text-align: center; */
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const ActivityButtonBack = styled.button`
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
