import styled from "styled-components";

export const FoodWrapper = styled.div`
  width: 300px;
  height: 410px;

  @media screen and (min-width: 834px) {
 width: 780px;
 height: 278px;
  }

@media screen and (min-width: 1440px) {
    width: 560px;
  }
`

export const FoodHead = styled.h2`
  color: #fff;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
      font-size: 22px;
    line-height: 32px;
  }
`

export const GraphWrapper = styled.div`
  width: 300px;
  height: 380;
  background-color: #0f0f0f;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 834px) {
    display: flex;
    width: 780px;
    height: 240px;
    padding: 36px 40px;
  }

  @media screen and (min-width: 1440px) {
     width: 560px;
  }
`

export const TotalCalorieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 12px;

@media screen and (min-width: 834px) {
     margin-top: 0px;
    margin-left: 40px;
  }
`

export const CarboWrapper = styled.div`
 display: flex;
  align-items: center;
`

export const ItemWrapper = styled.div`
     margin-left: 12px;
`

export const CalorieHead = styled.h3`
  color:  #fff;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`

export const NutritionWrapper = styled.div`
 display: flex;
 margin-top: 2px;
`

export const GoalWrapper = styled.p`
  color:  #fff;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`

export const CrboSpan = styled.span`
  color:  #b6b6b6;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-left: 4px;
`

export const LeftWrapper = styled.p`
 margin-left: 12px;
`

export const ProtWrapper = styled.div`
    display: flex;
  align-items: center;
`

export const FatWrapper = styled.div`
    display: flex;
  align-items: center;
`