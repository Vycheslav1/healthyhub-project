// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SettingsFormWrapper = styled.div`
  width: 320px;
  padding: 16px 10px 40px;
  margin: auto;

  @media (min-width: 834px) {
    width: 834px;
    padding: 24px 174px 174px 27px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    display: flex;
    padding: 20px 103px 72px 34px;
  }
`;

export const ImageWrapper = styled.div`
  @media (min-width: 1440px) {
    width: 536px;
  }
`;

export const TitleImage = styled.img`
  width: 300px;
  margin-bottom: 24px;

  @media (min-width: 834px) {
    width: 376px;
    margin: 0 auto 24px;
  }

  @media (min-width: 1440px) {
    width: 536px;
    margin-bottom: 0;
  }
`;

export const TitleSettings = styled.h2`
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    margin-bottom: 20;
  }

  @media (min-width: 1440px) {
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 36px;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    width: 491px;
    margin: auto;
    flex-wrap: wrap;
    color: white;
  }

  @media (min-width: 1440px) {
    margin-top: 52px;
    margin-left: 160px;
  }
`;

export const DownloadWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  gap: 12px;
  align-items: center;

  @media (min-width: 1440px) {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

export const PhotoWrapper = styled.div`
  display: flex;
  gap: 6px;

  @media (min-width: 1440px) {
    flex-direction: row;
    padding: 8px 0;
  }
`;

export const Text = styled.p`
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
`;

export const TextActivity = styled.p`
  margin: 0 0 12px 0;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const AvatarImage = styled.img`
  @media (min-width: 1440px) {
    margin-right: 12px;
  }
`;

export const LabelSettings = styled.label`
  display: flex;
  flex-direction: column;
  width: 300px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 40px;

  @media (min-width: 834px) {
    width: 192px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 40px;
  }
`;

export const InputSettings = styled.input`
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--Color-Primary-Grey, #b6b6b6);
  background: var(--Color-Primary-Black-2, #0f0f0f);
  color: var(--Color-Primary-White, #fff);
  outline: none;
  margin-top: 12px;
`;

export const WrapperOne = styled.div`
  @media (min-width: 834px) {
    display: flex;
    gap: 60px;
  }
`;

export const LabelSettingsRadio = styled.label`
  color: var(--Color-Primary-White, #fff);
`;

export const WrapperTwo = styled.div`
  @media (min-width: 834px) {
    display: flex;
    gap: 60px;
  }
`;

export const WrapperGenres = styled.div`
  margin-bottom: 40px;
  display: flex;
  gap: 16px;

  @media (min-width: 834px) {
    margin-bottom: 0;
  }
`;

export const LabelSettingsGender = styled.label`
  color: var(--Color-Primary-White, #fff);

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`;

export const WrapperBody = styled.div`
  @media (min-width: 834px) {
    display: flex;
    gap: 60px;
  }
`;

export const WrapperActivity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 300px;
  margin-bottom: 40px;

  @media (min-width: 834px) {
    width: 494px;
  }

  @media (min-width: 1440px) {
    color: var(--Color-Primary-White, #fff);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    width: 464px;
  }
`;

export const InputActivity = styled.input`
  margin-right: 8px;
`;

export const ButtonWrapper = styled.div`
  @media (min-width: 834px) {
    display: flex;
    gap: 12px;
  }

  @media (min-width: 1440px) {
  }
`;

export const ButtonSave = styled.button`
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
  margin-bottom: 12px;

  @media (min-width: 834px) {
    width: 192px;
  }
  @media (min-width: 1440px) {
    &:hover {
    }
  }
`;

export const ButtonCancel = styled.button`
  width: 300px;
  color: var(--Color-Primary-Grey, #b6b6b6);
  text-align: center;
  padding: 8px 10px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-color: transparent;
  border: none;

  @media (min-width: 834px) {
    width: 192px;
  }
`;

export const TextLabel = styled.p`
  color: var(--Color-Primary-White, #fff);
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
