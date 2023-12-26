import { useSelector } from 'react-redux';
import bubble from 'src/images/svg/bubble.svg';
import milk from 'src/images/svg/milk.svg';

import {
  DailyWindow,
  DailyHead,
  DailyWrapper,
  BubbleWrapper,
  CaloriesWrapper,
  CaloriesHead,
  Calories,
  WaterHead,
  WaterWrapper,
  Water,
  WaterSpan,
} from './DialyGoalStyled';
import { selectUser } from '../../redux/auth/selectors';

export const DailyGoal = () => {
  // const { bmr, waterRate } = useSelector(selectUser);

  return (
    <DailyWindow>
      <DailyHead>Daily goal</DailyHead>

      <DailyWrapper>
        <BubbleWrapper>
          <img src={bubble} alt="illustration" />
          <CaloriesWrapper>
            <CaloriesHead>Calories</CaloriesHead>
            <Calories>{/* {bmr} */}2000</Calories>
          </CaloriesWrapper>
        </BubbleWrapper>
        <BubbleWrapper>
          <img src={milk} alt="illustration" />
          <WaterWrapper>
            <WaterHead>Water</WaterHead>
            <Water>
              {/* {waterRate} */}2000
              <WaterSpan>ml</WaterSpan>
            </Water>
          </WaterWrapper>
        </BubbleWrapper>
      </DailyWrapper>
    </DailyWindow>
  );
};
