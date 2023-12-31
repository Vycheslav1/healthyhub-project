import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;
  background: transparent;
`;

export const ImageContainer = styled.div`
  padding: 10px;
  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: rgba(255, 255, 255, 0.01);
`;

export const ButtonTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

export const ButtonName = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  color: var(--primary-white-color);
`;

export const ButtonDescription = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: var(--primary-white-color);
  text-transform: capitalize;
`;

export const EditWeightContainer = styled.div`
  display: flex;
  gap: 6px;
`;

export const Kg = styled.span`
  font-weight: 400;
  color: var(--primary-grey-color);
  margin-left: 4px;
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--primary-light-green-color);
`;

export const SvgGoal = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--primary-light-green-color);
  margin-left: 12px;
`;
