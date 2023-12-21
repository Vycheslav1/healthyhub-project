import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ForgotPasswordContainer = styled.div`
  width: 320px;
  padding: 24px 10px 40px 10px;
  margin: auto;

  @media (min-width: 768px) {
    width: 834px;
    padding: 40px 195px 286px 195px;
  }

  @media (min-width: 1024px) {
    width: 1440px;
    display: flex;
    padding: 40px 150px 60px 150px;
    margin: auto;
  }
`;

export const ImageForgotPassword = styled.img`
  width: 300px;
  height: 296px;

  @media (min-width: 768px) {
    width: 380px;
    height: 376px;
  }

  @media (min-width: 1024px) {
    width: 598px;
    height: 588px;
    margin-bottom: 12px;
  }
`;

export const ForgotPasswordWrapper = styled.div`
  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    width: 444px;
    margin-top: 80px;
    margin-left: 104px;
  }
`;

export const ForgotPasswordTitle = styled.h2`
  width: 300px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-top: 24px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 329px;
    text-align: center;
    font-size: 30px;
    line-height: 36px;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1024px) {
    margin-top: 0;
    text-align: start;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ForgotPasswordDescrip = styled.p`
  /* width: 300px; */
  width: 290px;
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 444px;
    text-align: center;
    font-size: 22px;
    line-height: 32px;
  }

  @media (min-width: 1024px) {
    text-align: start;
  }
`;

export const ForgotPasswordFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 192px;
    gap: 40px;
  }
`;

export const ForgotPasswordLabel = styled.label`
  width: 300px;
  border-radius: 12px;
  border: 1px solid var(--Color-Primary-Green-Lite, #e3ffa8);
  background: var(--Color-Primary-Black-2, #0f0f0f);
  padding: 8px 10px;
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 380px;
    font-family: Poppins;
  }

  @media (min-width: 1024px) {
    width: 212px;
    height: 36px;
    margin: 0;
  }
`;

export const ForgotPasswordInput = styled.input`
  width: 280px;
  border: transparent;
  color: white;
  outline: none;
  background-color: transparent;
  border: none;
  border-radius: 12px;

  @media (min-width: 768px) {
    width: 360px;
  }

  @media (min-width: 1024px) {
    width: 192px;    
  }
`;

export const ForgotPasswordButton = styled.button`
  width: 300px;
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
  margin: auto;

  @media (min-width: 768px) {
    width: 380px;  
  }

  @media (min-width: 1024px) {
    width: 212px;    
    font-style: normal;    
    box-shadow: 0px 0px 5px #e3ffa8;
  }
`;

export const ForgotPasswordTextWrapper = styled.div`
  margin-top: 56px;

  @media (min-width: 768px) {
    display: flex;
    margin-top: 150px;
    justify-content: center;
    gap: 16px;
  }

  @media (min-width: 1024px) {
    margin-top: 0;
    margin-top: 220px;    
    justify-content: flex-start;
    align-items: baseline;
  }
`;
export const ForgotPasswordText = styled.p`  
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {   
  }
`;

export const ForgotPasswordLink = styled(NavLink)`
  text-decoration: none;
  width: 122px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  @media (min-width: 768px) {    
  }

  @media (min-width: 1024px) {
    
  }
`;
