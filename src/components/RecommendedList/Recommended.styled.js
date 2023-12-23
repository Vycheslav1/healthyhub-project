import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  border-radius: 12px;
  background: var(--color-primary-black-2, #0f0f0f);
  list-style: none;
  width: 300px;
  height: 86px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 86px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
    height: 86px;
  }
`;

export const Title = styled.h2`
  color: var(--color-primary-white, #fff);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const Calories = styled.p`
  color: var(--color-primary-grey, #b6b6b6);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  > span {
    color: var(--color-primary-white, #fff);
  }
`;
