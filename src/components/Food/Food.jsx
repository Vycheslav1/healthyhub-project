import {
    FoodWrapper,
    FoodHead,
    GraphWrapper,
    TotalCalorieWrapper,
    CarboWrapper,
    ItemWrapper,
    NutritionWrapper,
    CalorieHead,
    GoalWrapper,
    CrboSpan,
    LeftWrapper,
    ProtWrapper,
    FatWrapper
} from './Food.styled'


export default function Food() {
  
  return (
    <FoodWrapper>
      <FoodHead>Food</FoodHead>

      <GraphWrapper>
        {/* <div style={{ width: '168px', height: '168px' }}>
          <CircularProgressbarWithChildren
            strokeWidth={10}
            value={usedCalories}
            maxValue={`${totalCalories}`}
            styles={buildStyles({
              pathColor: '#45FFBC',
              trailColor: '#292928',
            })}
          >
            <h3 style={{ fontSize: 42, fontWeight: 400, color: '#FFFFFF' }}> 
              {usedCalories >= totalCalories ? 'DONE' : usedCalories} 
               {usedCalories}
            </h3>
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: '#B6B6B6',
              }}
            >
              calories
            </p>
          </CircularProgressbarWithChildren>
        </div> */}

        <TotalCalorieWrapper>
          <CarboWrapper>
            {/* <div style={{ width: '48px', height: '48px' }}>
              <CircularProgressbar
                strokeWidth={10}
                value={percentNutrition(goalСarbohydrates, usedСarbohydrates)}
                text={`${percentNutrition(
                  goalСarbohydrates,
                  usedСarbohydrates
                )}%`}
                styles={buildStyles({
                  textColor: '#B6B6B6',
                  pathColor: '#FFC4F7',
                  trailColor: '#292928',
                  textSize: '32px',
                })}
              />
            </div> */}
            <ItemWrapper>
              <CalorieHead>Carbonohidrates</CalorieHead>
              <NutritionWrapper>
                <GoalWrapper>
                  Goal:
                                  <CrboSpan  >
                                      {/* {goalСarbohydrates} */}
                                  </CrboSpan>
                </GoalWrapper>
                <LeftWrapper>
                  left:
                  <CrboSpan>
                    {/* {leftNutrient(goalСarbohydrates, usedСarbohydrates)} */}
                  </CrboSpan>
                </LeftWrapper>
              </NutritionWrapper>
            </ItemWrapper>
          </CarboWrapper>
          <ProtWrapper>
             {/* <div style={{ width: '48px', height: '48px' }}>
              <CircularProgressbar
                strokeWidth={10}
                value={percentNutrition(goalProtein, usedProtein)}
                text={`${percentNutrition(goalProtein, usedProtein)}%`}
                styles={buildStyles({
                  textColor: '#B6B6B6',
                  pathColor: '#FFF3B7',
                  trailColor: '#292928',
                  textSize: '32px',
                })}
              />
            </div>  */}
            <ItemWrapper>
              <CalorieHead>Protein</CalorieHead>
              <NutritionWrapper>
                <GoalWrapper>
                                  Goal: <CrboSpan>
                                      {/* {goalProtein} */}
                                  </CrboSpan>
                </GoalWrapper>
                <LeftWrapper>
                  left:{' '}
                  <CrboSpan>
                    {/* {leftNutrient(goalProtein, usedProtein)} */}
                  </CrboSpan>
                </LeftWrapper>
              </NutritionWrapper>
            </ItemWrapper>
          </ProtWrapper>
          <FatWrapper>
            {/* <div style={{ width: '48px', height: '48px' }}>
              <CircularProgressbar
                strokeWidth={10}
                value={percentNutrition(goalFat, usedFat)}
                text={`${percentNutrition(goalFat, usedFat)}%`}
                styles={buildStyles({
                  textColor: '#B6B6B6',
                  pathColor: '#45FFBC',
                  trailColor: '#292928',
                  textSize: '32px',
                })}
              />
            </div> */}
            <ItemWrapper>
              <CalorieHead>Fat</CalorieHead>
              <NutritionWrapper>
                <GoalWrapper>
                                  Goal: <CrboSpan>
                                      {/* {goalFat} */}
                                  </CrboSpan>
                </GoalWrapper>
                <LeftWrapper>
                  left:{' '}
                  <CrboSpan>
                    {/* {leftNutrient(goalFat, usedFat)} */}
                  </CrboSpan>
                </LeftWrapper>
              </NutritionWrapper>
            </ItemWrapper>
          </FatWrapper>
        </TotalCalorieWrapper>
      </GraphWrapper>
    </FoodWrapper>
  );
}