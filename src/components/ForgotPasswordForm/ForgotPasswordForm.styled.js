import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ForgotPasswordContainer = styled.div`
  display: flex;
  padding: 40px 150px 60px 150px;
  margin: auto;
`;

export const ImageForgotPassword = styled.img`
  width: 598px;
  height: 588px;
  margin-bottom: 12px;
`;

export const ForgotPasswordWrapper = styled.div`
  width: 444px;
  margin-top: 80px;
  margin-left: 104px;
`;

export const ForgotPasswordTitle = styled.h2`
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const ForgotPasswordDescrip = styled.p`
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

export const ForgotPasswordFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 192px;
  gap: 40px;
`;

export const ForgotPasswordLabel = styled.label`
  width: 192px;
  height: 36px;
  display: flex;
  margin: 0;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid var(--Color-Primary-Green-Lite, #e3ffa8);
  background-color: var(--Color-Primary-Black-2, #0f0f0f);
`;

export const ForgotPasswordInput = styled.input`
  width: 172px;
  background-color: transparent;
  border: none;
  padding: 8px 10px;
  border-radius: 12px;
  border: transparent;
  color: white;
`;

export const ForgotPasswordButton = styled.button`
  width: 192px;
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
`;

export const ForgotPasswordTextWrapper = styled.div`
  margin-top: 220px;
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const ForgotPasswordText = styled.p`
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const ForgotPasswordLink = styled(NavLink)`
  width: 122px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
`;
