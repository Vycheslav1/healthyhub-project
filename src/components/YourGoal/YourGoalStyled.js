import styled from 'styled-components';

export const GoalContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  padding: 24px 10px;
  margin: auto;

  @media (min-width: 768px) {
    width: 834px;
    padding: 40px 195px 286px 195px;
  }

  @media (min-width: 1024px) {
    width: 1440px;
    display: flex;
    padding: 40px 150px 86px 150px;
    margin: auto;
    flex-direction: row;
  }
`;

export const ImageGoals = styled.img`
  width: 300px;
  height: 290px;

  @media (min-width: 768px) {
    width: 380px;
    height: 386px;
    margin: auto;
  }

  @media (min-width: 1024px) {
    width: 592px;
    height: 574px;
    margin: 0;
  }
`;

export const GoalsWrapper = styled.div`
  @media (min-width: 768px) {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    width: 444px;
    margin-top: 80px;
    margin-left: 104px;
    width: 50%;
  }
`;

export const TitleGoals = styled.h2`
  width: 300px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-top: 24px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    /* color: var(--Color-Primary-White, #fff); */
    text-align: center;

    /* Headline text/H1 */
    /* font-family: Poppins; */
    font-size: 30px;
    /* font-style: normal; */
    /* font-weight: 500; */
    line-height: 36px; /* 120% */
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
  }

  @media (min-width: 1024px) {
    /* color: var(--Color-Primary-White, #fff); */
    /* font-family: Poppins; */
    /* font-size: 30px; */
    /* font-style: normal; */
    /* font-weight: 500; */
    /* line-height: 36px; */
    text-align: start;
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

export const GoalsDescription = styled.p`
  width: 240px;
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 0;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    width: 444px;
    text-align: center;
    /* margin-left: auto;
    margin-right: auto; */
  }

  @media (min-width: 1024px) {
    /* color: var(--Color-Primary-Grey, #b6b6b6); */
    /* font-family: Poppins; */
    text-align: start;
    font-size: 22px;
    /* font-style: normal; */
    /* font-weight: 400; */
    line-height: 32px;
    /* margin-top: 0; */
    /* margin-bottom: 24px; */
    /* width: 444px; */
    width: 420px;
  }
`;

export const FormGoals = styled.form`
  display: flex;
  flex-direction: column;
  /* gap: 24px; */
  @media (min-width: 768px) {
    /* flex-direction: row;
    flex-wrap: wrap; */
    justify-content: center;
  }

  @media (min-width: 1024px) {
    /* display: flex; */
    /* flex-direction: column; */
    width: 234px;
    /* gap: 16px; */
  }
`;
export const FormRadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    width: 360px;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    /* display: flex; */
    flex-direction: column;
    gap: 16px;
  }
`;

export const Label = styled.label`
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    /* color: var(--Color-Primary-White, #fff); */
    /* font-family: Poppins; */
    /* font-size: 14px; */
    /* font-style: normal; */
    /* font-weight: 400; */
    /* line-height: 20px; */
    display: flex;
  }
`;

export const InputGoal = styled.input`
  margin-right: 8px;
`;

export const ButtonNextGoals = styled.button`
  width: 280px;
  margin-top: 24px;
  /* display: flex; */
  padding: 8px 10px;
  /* flex-direction: column; */
  /* align-items: flex-start; */
  /* gap: 10px; */
  border-radius: 12px;
  background: var(--Color-Primary-Green-Lite, #e3ffa8);

  @media (min-width: 768px) {
    width: 360px;
    margin: 24px auto 20px;
  }

  @media (min-width: 1024px) {
    padding: 8px 10px;
    width: 212px;
    margin-top: 24px;
    border-radius: 12px;
    background: var(--Color-Primary-Green-Lite, #e3ffa8);
  }
`;

export const ButtonBackGoals = styled.button`
  width: 280px;
  color: var(--Color-Primary-Grey, #b6b6b6);
  text-align: center;
  font-family: Poppins;
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin: auto;
  }

  @media (min-width: 1024px) {
    width: 212px;
  }
`;
