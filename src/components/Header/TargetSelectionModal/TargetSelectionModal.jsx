import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { refreshUser, updateGoalThunk } from '../../../redux/auth/operations';

import CloseModalButton from '../CloseModalButton/CloseModalButton';
import {
  Overlay,
  TargetLayout,
  TargetContainer,
  MobileTargetContainer,
  Title,
  Subtitle,
  RadioForm,
  SubmitButton,
  RadioInput,
  RadioLabel,
  CheckedRadioLabel,
  ImageContainer,
  CheckedImageContainer,
  RadioContainer,
  CancelButton,
} from './TargetSelectionModal.styled';

import LoseFatGirl from '../../Header/images-for-header/emoji/lose-fat-girl.png';
import LoseFatGirl2x from '../../Header/images-for-header/emoji/lose-fat-girl-2x.png';
import LoseFatMan from '../../Header/images-for-header/emoji/lose-fat-men.png';
import LoseFatMan2x from '../../Header/images-for-header/emoji/lose-fat-men-2x.png';
import GainMuscule from '../../Header/images-for-header/emoji/gain-muscle.png';
import GainMuscule2x from '../../Header/images-for-header/emoji/gain-muscle-2x.png';
import MaintainGirl from '../../Header/images-for-header/emoji/maintake-girl.png';
import MaintainGirl2x from '../../Header/images-for-header/emoji/maintake-girl-2x.png';
import MaintainMan from '../../Header/images-for-header/emoji/maintake-men.png';
import MaintainMan2x from '../../Header/images-for-header/emoji/maintake-men-2x.png';

export default function TargetSelectionModal({ gender, onClose, target }) {
  const dispatch = useDispatch();
  const [goal, setGoal] = useState(target);

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

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(updateGoalThunk({ goal: goal }));
    // dispatch(refreshUser());
    onClose();
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <TargetLayout>
        <TargetContainer>
          <MobileTargetContainer>
            <CloseModalButton onClose={onClose} />
            <Title>Target selection</Title>
            <Subtitle>
              The service will adjust your calorie <br /> intake to your goal
            </Subtitle>
            <RadioForm onSubmit={onSubmit}>
              {goal === 'lose fat' ? (
                <RadioContainer>
                  <CheckedImageContainer>
                    {gender === 'female' ? (
                      <img
                        srcSet={`${LoseFatGirl} 1x, ${LoseFatGirl2x} 2x`}
                        src={LoseFatGirl}
                        alt="Lose Fat Girl"
                        width="20"
                        height="20"
                      />
                    ) : (
                      <img
                        srcSet={`${LoseFatMan} 1x, ${LoseFatMan2x} 2x`}
                        src={LoseFatMan}
                        alt="Lose Fat Man"
                        width="20"
                        height="20"
                      />
                    )}
                  </CheckedImageContainer>
                  <CheckedRadioLabel htmlFor="lose">Lose fat</CheckedRadioLabel>
                </RadioContainer>
              ) : (
                <RadioContainer>
                  <ImageContainer>
                    {gender === 'female' ? (
                      <img
                        srcSet={`${LoseFatGirl} 1x, ${LoseFatGirl2x} 2x`}
                        src={LoseFatGirl}
                        alt="Lose Fat Girl"
                        width="20"
                        height="20"
                      />
                    ) : (
                      <img
                        srcSet={`${LoseFatMan} 1x, ${LoseFatMan2x} 2x`}
                        src={LoseFatMan}
                        alt="Lose Fat Man"
                        width="20"
                        height="20"
                      />
                    )}
                  </ImageContainer>
                  <RadioLabel htmlFor="lose">Lose fat</RadioLabel>
                </RadioContainer>
              )}

              <RadioInput
                id="lose"
                type="radio"
                name="goal"
                value="lose fat"
                checked={goal === 'lose fat'}
                onChange={() => setGoal('lose fat')}
              />
              {goal === 'maintain' ? (
                <RadioContainer>
                  <CheckedImageContainer>
                    {gender === 'female' ? (
                      <img
                        srcSet={`${MaintainGirl} 1x, ${MaintainGirl2x} 2x`}
                        src={MaintainGirl}
                        alt="Maintain Girl"
                        width="20"
                        height="20"
                      />
                    ) : (
                      <img
                        srcSet={`${MaintainMan} 1x, ${MaintainMan2x} 2x`}
                        src={MaintainMan}
                        alt="Maintain Man"
                        width="20"
                        height="20"
                      />
                    )}
                  </CheckedImageContainer>
                  <CheckedRadioLabel htmlFor="maintain">
                    Maintain
                  </CheckedRadioLabel>
                </RadioContainer>
              ) : (
                <RadioContainer>
                  <ImageContainer>
                    {gender === 'female' ? (
                      <img
                        srcSet={`${MaintainGirl} 1x, ${MaintainGirl2x} 2x`}
                        src={MaintainGirl}
                        alt="Maintain Girl"
                        width="20"
                        height="20"
                      />
                    ) : (
                      <img
                        srcSet={`${MaintainMan} 1x, ${MaintainMan2x} 2x`}
                        src={MaintainMan}
                        alt="Maintain Man"
                        width="20"
                        height="20"
                      />
                    )}
                  </ImageContainer>
                  <RadioLabel htmlFor="maintain">Maintain</RadioLabel>
                </RadioContainer>
              )}
              <RadioInput
                id="maintain"
                type="radio"
                name="goal"
                value="maintain"
                checked={goal === 'maintain'}
                onChange={() => setGoal('maintain')}
              />
              {goal === 'gain muscle' ? (
                <RadioContainer>
                  <CheckedImageContainer>
                    <img
                      srcSet={`${GainMuscule} 1x, ${GainMuscule2x} 2x`}
                      src={GainMuscule}
                      alt="gain muscle Girl"
                      width="20"
                      height="20"
                    />
                  </CheckedImageContainer>
                  <CheckedRadioLabel htmlFor="gain">
                    Gain Muscle
                  </CheckedRadioLabel>
                </RadioContainer>
              ) : (
                <RadioContainer>
                  <ImageContainer>
                    <img
                      srcSet={`${GainMuscule} 1x, ${GainMuscule2x} 2x`}
                      src={GainMuscule}
                      alt="gain muscle Girl"
                      width="20"
                      height="20"
                    />
                  </ImageContainer>
                  <RadioLabel htmlFor="gain">Gain Muscle</RadioLabel>
                </RadioContainer>
              )}
              <RadioInput
                id="gain"
                type="radio"
                name="goal"
                value="gain muscle"
                checked={goal === 'gain muscle'}
                onChange={() => setGoal('gain muscle')}
              />
              <SubmitButton type="submit">Confirm</SubmitButton>
            </RadioForm>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
          </MobileTargetContainer>
        </TargetContainer>
      </TargetLayout>
    </Overlay>
  );
}
