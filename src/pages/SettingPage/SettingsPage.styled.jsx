import styled from 'styled-components';

export const SettingContainer = styled.section`
  position: relative;
  padding-top: 16px;
  padding-bottom: 40px;
  background-color: rgba(5, 5, 5, 1);
  color: rgba(255, 255, 255, 1);
  font-family: Poppins;

  @media (min-width: 834px) {
    padding-top: 24px;
    padding-bottom: 250px;
  }

  @media (min-width: 1440px) {
    padding-top: 20px;
    padding-bottom: 56px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 160px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }

  @media (min-width: 1440px) {
    margin-bottom: 16px;
  }
`;

export const StyledImg = styled.img`
  height: 296px;
  width: 300px;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 834px) {
    height: 374px;
    width: 380px;
    margin-top: 20px;
  }
  @media (min-width: 1440px) {
    height: 528px;
    width: 536px;
    margin-left: 0;
    margin-right: 0;
    margin-top: 8px;
    margin-left: 116px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: none;

  @media (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;
