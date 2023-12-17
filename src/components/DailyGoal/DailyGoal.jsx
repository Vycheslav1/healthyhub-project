
import bubble from './../../Images/svg/bubble.svg';
import milk from './../../Images/svg/milk.svg';
// import { selectGoals } from './selectors';
// import { useSelector } from 'react-redux';


import {
    DailyWindow,
    DailyHead,
    DailyWrapper,
    BubbleWrapper,
    CaloriesWrapper,
    CaloriesHead,
    // Calories,
    WaterHead,
    WaterWrapper,
    Water,
    WaterSpan
} from './DialyGoal.styled'


export default function DailyGoal() {
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
            <CaloriesHead >Calories</CaloriesHead>
            {/* <Calories>{caloriesGoal}</Calories> */}
          </CaloriesWrapper>
        </BubbleWrapper>
        <BubbleWrapper>
          <img src={milk} alt="illustration" />
          <WaterWrapper>
            <WaterHead>Water</WaterHead>
            <Water>
              {/* {waterGoal} */}
              <WaterSpan>ml</WaterSpan>
            </Water>
          </WaterWrapper>
        </BubbleWrapper>
      </DailyWrapper>
    </DailyWindow>
  );
}