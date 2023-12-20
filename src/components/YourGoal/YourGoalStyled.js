import styled from 'styled-components';

export const GoalContainer = styled.div`
  display: flex;
  /* background-color: #050505; */
  /* width: 1440px; */
  padding: 40px 150px 86px 150px;
  margin: auto;
`;

export const ImageGoals = styled.img`
  width: 592px;
  height: 574px;
`;

export const GoalsWrapper = styled.div`
  width: 444px;
  margin-top: 80px;
  margin-left: 104px;
  width: 50%;
`;

export const TitleGoals = styled.h2`
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const GoalsDescription = styled.p`
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-top: 0;
  margin-bottom: 24px;
  /* width: 444px; */
  width: 420px;
`;

export const FormGoals = styled.form`
  display: flex;
  flex-direction: column;
  width: 234px;
  /* gap: 16px; */
`;
export const FormRadioWrapper = styled.div`
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

export const InputGoal = styled.input`
  margin-right: 8px;
  color: #e3ffa8;
`;

export const ButtonNextGoals = styled.button`
  /* display: flex; */
  padding: 8px 10px;
  /* flex-direction: column; */
  /* align-items: flex-start; */
  /* gap: 10px; */
  /* margin-bottom: 20px; */
  width: 212px;
  margin-top: 24px;
  border-radius: 12px;
  background: var(--Color-Primary-Green-Lite, #e3ffa8);
`;

export const ButtonBackGoals = styled.button`
  width: 212px;
  color: var(--Color-Primary-Grey, #b6b6b6);
  text-align: center;
  background-color: transparent;
  border: none;
  /* Button text/3 */
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 20px;
`;
