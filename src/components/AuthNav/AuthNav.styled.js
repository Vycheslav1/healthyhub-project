import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  padding: 40px 150px 72px 150px;
  margin: auto;
`;
export const ImageWrapper = styled.div`
  background-color: #050505;
`;

export const ImageOne = styled.img`
  width: 592px;
  height: 588px;
`;

export const TextWrapper = styled.div`
  /* width: 444px; */
  margin-top: 80px;
  margin-left: 104px;
  width: 50%;
`;

export const TitleOne = styled.h1`
  width: 424px;
  color: #fff;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  margin-top: 0;
  margin-bottom: 16px;
`;
export const Description = styled.p`
  width: 444px;
  color: #b6b6b6;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-top: 0;
  margin-bottom: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 80px;
  gap: 0 16px;
`;

export const SignIn = styled(NavLink)`
  width: 192px;
  border-radius: 12px;
  background: var(--Color-Primary-Green-Lite, #e3ffa8);
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  /* align-items: flex-start; */
  gap: 10px;
  color: var(--Color-Primary-Black-2, #0f0f0f);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
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
  padding: 8px 10px;
  text-decoration: none;
`;
export const ListItems = styled.ul`
  list-style: none;
  width: 234px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding: 0;

  li::before {
    content: '•';
    color: #e3ffa8;
    width: 8px;
    height: 8px;
    margin-right: 8px;
  }
`;

export const Item = styled.li`
  margin-bottom: 16px;
`;
