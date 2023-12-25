import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const ContainerDiary = styled.div`
  width: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 834px) {
    width: 518px;
    padding-right: 10px;
  }

  @media screen and (min-width: 1440px) {
    /* width: 1440px;
    padding: 20px 34px 54px 34px;
    margin: auto; */
    margin-left: 0;
    margin-right: 0;
  }
`;
export const WrapperOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AddLink = styled.div`
  display: flex;
  align-items: baseline;

  @media screen and (min-width: 834px) {
    display: flex;
    align-items: baseline;
    /* margin-bottom: 25px; */
  }
`;

export const Diary = styled.h2`
  margin-right: 10px;
  width: 57px;
  height: 32px;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  color: rgba(255, 255, 255, 1);
`;

export const SeeMore = styled(NavLink)`
  width: auto;
  height: 22px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  white-space: nowrap;
  color: #b6b6b6;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const DivBreakfast = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    /* margin-bottom: 20px; */
  }
`;
export const DiaryMobile = styled.div`
  display: flex;
  /* margin-top: 20px; */
  align-items: center;
  /* margin-bottom: 20px; */

  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    width: 558px;
  }
`;

export const BreakfastImage = styled.img`
  width: 36px;
  height: 36px;
  /* margin-left: 25px; */
  margin-right: 10px;
`;

export const DiaryBreakfast = styled.h2`
  width: 100px;
  height: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
  margin: 0 10px 0 20px;

  @media screen and (min-width: 834px) {
    margin-left: 25px;
  }
`;

export const Carbonohidrates = styled.p`
  width: 124px;

  color: white;
  margin: 0 25px 0 0px;
  /* margin-right: 25px;
  margin-left: 43px; */
  width: 160px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  gap: 4px;
`;

export const BreakfastProtein = styled.p`
  margin-right: 25px;
  width: 110px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: #fff;
  margin: 0;
  display: flex;
  gap: 4px;
`;
export const BreakfastFet = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: #fff;
  margin: 0;
  display: flex;
  gap: 4px;
  width: 26px;
`;

export const SpanDate = styled.span`
  width: 36px;
`;

export const OpenModal = styled.button`
  width: 150px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: rgba(227, 255, 168, 1);
  background-color: black;
  border: 1px solid transparent;
  /* padding: 5px 10px; */
  cursor: pointer;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
`;

export const LinkFood = styled.div`
  width: 300px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    width: 518px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const TrashButton = styled.button`
  background-color: transparent;
  border: transparent;
  margin-left: 20px;
`;
