import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SignInContainer = styled.div`
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
    padding: 40px 150px 60px 150px;
  }
`;

export const ImageSignIn = styled.img`
  width: 300px;
  height: 296px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    width: 592px;
    height: 588px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin-bottom: 12px;
  }
`;

export const SignInFormWrapper = styled.div`
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    margin-top: 80px;
    margin-left: 104px;
  }
`;

export const SignInTitle = styled.h2`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-top: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 36px;
    margin-top: 60px;
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 102px;
    text-align: start;
    margin-top: 0;
    margin-bottom: 16px;
  }
`;

export const SignInDescription = styled.p`
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    /* text-align: center; */
    font-size: 22px;
    line-height: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    text-align: start;
    margin-top: 0;
    margin-bottom: 24px;
  }
`;

export const FormSignIn = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

export const SignInLabel = styled.label`
  position: relative;
  width: 300px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-light-green-color);
  background: var(--primary-black-second-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    height: 36px;
    display: flex;
    margin: 0;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SignInInput = styled.input`
  width: 255px;
  background-color: transparent;
  border: none;
  border-radius: 12px;
  border: transparent;
  color: var(--primary-white-color);
  outline: none;

  @media screen and (min-width: 834px) {
    width: 320px;
  }

  @media screen and (min-width: 1440px) {
    width: 170px;
  }
`;

export const SignInButton = styled.button`
  margin-top: 40px;
  width: 300px;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--primary-light-green-color);
  color: var(--primary-black-second-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 14px;

  @media screen and (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
    width: 380px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin-top: 20px;
    box-shadow: 0px 0px 5px var(--primary-light-green-color);
    margin-left: 0;
    margin-right: 0;
  }
`;

export const FootWrapperOne = styled.div`
  margin-bottom: 54px;

  @media screen and (min-width: 834px) {
    width: 192px;
  }

  @media screen and (min-width: 1440px) {
    /* margin-top: 20px; */
    text-align: center;
  }
`;
export const FootLinkOne = styled(NavLink)`
  display: flex;
  justify-content: center;
  color: var(--primary-grey-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    width: 192px;
  }

  @media screen and (min-width: 1440px) {
    text-decoration: none;
  }
`;

export const FootWrapperTwo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;

  @media screen and (min-width: 834px) {
    margin-top: 150px;
    /* justify-content: center; */
    align-items: baseline;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 147px;
    justify-content: flex-start;
    align-items: baseline;
    gap: 16px;
  }
`;

export const FootLinkTextTwo = styled.p`
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const FootLinkTwo = styled(NavLink)`
  text-decoration: none;
  width: 54px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    width: 122px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ImageToggle = styled.img`
  position: absolute;
  top: 30%;
  right: 5%;
  display: inline-block;
  width: 16px;
  height: 16px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ErrorsMessage = styled.div`
  color: red;
  /* margin-top: 15px; */
  text-align: center;
`;

export const IconSpan = styled.img`
  position: absolute;
  top: 30%;
  right: 5%;
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
