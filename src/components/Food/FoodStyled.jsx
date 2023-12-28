import styled from 'styled-components';

export const FoodWrapper = styled.div`
  width: 300px;
  height: 410px;
  margin-bottom: 50px;

  @media screen and (min-width: 834px) {
    width: 780px;
    height: 278px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
    /* padding: 36px 40px 36px 96px; */
  }
`;

export const FoodHead = styled.h2`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const GraphWrapper = styled.div`
  width: 300px;
  height: 380;
  background-color: var(--primary-black-second-color);
  padding: 16px 72px 16px 12px;
  /* padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 12px; */
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 834px) {
    display: flex;
    width: 780px;
    height: 240px;
    padding: 36px 40px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`;

export const TotalCalorieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 12px;

  @media screen and (min-width: 834px) {
    margin-top: 0px;
    margin-left: 40px;
  }
`;

export const CarboWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  margin-left: 12px;
  display: flex;
`;

export const CalorieHead = styled.h3`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`;

export const NutritionWrapper = styled.div`
  display: flex;
  margin-top: 2px;
`;

export const GoalWrapper = styled.p`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const CrboSpan = styled.span`
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-left: 4px;
`;

export const LeftWrapper = styled.p`
  margin-left: 12px;
  color: var(--primary-grey-color);
`;

export const ProtWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const FatWrapper = styled.div`
  display: flex;
  align-items: center;
`;
