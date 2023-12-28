import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;

  @media (min-width: 834px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 12px;
  background: var(--primary-black-second-color);
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  padding: 24px;

  @media (min-width: 834px) {
    display: none;
  }
`;

export const MobileButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  padding: 0;
`;
