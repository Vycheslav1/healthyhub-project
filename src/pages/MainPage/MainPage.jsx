
// import DailyGoal from './../../components/DailyGoal';

 
import {
    MainHead,
    TodayHead,
    LinkWrapper,
    TodayLink,
    ComponentWrapper,
    List
} from './MainPage.styled'


export const MainPage = () => {
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
          {/* <DailyGoal /> */}
        </List>
        <List>
         
        </List>
        <List>
        
        </List>
      </ComponentWrapper>
    </div>
  );
};

