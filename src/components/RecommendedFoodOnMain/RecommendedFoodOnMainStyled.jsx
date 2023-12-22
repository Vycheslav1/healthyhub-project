import styled from "styled-components";


export const RecomendedList = styled.ul`
 display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 834px) {
      display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }

`
export const Item = styled.li`
display: flex;
  gap: 20px;
  align-items: center;
  border-radius: 12px;
  background: #0f0f0f;
  list-style: none;
  width: 300px;
  padding: 20px 24px;

  @media screen and (min-width: 834px) {
    width: 380px;
    padding: 20px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
    padding: 20px 24px;
  }
`

export const RecomendedName = styled.h3`
      color:  #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`

export const Calories = styled.p`
  color:  #b6b6b6;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`

export const RecomendedSpan = styled.span`
 color: #fff;
`