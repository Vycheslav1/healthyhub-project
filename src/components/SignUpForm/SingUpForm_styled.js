import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  /* background-color: #050505; */
  /* width: 1440px; */
  padding: 40px 150px 72px 150px;
  margin: auto;
`;

export const ImageFormOne = styled.img`
  width: 592px;
  height: 588px;
  margin-bottom: 12px;
`;

export const FormWrapper = styled.div`
  width: 444px;
  margin-top: 80px;
  margin-left: 104px;
`;
export const FormTitle = styled.h2`
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const FormDescription = styled.p`
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-top: 0;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 212px;
  gap: 20px;
  margin-bottom: 80px;
`;

// export const LabelWrapper = styled.div``

export const Label = styled.label`
  position: relative;
  width: 212px;
  height: 36px;
  display: flex;
  margin: 0;
  /* padding: 8px 10px; */
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  /* border: 1px solid var(--Color-Primary-Green-Lite, #e3ffa8); */
  background-color: var(--Color-Primary-Black-2, #0f0f0f);
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  padding: 8px 10px;
  border-radius: 12px;
  border: transparent;
  color: white;
  outline: none;
`;

export const Checkbox = styled.input`
  position: absolute;
  top: 30%;
  right: 5%;
`;

export const ButtonNext = styled.button`
  /* box-shadow: 0px 0px 15px #e3ffa8; */
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
  margin-top: 40px;
`;

export const TextSignIn = styled.p`
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const TextSignInWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NavLinkSignIn = styled(NavLink)`
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
