import ketogenicDiet from 'src/images/ketogenicDiet.png';
import { RecommendedList } from '../../components/RecommendedList/RecommendedList';
import { Img, Title, Wrapper } from './RecommendedFoodStyled';

export const RecommendedFood = () => {
  // const [foodRecommended, setFoodRecommended] = useState([]);

  return (
    <>
      <div className="container">
        <Title>Recommended food</Title>
        <Wrapper>
          <Img src={ketogenicDiet} alt="ketogenic-diet" />
          <RecommendedList />
        </Wrapper>
      </div>
    </>
  );
};
