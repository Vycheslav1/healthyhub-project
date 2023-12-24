import ketogenicDiet from 'src/images/ketogenicDiet.png';
import { RecommendedList } from '../../components/RecommendedList/RecommendedList';
import { Img, Title, Wrapper } from './RecommendedFoodStyled';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getRecommendedImage } from '../../redux/getRequest/getRecommendedImg';

export const RecommendedFood = () => {
  const [foodRecommended, setFoodRecommended] = useState([]);
  const token = useSelector(state => state.auth.token)
  
  useEffect(() => {
    getRecommendedImage(10).then(data => {
      setFoodRecommended(data)
    }).catch(error => console.error(error));
  }, [token])

  return (
      <div className="container">
        <Title>Recommended food</Title>
        <Wrapper>
          <Img src={ketogenicDiet} alt="ketogenic-diet" />
        <RecommendedList recommendedImage={foodRecommended} />
        </Wrapper>
      </div>
  );
};
