import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthContainer = styled.div`
  width: 320px;
  padding: 24px 10px 40px 10px;
  margin: auto;

  @media screen and (min-width: 834px) {
    width: 834px;
    padding: 40px 195px 286px 195px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    display: flex;
    padding: 40px 150px 72px 150px;
  }
`;

export const ImageOne = styled.img`
  width: 300px;
  height: 296px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
  }
`;

export const TextWrapper = styled.div`
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    margin-top: 80px;
    margin-left: 104px;
    width: 50%;
  }
`;

export const TitleOne = styled.h1`
  width: 300px;
  color: #fff;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  text-align: start;
  margin-top: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    width: 424px;
    text-align: center;
    font-size: 30px;
    line-height: 36px;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    margin-top: 0;
    margin-bottom: 16px;
    text-align: start;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Description = styled.p`
  width: 300px;
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  text-align: start;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 0;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 320px;
    text-align: center;
    font-size: 22px;
    line-height: 32px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0 16px;
  margin-bottom: 40px;

  @media screen and (min-width: 834px) {
    width: 444px;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 80px;
    justify-content: flex-start;
  }
`;

export const SignIn = styled(NavLink)`
  width: 122px;
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  gap: 10px;
  border-radius: 12px;
  background: var(--Color-Primary-Green-Lite, #e3ffa8);
  text-decoration: none;
  color: var(--Color-Primary-Black-2, #0f0f0f);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    width: 192px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const SignUp = styled(NavLink)`
  width: 122px;
  color: var(--Color-Primary-White, #fff);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const ListItems = styled.ul`
  padding: 0;
  margin: 0;
  width: 234px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;

  li:before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
    display: flex;
    align-self: center;
    background-color: #e3ffa8;
  }

  @media screen and (min-width: 834px) {
    width: 444px;
    height: 56px;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 234px;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0;
  }
`;

export const Item = styled.li`
  margin: 0;
  display: flex;
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
`;
