import styled from 'styled-components';

export const CloseButton = styled.button`
  display: none;

  @media (min-width: 834px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 32px;
    background: transparent;
    border: none;
    padding: 0;
  }
`;
