import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  font-family: Poppins;

  @media (min-width: 834px) {
    top: 100px;
  }
`;

export const UserLayout = styled.div`
  position: relative;
  width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 834px) {
    width: 834px;
    padding-left: 27px;
    padding-right: 27px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding-left: 34px;
    padding-right: 34px;
  }
`;

export const UserContainer = styled.div`
  position: absolute;
  top: -6px;
  right: 0;
  width: 158px;
  background: var(--primary-black-second-color);
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 834px) {
    top: -20px;
  }
`;

export const UserButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 0;
  color: var(--primary-white-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  background: transparent;
  border: none;
`;

export const Svg = styled.svg`
  stroke: var(--primary-white-color);
  width: 16px;
  height: 16px;
`;

export const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  color: var(--primary-grey-color);
  font-size: 14px;
  line-height: 1.43;
  background: transparent;
  border: none;
`;
