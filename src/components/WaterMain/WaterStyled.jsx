import styled from 'styled-components';

export const WaterWindow = styled.div`
  width: 300px;
  height: 254px;
  /* background: #050505; */

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 278px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
  }
`;

export const Head = styled.h2`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 834px) {
    line-height: 32px;
    font-size: 22px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 6px;
  }
`;

export const WaterWrapper = styled.div`
  margin-top: 6px;
  display: flex;
  width: 100%;
  height: 224px;
  background-color: var(--primary-black-second-color);
  border-radius: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 12px;
  padding-right: 22px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 22px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    padding: 24px 40px;
  }
`;

export const WaterProgressBar = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 80px;
  height: 192px;
  /* padding: 8px; */
  background-color: var(--primary-black-second-color);
  border-radius: 20px;
  margin-right: 20px;

  @media screen and (min-width: 834px) {
    margin-right: 40px;
  }
`;

export const Consumption = styled.h3`
  margin-top: 38px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const Item = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: baseline;
  }
`;

export const WaterGoal = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 12px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
`;

export const WaterSpan = styled.span`
  margin-left: 8px;
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    margin-left: 2px;
  }
`;
export const LeftSpan = styled.span`
  margin-left: 4px;
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const Left = styled.div`
  margin-top: 8px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    margin-left: 40px;
  }
`;

export const WaterButton = styled.button`
  justify-content: center;
  width: 170px;
  height: 36px;
  margin-top: 16px;
  display: flex;
  padding: 8px 10px;
  align-items: center;
  border-radius: 12px;
  background: var(--primary-light-green-color);
  color: var(--primary-black-second-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const WaterImg = styled.img`
  margin-top: 2px;
  margin-right: 8px;
`;
export const SrOnly = styled.span`
  position: relative;
  z-index: 20;
  color: var(--primary-white-color);
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
`;
