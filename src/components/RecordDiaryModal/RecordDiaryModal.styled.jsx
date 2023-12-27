import styled from 'styled-components';

export const RecordModalOverl = styled.div`
  font-family: Poppins;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RecordModalDiv = styled.div`
  position: relative;
  width: 300px;
  height: 558px;
  padding: 16px 12px 40px;
  background-color: var(--primary-black-second-color);
  border-radius: 12px;
  overflow: auto;

  @media (min-width: 834px) {
    width: 676px;
    height: 408px;
    padding: 24px;
  }
`;

export const RecordTitle = styled.p`
  margin-bottom: 24px;
  color: var(--primary-white-color);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;

  @media (min-width: 834px) {
    font-size: 30px;
  }
`;

export const RecordSubtitle = styled.p`
  color: var(--primary-white-color);
  font-size: 18px;
  line-height: 1.455;

  @media (min-width: 834px) {
    font-size: 22px;
  }
`;

export const RecordSubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (min-width: 834px) {
    font-size: 30px;
  }
`;

export const RecordFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  margin-top: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 12px;
    margin: 0;
  }
`;

export const RecordNameField = styled.input`
  padding: 8px 10px;

  border-radius: 12px;
  border: 1px solid var(--primary-light-green-color);
  background-color: var(--primary-black-second-color);
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  line-height: 1.43;
  width: 100%;
  outline: none;

  @media (min-width: 834px) {
    margin-top: 16px;
    width: 235px;
  }
`;

export const RecordField = styled.input`
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-light-green-color);
  background-color: var(--primary-black-second-color);
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  line-height: 1.43;
  width: 100%;
  outline: none;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: var(--primary-grey-color);
  }

  @media (min-width: 834px) {
    margin-top: 16px;
  }
`;

export const RecordButtonContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  margin-top: 40px;

  @media (min-width: 834px) {
    position: absolute;
    flex-direction: row;
    bottom: 24px;
    right: 24px;
    gap: 12px;
    margin: 0;
  }
`;

export const RecordButtonStyle = styled.button`
  background-color: transparent;
  border: none;
  text-align: center;
  font-size: 14px;
  line-height: 1.43;
  margin-top: 24px;
  color: var(--primary-light-green-color);
`;

export const RecordButtonSubmit = styled.button`
  width: 100%;
  color: var(--primary-black-second-color);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  height: 36px;
  border-radius: 12px;
  border: none;
  background: var(--primary-light-green-color);

  @media (min-width: 834px) {
    width: 212px;
  }
`;
