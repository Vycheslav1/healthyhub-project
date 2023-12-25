import { CloseButton } from './CloseModalButton.styled';

import sprite from '../../../components/Header/images-for-header/icons.svg';

export default function CloseModalButton({ onClose }) {
  return (
    <CloseButton onClick={onClose}>
      <svg width="16" height="16" stroke="#B6B6B6">
        <use href={sprite + '#icon-close-circle'} />
      </svg>
    </CloseButton>
  );
}
