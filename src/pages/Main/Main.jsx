
import DailyGoal from '../../components/DailyGoal/DailyGoal';
import Water from '../../components/Water/Water';
 
import {
    MainHead,
    TodayHead,
    LinkWrapper,
    TodayLink,
    ComponentWrapper,
    List,
    LowContainer
} from './Main.styled'


 export const Main = () => {
  return (
   <div>
      <MainHead>
        <TodayHead>Today</TodayHead>
        <LinkWrapper>
          <TodayLink  to="/dashboard">
            On the way to the goal
            <img  />
          </TodayLink >
        </LinkWrapper>
      </MainHead>
      <ComponentWrapper>
        <List>
          <DailyGoal />
        </List>
        <List>
           <Water />
        </List>
        <List>
          {/* <Food /> */}
        </List>
      </ComponentWrapper>
       <LowContainer>
        {/* <DiaryOnMain />
        <RecFoodOnMain /> */}
      </LowContainer>
    </div>
  );
};

