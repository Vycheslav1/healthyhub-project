import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FormContainer = styled.div`
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

export const ImageFormOne = styled.img`
  width: 300px;
  height: 296px;
  margin: auto;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-bottom: 12px;
  }
`;

export const FormWrapper = styled.div`
  @media screen and (min-width: 834px) {
    width: 444px;

    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    margin-top: 80px;
    margin-left: 104px;
  }
`;
export const FormTitle = styled.h2`
  width: 300px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-top: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    width: 444px;
    text-align: center;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 30px;
    line-height: 36px;
    margin-top: 0;
    text-align: start;
  }
`;

export const FormDescription = styled.p`
  width: 270px;
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 444px;
    color: var(--Color-Primary-Grey, #b6b6b6);
    text-align: center;
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }

  @media screen and (min-width: 1440px) {
    color: #b6b6b6;
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    text-align: start;
    margin-top: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 280px;
  gap: 20px;

  @media screen and (min-width: 834px) {
    width: 360px;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
    margin-bottom: 80px;
  }
`;

// export const LabelWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   margin-bottom: 40px;
// `;

export const Label = styled.label`
  position: relative;
  width: 280px;
  display: inline-flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid var(--Color-Primary-Green-Lite, #e3ffa8);
  background: var(--Color-Primary-Black-2, #0f0f0f);

  @media screen and (min-width: 834px) {
    width: 360px;
    display: inline-flex;
    padding: 8px 10px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 12px;
    border: 1px solid var(--Color-Primary-Green-Lite, #e3ffa8);
    background: var(--Color-Primary-Black-2, #0f0f0f);
  }

  @media screen and (min-width: 1440px) {
    /* position: relative; */
    width: 212px;
    height: 36px;
    display: flex;
    margin: 0;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 12px;
    background-color: var(--Color-Primary-Black-2, #0f0f0f);
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: transparent;
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: white;
  outline: none;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    border: none;
    border-radius: 12px;
    border: transparent;
    color: white;
    outline: none;
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

export const IconSpan = styled.img`
  position: absolute;
  top: 30%;
  right: 5%;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ButtonNext = styled.button`
  width: 280px;
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
  margin-top: 24px;
  margin-bottom: 48px;

  @media screen and (min-width: 834px) {
    width: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    padding: 8px 10px;
    gap: 10px;
    border-radius: 12px;
    background-color: var(--Color-Primary-Green-Lite, #e3ffa8);
    color: var(--Color-Primary-Black-2, #0f0f0f);
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const TextSignIn = styled.p`
  /* width: 238px; */
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 0;

  @media screen and (min-width: 834px) {
    /* width: 215px; */
  }

  @media screen and (min-width: 1440px) {
    color: var(--Color-Primary-Grey, #b6b6b6);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const TextSignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
    align-items: baseline;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    /* align-items: center; */
    justify-content: flex-start;
  }
`;

export const NavLinkSignIn = styled(NavLink)`
  width: 122px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
  color: var(--Color-Primary-White, #fff);
  text-decoration: none;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const ErrorsMessage = styled.div`
  color: red;
  margin-top: 5px;
  text-align: center;
`;
