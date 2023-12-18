import {
    RecomendedList,
    // Item,
    RecomendedName,
    Calories,
    RecomendedSpan
} from './RecommendedFoodOnMain.styled'


function RecommendedFoodList() {
  return (
    <RecomendedList>
      {/* {products.map(product => {
        return (
          <Item key={product._id} >
            <img
              width="46px"
              height="46px"
              src={product.img}
              alt={product.name}
            /> */}
            <div>
              <RecomendedName>
                  {/* {product.name} */}
              </RecomendedName>
              <Calories>
                <RecomendedSpan>100 g </RecomendedSpan>
                  {/* {product.calories} */}
                  calories
              </Calories>
            </div>
          {/* </Item> */}
    {/* //     );
    //   })} */}
    </RecomendedList>
  );
}

export default RecommendedFoodList;