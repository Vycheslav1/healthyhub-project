import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Content = styled.div`
  margin: 0 auto;
  width: 320px;
  padding: 0 10px;

  @media screen and (min-width: 834px) {
    width: 834px;
    padding: 24px 27px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 20px 34px 54px;
  }
`;

export const HeaderMainPage = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
`;

export const TitlePage = styled.h1`
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  color: white;

  @media screen and (min-width: 1440px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const LinkToDashboard = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  color: #b6b6b6;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const TrackerList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const Tarker = styled.li`
  flex-basis: 100%;

  &:not(:last-of-type) {
    @media screen and (min-width: 834px) {
      flex-basis: calc((100% - 20px) / 2);
    }
  }

  &:nth-child(1) {
    @media screen and (min-width: 834px) {
      flex-basis: 328px;
    }
  }

  &:nth-child(2) {
    @media screen and (min-width: 1440px) {
      flex-basis: 444px;
    }
  }

  &:nth-child(3) {
    @media screen and (min-width: 1440px) {
      flex-basis: 560px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    /* flex-basis: calc((100% - 20px) / 2); */
    width: 1440px;
  }
`;

export const WrapperDiaryOnMain = styled.div`
  /* width: 558px; */
  width: 47%;
  margin: 0;
`;

export const TitleRecommended = styled.h2`
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 25px;
  }
`;

export const WrapperRecommended = styled.div`
  width: 676px;
  @media screen and (min-width: 834px) {
    width: 780px;
  }
`;

export const ImageRecom = styled.img``;

export const LinkRecommended = styled(NavLink)`
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  display: flex;
  gap: 6px;
  margin-top: 16px;
`;
