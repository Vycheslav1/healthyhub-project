import styled from 'styled-components';

export const DailyWindow = styled.div`
  width: 300px;
  height: 242px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 278px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`;
export const DailyHead = styled.h3`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 834px) {
    line-height: 32px;
    font-size: 22px;
    margin-bottom: 19px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 6px;
  }
`;

export const DailyWrapper = styled.div`
  width: 300px;
  height: 212px;
  background-color: var(--primary-black-second-color);
  border-radius: 12px;
  margin-top: 6px;
  padding: 12px 16px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`;

export const BubbleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const CaloriesWrapper = styled.div`
  margin-left: 20px;
`;

export const CaloriesHead = styled.h3`
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const Calories = styled.p`
  color: var(--primary-white-color);
  margin-top: 4px;
  font-family: Poppins;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
`;

export const WaterWrapper = styled.div`
  margin-left: 20px;
`;
export const WaterHead = styled.h3`
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const Water = styled.p`
  display: flex;
  align-items: center;
  color: var(--primary-white-color);
  margin-top: 4px;
  font-family: Poppins;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
`;

export const WaterSpan = styled.span`
  margin-left: 4px;
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
