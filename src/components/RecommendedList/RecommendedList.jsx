import { Calories, Item, List, Title } from './Recommended.styled';

export const RecommendedList = ({ recommendedImage }) => {
  return (
    <List>
      {recommendedImage.slice(0, 10).map((product) => {
        return (
          <Item key={product._id}>
            <img
              width="46px"
              height="46px"
              src={product.img}
              alt={product.name}
            />
            <div>
              <Title>{product.name}</Title>
              <Calories>
                <span>100 g </span>
                {product.calories} calories
              </Calories>
            </div>
          </Item>
        );
      })}
    </List>
  );
};
