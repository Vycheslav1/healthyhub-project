import styled from 'styled-components';

export const Frame = styled('div')`
  display: flex;
  flex-direction: column;
  width: 620px;
  height: 313px;
  top: 235px;
  left: 70px;
  border: 0.5px;
  gap: 20px;

  @media screen and (min-width: 834px) {
    margin-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`;

export const GraphicsFrame = styled('div')`
  display: flex;

  gap: 27px;
  margin-bottom: 27px;
  padding-left: 34px;
  width: 300%;

  @media screen and (min-width: 834px) {
    gap: 40px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const GraficFrame = styled('div')`
  display: flex;
  background-color: var(--primary-black-second-color);
`;

export const WeigthFrame = styled('div')`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  justify-content: space-between;
  padding: 24px 24px 36px 24px;
  border-radius: 12px;
  background-color: var(--primary-black-color);

  @media screen and (min-width: 1440px) {
    width: 1372px;
  }
`;
export const CaloriesFrame = styled('div')`
  display: flex;
  width: 620px;
  border-radius: 12px;
  background-color: var(--primary-black-second-color);
`;

export const WaterFrame = styled('div')`
  display: flex;
  width: 620px;
  border-radius: 12px;
  background-color: var(--primary-black-second-color);
`;

export const WeightFrame = styled('div')`
  width: 1372px;
  padding-left: 34px;
  border-radius: 12px;
  background-color: var(--primary-black-second-color);
`;
