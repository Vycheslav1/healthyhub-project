
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Content = styled.div`
  margin: 0 auto;
  width: 320px;
  padding: 0 10px;

  @media screen and (min-width: 834px) {
    width: 834px;
    padding: 0 27px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 34px;
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

export const LinkToDashboard = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
 font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 22px;
  color: #B6B6B6;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`

export const TrackerList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    flex-wrap: wrap;
    flex-direction: row;
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
    flex-basis: calc((100% - 20px) / 2);
  }
`;