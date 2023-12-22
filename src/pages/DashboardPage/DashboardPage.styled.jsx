import styled from 'styled-components';

export const Frame = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`;

export const GraphicsFrame = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 27px;
  margin-bottom: 27px;

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
  flex-direction: column;
`;

export const WeigthFrame = styled('div')`
  width: 780px;
  height: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  justify-content: space-between;
  padding: 24px 24px 36px 24px;
  border-radius: 12px;
  background-color: var(--bg-secondary);

  @media screen and (min-width: 1440px) {
    width: 1372px;
  }
`;

export const CaloriesFrame = styled('div')`
  background-color: #ffffff;
    width: 620px
  height: 313px
  top: 235px
  left: 70px
`;

export const WaterFrame = styled('div')`
  background-color: #ffffff;
`;
