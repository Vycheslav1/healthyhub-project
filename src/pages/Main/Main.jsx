
import DailyGoal from '../../components/DailyGoal/DailyGoal';
import Water from '../../components/WaterMain/Water';
import Food from '../../components/Food/Food';
import DiaryOnMain from '../../components/DiaryOnMain/DiaryOnMain';
// import RecommendedFoodList from '../../components/RecommendedFoodOnMain/RecommendedFoodOnMain';
import {
  Content,
  HeaderMainPage,
  TitlePage,
  LinkToDashboard,
  TrackerList,
  Tarker,
  Wrapper,
} from './Main.styled'


 export const Main = () => {
  return (

          <Content>
            {/* Заговолок */}
            <HeaderMainPage>
              <TitlePage>Today</TitlePage>
              <LinkToDashboard to="/dashboard">
                <p>On the way to the goal</p>
                <img
                
                />
              </LinkToDashboard>
            </HeaderMainPage>
            {/* Блоки, що показують трекери прийому їжі та води (Daily Goal, Water, Food)  */}
            <TrackerList>
              <Tarker>
                {/* блок Щоденна мета DailyGoal */}
                <DailyGoal />
              </Tarker>
              <Tarker>
                {/* блок Вода Water */}
                <Water />
              </Tarker>
              <Tarker>
                {/* блок Їжа Food */}
                <Food />
              </Tarker>
            </TrackerList>

            <Wrapper>
              {/* блок щоденник */}
              <DiaryOnMain />
              {/* блок рекомендована їжа */}
              {/* < RecommendedFoodList /> */}
            </Wrapper>
          </Content>
    
  
  )
 }