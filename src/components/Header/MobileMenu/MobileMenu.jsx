import { useEffect } from 'react';

import HeaderModalButton from '../HeaderModalButton/HeaderModalButton';
import {
  MobileButtonsContainer,
  MobileContainer,
  CloseButton,
  Overlay,
} from './MobileMenu.styled';

import sprite from 'src/components/Header/images-for-header/icons.svg';

export default function MobileMenu({
  onClose,
  gender,
  goal,
  weight,
  openTarget,
  openWeight,
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <div className="container" style={{ position: 'relative' }}>
        <MobileContainer>
          <MobileButtonsContainer>
            <CloseButton onClick={onClose}>
              <svg
                width="16"
                height="16"
                stroke="var(--text-color-button-grey)"
              >
                <use href={sprite + '#icon-close-circle'} />
              </svg>
            </CloseButton>
            <HeaderModalButton
              gender={gender}
              goal={goal}
              mobile={true}
              buttonType="goal"
              onClick={openTarget}
            />
            <HeaderModalButton
              buttonType="weight"
              weight={weight}
              onClick={openWeight}
            />
          </MobileButtonsContainer>
        </MobileContainer>
      </div>
    </Overlay>
  );
}
