import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  /* background-color: #050505; */
  /* width: 1440px; */
  padding: 40px 150px 60px 150px;
  margin: auto;
`;

export const ImageSignIn = styled.img`
  display: flex;
  width: 592px;
  height: 588px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 12px;
`;

export const SignInFormWrapper = styled.div`
  width: 444px;
  margin-top: 80px;
  margin-left: 104px;
  /* width: 50%; */
`;

export const SignInTitle = styled.h2`
  width: 102px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const SignInDescription = styled.p`
  width: 444px;
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-top: 0;
  margin-bottom: 24px;
`;

export const FormSignIn = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SignInLabel = styled.label`
  width: 212px;
  height: 36px;
  display: flex;
  margin: 0;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid var(--Color-Primary-Green-Lite, #e3ffa8);
  background-color: var(--Color-Primary-Black-2, #0f0f0f);
`;

export const SignInInput = styled.input`
  width: 192px;
  background-color: transparent;
  border: none;
  padding: 8px 10px;
  border-radius: 12px;
  border: transparent;
  color: white;
  outline: none;
`;

export const SignInButton = styled.button`
  width: 212px;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--Color-Primary-Green-Lite, #e3ffa8);
  color: var(--Color-Primary-Black-2, #0f0f0f);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 20px;
  box-shadow: 0px 0px 5px #e3ffa8;
`;

export const FootWrapperOne = styled.div`
  width: 192px;
  margin-top: 20px;
  text-align: center;
`;
export const FootLinkOne = styled(NavLink)`
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none;
`;

export const FootWrapperTwo = styled.div`
  margin-top: 147px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const FootLinkTextTwo = styled.p`
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const FootLinkTwo = styled(NavLink)`
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
`;
