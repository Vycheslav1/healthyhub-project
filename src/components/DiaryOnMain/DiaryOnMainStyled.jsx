import styled from "styled-components";
import { Link } from 'react-router-dom';


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
`

export const AddLink = styled.div`
      display: flex;
    align-items: center;

    @media screen and (min-width: 834px) {
         display: flex;
    align-items: center;
    margin-bottom: 25px;
  }
`

export const Diary = styled.h2`
    margin-right: 10px;
    width: 57px;
    height: 32px;
    font-weight: 400;
    font-size: 22px;
    line-height: 32px;
    color: rgba(255, 255, 255, 1);
`

export const SeeMore = styled(Link)`
    width: auto;
    height: 22px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    white-space: nowrap;
    color:  #B6B6B6;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`
export const DivBreakfast = styled.div`
@media screen and (min-width: 834px) {
  display: flex;
    align-items: center;
    margin-bottom: 20px;
}
`
export const DiaryMobile = styled.div`
     display: flex;
    margin-top: 20px;
    align-items: center;
    margin-bottom: 20px;

    @media screen and (min-width: 834px) {
     display: flex;
    align-items: center;
    }
`

export const BreakfastImage = styled.img`
    width: 36px;
    height: 36px;
    /* margin-left: 25px; */
    margin-right: 10px;
`

export const DiaryBreakfast = styled.h2`
    width: 100px;
    height: 24px;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    color: rgba(255, 255, 255, 1);
    margin-left: 20px;
    margin-right: 10px;


    @media screen and (min-width: 834px) {
    margin-left: 25px;
   
  }
`

export const Carbonohidrates = styled.span`
   color: white;
    margin-right: 25px;
    margin-left: 43px;
    width: 200px;
    font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
`

export const BreakfastProtein = styled.span`
    margin-right: 25px;
    width: 110px;
    font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
color: #FFF;
`

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
`

export const LinkFood = styled.p`
@media screen and (min-width: 834px) {
     width: 518px;
    display: flex;
    align-items: center;
}
`
export const BreakfastFet = styled.p`
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
color: #FFF ;
`