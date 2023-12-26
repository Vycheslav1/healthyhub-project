import { useDispatch, useSelector } from 'react-redux';
import { DailyGoal } from '../../components/DailyGoal/DailyGoal';
import DiaryOnMain from '../../components/DiaryOnMain/DiaryOnMain';
import { Water } from '../../components/WaterMain/Water';
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
import arrow from 'src/images/svg/arrow.svg';
import { addWater, fetchGoalsConfirm } from '../../redux/usersGoal/operations';

export const Main = () => {
  const [foodRecommended, setFoodRecommended] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoalsConfirm());
    dispatch(addWater());
  });

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
      <HeaderMainPage>
        <TitlePage>Today</TitlePage>
        <LinkToDashboard to="/dashboard">
          <p>On the way to the goal</p>
          <img />
        </LinkToDashboard>
      </HeaderMainPage>

      <TrackerList>
        <Tarker>
          <DailyGoal />
        </Tarker>

        <Tarker>
          <Water />
        </Tarker>

        <Tarker>
          <Food />
        </Tarker>
      </TrackerList>

      <Wrapper>
        <WrapperDiaryOnMain>
          <DiaryOnMain />
        </WrapperDiaryOnMain>

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
