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
  background: var(var(--primary-black-second-color));
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
  color: var(--primary-white-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const Calories = styled.p`
  color: var(--primary-grey-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  > span {
    color: var(--primary-white-color);
  }
`;
