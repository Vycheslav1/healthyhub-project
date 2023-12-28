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
  const user = useSelector(selectUser);

  return (
    <DailyWindow>
      <DailyHead>Daily goal</DailyHead>

      <DailyWrapper>
        <BubbleWrapper>
          <img src={bubble} alt="illustration" />
          <CaloriesWrapper>
            <CaloriesHead>Calories</CaloriesHead>
            <Calories>{user.bmr}</Calories>
          </CaloriesWrapper>
        </BubbleWrapper>
        <BubbleWrapper>
          <img src={milk} alt="illustration" />
          <WaterWrapper>
            <WaterHead>Water</WaterHead>
            <Water>
              {user.waterRate}
              <WaterSpan>ml</WaterSpan>
            </Water>
          </WaterWrapper>
        </BubbleWrapper>
      </DailyWrapper>
    </DailyWindow>
  );
};
