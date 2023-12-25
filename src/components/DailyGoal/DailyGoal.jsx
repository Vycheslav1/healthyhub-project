// import { useSelector } from 'react-redux';
import bubble from 'src/images/svg/bubble.svg';
import milk from 'src/images/svg/milk.svg';
// import { selectGoals } from '../../redux/usersGoal/selectors';

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

export const DailyGoal = () => {
  // const { items } = useSelector(selectGoals);

  // if (Object.keys(items).length === 0) {
  //   return;
  // }
  // const waterGoal = items.total.water.goal;
  // const caloriesGoal = items.total.calories.goal;

  return (
    <DailyWindow>
      <DailyHead>Daily goal</DailyHead>

      <DailyWrapper>
        <BubbleWrapper>
          <img src={bubble} alt="illustration" />
          <CaloriesWrapper>
            <CaloriesHead>Calories</CaloriesHead>
            <Calories>{/* {caloriesGoal} */}1700</Calories>
          </CaloriesWrapper>
        </BubbleWrapper>
        <BubbleWrapper>
          <img src={milk} alt="illustration" />
          <WaterWrapper>
            <WaterHead>Water</WaterHead>
            <Water>
              {/* {waterGoal} */}2000
              <WaterSpan>ml</WaterSpan>
            </Water>
          </WaterWrapper>
        </BubbleWrapper>
      </DailyWrapper>
    </DailyWindow>
  );
};
