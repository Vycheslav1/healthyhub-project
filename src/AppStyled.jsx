import styled from 'styled-components';
import example from './assets/background.png';
import 'normalize.css';

export const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* background-image: url(${example}); */
  background-color: var(--primary-black-color);
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 100%;
`;
