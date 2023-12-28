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
  FatWrapper,
} from './FoodStyled';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../redux/auth/selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Food = () => {
  const { ratio, bmr } = useSelector(getUserInfo);
  console.log(ratio);

  const defaultNumber = bmr;
  // const defaultNumber = 2500;
  const filledValue = 1900;

  const emptyValue = defaultNumber - filledValue;

  const data = {
    datasets: [
      {
        label: 'Calories',
        data: [filledValue, emptyValue],
        backgroundColor: ['#45FFBC', '#292928'],
        borderColor: ['#45FFBC', '#292928'],
        borderWidth: [1, 0],
        cutout: '80%',
        borderRadius: ['50', '0'],
      },
    ],
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();

      ctx.font = 'bolder 32px Poppins';
      ctx.textStyle = 'normal';
      ctx.textAlign = 'center';
      ctx.textBaseLine = 'middle';
      ctx.fillStyle = '#FFF';
      ctx.fontWeight = '500';
      ctx.lineHeight = '38px';
      ctx.fillText(
        `${data.datasets[0].data[0]}`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y - 10
      );

      ctx.font = 'bolder 14px Poppins';
      ctx.textStyle = 'normal';
      ctx.textAlign = 'center';
      ctx.textBaseLine = 'middle';
      ctx.fillStyle = '#B6B6B6';
      ctx.fontWeight = '400';
      ctx.lineHeight = '20px';
      ctx.fillText(
        'calories',
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y + 20
      );

      ctx.restore();
    },
  };

  const defaultCarbonohidrates = ratio.carbonohidrates;
  // const defaultCarbonohidrates = 700;
  const newCarbonohidratesValue = 100;

  const carbonohidratesValue = Math.floor(
    ((defaultCarbonohidrates - newCarbonohidratesValue) /
      defaultCarbonohidrates) *
      100
  );

  const carbonohidratesDate = {
    datasets: [
      {
        label: 'carbonohidrates',
        data: [carbonohidratesValue, 100 - carbonohidratesValue],
        backgroundColor: ['#FFC4F7', '#292928'],
        borderColor: ['#FFC4F7', '#292928'],
        borderWidth: 1,
        cutout: '90%',
        borderRadius: ['50', '0'],
      },
    ],
  };

  const carbonohidratesTextCenter = {
    id: 'carbonohidratesTextCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();

      ctx.font = '12px Poppins';
      ctx.textStyle = 'normal';
      ctx.textAlign = 'center';
      ctx.textBaseLine = 'middle';
      ctx.fillStyle = '#B6B6B6';
      ctx.fontWeight = '400';
      ctx.lineHeight = '20px';
      ctx.fillText(
        `${data.datasets[0].data[0]}%`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );

      ctx.restore();
    },
  };

  // const defaultProtein = 500;
  const defaultProtein = ratio.protein;
  const newProteinValue = 150;

  const proteinValue = Math.floor(
    ((defaultProtein - newProteinValue) / defaultProtein) * 100
  );
  const proteinDate = {
    datasets: [
      {
        label: 'protein',
        data: [proteinValue, 100 - proteinValue],
        backgroundColor: ['#FFF3B7', '#292928'],
        borderColor: ['#FFF3B7', '#292928'],
        borderWidth: [1, 0],
        cutout: '90%',
        borderRadius: ['50', '0'],
      },
    ],
  };

  const proteinTextCenter = {
    id: 'proteinTextCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();

      ctx.font = '12px Poppins';
      ctx.textStyle = 'normal';
      ctx.textAlign = 'center';
      ctx.textBaseLine = 'middle';
      ctx.fillStyle = '#B6B6B6';
      ctx.fontWeight = '400';
      ctx.lineHeight = '20px';
      ctx.fillText(
        `${data.datasets[0].data[0]}%`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );

      ctx.restore();
    },
  };

  const defaultFat = ratio.fat;
  const newFatValue = 25;
  // const defaultFat = 100;

  const fatValue = Math.floor(((defaultFat - newFatValue) / defaultFat) * 100);

  const fatDate = {
    datasets: [
      {
        label: 'fat',
        data: [fatValue, 100 - fatValue],
        backgroundColor: ['#B6B6B6', '#292928'],
        borderColor: ['#B6B6B6', '#292928'],
        borderWidth: 1,
        cutout: '90%',
        borderRadius: ['50', '0'],
      },
    ],
  };
  const fatTextCenter = {
    id: 'fatTextCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();

      ctx.font = '12px Poppins';
      ctx.textStyle = 'normal';
      ctx.textAlign = 'center';
      ctx.textBaseLine = 'middle';
      ctx.fillStyle = '#B6B6B6';
      ctx.fontWeight = '400';
      ctx.lineHeight = '20px';
      ctx.fillText(
        `${data.datasets[0].data[0]}%`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );

      ctx.restore();
    },
  };

  return (
    <FoodWrapper>
      <FoodHead>Food</FoodHead>

      <GraphWrapper>
        <div style={{ width: '168px' }}>
          <Doughnut data={data} plugins={[textCenter]} />
        </div>

        <TotalCalorieWrapper>
          <CarboWrapper>
            <ItemWrapper>
              <div style={{ width: '48px' }}>
                <Doughnut
                  data={carbonohidratesDate}
                  plugins={[carbonohidratesTextCenter]}
                />
              </div>
              <div>
                <CalorieHead>Carbonohidrates</CalorieHead>
                <NutritionWrapper>
                  <GoalWrapper>
                    Goal:
                    <CrboSpan>{defaultCarbonohidrates}</CrboSpan>
                  </GoalWrapper>
                  <LeftWrapper>
                    left:
                    <CrboSpan>{newCarbonohidratesValue}</CrboSpan>
                  </LeftWrapper>
                </NutritionWrapper>
              </div>
            </ItemWrapper>
          </CarboWrapper>
          <ProtWrapper>
            <ItemWrapper>
              <div style={{ width: '48px' }}>
                <Doughnut data={proteinDate} plugins={[proteinTextCenter]} />
              </div>
              <div>
                <CalorieHead>Protein</CalorieHead>
                <NutritionWrapper>
                  <GoalWrapper>
                    Goal: <CrboSpan>{defaultProtein}</CrboSpan>
                  </GoalWrapper>
                  <LeftWrapper>
                    left:
                    <CrboSpan>{newProteinValue}</CrboSpan>
                  </LeftWrapper>
                </NutritionWrapper>
              </div>
            </ItemWrapper>
          </ProtWrapper>
          <FatWrapper>
            <ItemWrapper>
              <div style={{ width: '48px' }}>
                <Doughnut data={fatDate} plugins={[fatTextCenter]} />
              </div>
              <div>
                <CalorieHead>Fat</CalorieHead>
                <NutritionWrapper>
                  <GoalWrapper>
                    Goal: <CrboSpan>{defaultFat}</CrboSpan>
                  </GoalWrapper>
                  <LeftWrapper>
                    left:
                    <CrboSpan>{newFatValue}</CrboSpan>
                  </LeftWrapper>
                </NutritionWrapper>
              </div>
            </ItemWrapper>
          </FatWrapper>
        </TotalCalorieWrapper>
      </GraphWrapper>
    </FoodWrapper>
  );
};
