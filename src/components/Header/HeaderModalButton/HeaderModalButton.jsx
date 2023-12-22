import {
  Button,
  ImageContainer,
  ButtonTextContainer,
  ButtonName,
  ButtonDescription,
  EditWeightContainer,
  Kg,
  Svg,
  SvgGoal,
} from './HeaderModalButton.styled';

import sprite from '../../Header/images-for-header/icons.svg';
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
import Weight from '../../Header/images-for-header/emoji/waight.png';
import Weight2x from '../../Header/images-for-header/emoji/waight-2x.png';

export default function HeaderModalButton({
  gender,
  goal,
  buttonType,
  weight,
  onClick,
  mobile,
}) {
  return (
    <>
      {buttonType === 'goal' && (
        <Button type="button" onClick={onClick}>
          {goal === 'lose fat' && (
            <ImageContainer>
              {gender === 'female' ? (
                <img
                  srcSet={`${LoseFatGirl} 1x, ${LoseFatGirl2x} 2x`}
                  src={LoseFatGirl}
                  alt="Lose Fat Girl"
                  width="28"
                  height="28"
                />
              ) : (
                <img
                  srcSet={`${LoseFatMan} 1x, ${LoseFatMan2x} 2x`}
                  src={LoseFatMan}
                  alt="Lose Fat Man"
                  width="28"
                  height="28"
                />
              )}
            </ImageContainer>
          )}
          {goal === 'maintain' && (
            <ImageContainer>
              {gender === 'female' ? (
                <img
                  srcSet={`${MaintainGirl} 1x, ${MaintainGirl2x} 2x`}
                  src={MaintainGirl}
                  alt="Maintain Girl"
                  width="28"
                  height="28"
                />
              ) : (
                <img
                  srcSet={`${MaintainMan} 1x, ${MaintainMan2x} 2x`}
                  src={MaintainMan}
                  alt="Maintain Man"
                  width="28"
                  height="28"
                />
              )}
            </ImageContainer>
          )}
          {goal === 'gain muscle' && (
            <ImageContainer>
              <img
                srcSet={`${GainMuscule} 1x, ${GainMuscule2x} 2x`}
                src={GainMuscule}
                alt="Gain Muscle"
                width="28"
                height="28"
              />
            </ImageContainer>
          )}
          <ButtonTextContainer>
            <ButtonName>Goal</ButtonName>
            <ButtonDescription>
              {goal}
              {mobile ? (
                <SvgGoal>
                  <use href={sprite + '#icon-arrow-right'} />
                </SvgGoal>
              ) : (
                <SvgGoal>
                  <use href={sprite + '#icon-arrow-down'} />
                </SvgGoal>
              )}
            </ButtonDescription>
          </ButtonTextContainer>
        </Button>
      )}
      {buttonType === 'weight' && (
        <Button type="button" onClick={onClick}>
          <ImageContainer>
            <img
              srcSet={`${Weight} 1x, ${Weight2x} 2x`}
              src={Weight}
              alt="Weight"
              width="28"
              height="28"
            />
          </ImageContainer>
          <ButtonTextContainer>
            <ButtonName>Weight</ButtonName>
            <EditWeightContainer>
              <ButtonDescription>
                {weight}
                <Kg>kg</Kg>
              </ButtonDescription>
              <Svg>
                <use href={sprite + '#icon-edit-2'} />
              </Svg>
            </EditWeightContainer>
          </ButtonTextContainer>
        </Button>
      )}
    </>
  );
}
