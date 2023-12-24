import { useSelector } from 'react-redux';
import { DailyGoal } from '../../components/DailyGoal/DailyGoal';
import DiaryOnMain from '../../components/DiaryOnMain/DiaryOnMain';
import { Water } from '../../components/WaterMain/Water'
import { Food } from '../../components/Food/Food';
import { RecommendedList } from '../../components/RecommendedList/RecommendedList';
import {
  Content,
  HeaderMainPage,
  TitlePage,
  LinkToDashboard,
  TrackerList,
  Tarker,
  Wrapper,
  TitleRecommended,
  WrapperRecommended,
  WrapperDiaryOnMain,
  ImageRecom,
  LinkRecommended,
} from './Main.styled';
import { useEffect, useState } from 'react';
import { getRecommendedImage } from '../../redux/getRequest/getRecommendedImg';
import arrow from '../../images/svg/arrow.svg';

export const Main = () => {
  const [foodRecommended, setFoodRecommended] = useState([]);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    getRecommendedImage(10)
      .then((data) => {
        const newData = data.slice(0, 4);
        setFoodRecommended(newData);
      })
      .catch((error) => console.error(error));
  }, [token]);

  return (
    <Content>
      {/* Заговолок */}
      <HeaderMainPage>
        <TitlePage>Today</TitlePage>
        <LinkToDashboard to="/dashboard">
          <p>On the way to the goal</p>
          <img />
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
        <WrapperDiaryOnMain>
          <DiaryOnMain />
        </WrapperDiaryOnMain>
        {/* блок рекомендована їжа */}
        <WrapperRecommended>
          <TitleRecommended>Recommended food</TitleRecommended>
          <RecommendedList recommendedImage={foodRecommended} />
          <LinkRecommended to={'/recommended-food'}>
            See more
            <ImageRecom src={arrow} alt="arrow" />
          </LinkRecommended>
        </WrapperRecommended>
      </Wrapper>
    </Content>
  );
};
