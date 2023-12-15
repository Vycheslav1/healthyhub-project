
import styled from "styled-components";
import { Link } from 'react-router-dom';



export const MainHead = styled.div`
      display: flex;
  margin-bottom: 20px;
  justify-content: space-between;

  @media screen and (min-width: 834px) {
     margin-bottom: 24px;
  }

   @media screen and (min-width: 1440px) {
     margin-bottom: 16px;
  }
`;


export const TodayHead = styled.h1`
  color: white;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;

  @media screen and (min-width: 834px) {
    line-height: 36px;
    font-size: 30px;
  }
`
export const LinkWrapper = styled.div`
      display: flex;
  align-items: center;
`
export const TodayLink = styled(Link)`
     display: flex;
  align-items: center;
  color:  #b6b6b6;
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;

  @media screen and (min-width: 834px) {
    line-height: 22px;
    font-size: 16px;
  }
`

export const ComponentWrapper = styled.div`
   @media screen and (min-width: 834px) {
     display: flex;
    flex-wrap: wrap;
   } 
`
export const List = styled.li`
  flex-basis: 100%;

  &:not(:last-of-type) {
    @media screen and (min-width: 834px) {
      flex-basis: calc((100% - 20px) / 2);
    }
  }

  &:nth-child(1) {
    @media screen and  (min-width: 1440px) {
      flex-basis: 328px;
    }
  }

  &:nth-child(2) {
    @media screen and  (min-width: 1440px) {
      flex-basis: 444px;
    }
  }

  &:nth-child(3) {
    @media screen and (min-width: 1440px) {
      flex-basis: 560px;
    }
  }
`;
