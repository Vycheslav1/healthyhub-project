import { useSelector } from 'react-redux';
import { useState } from 'react';
import addSvg from 'src/images/sprite/add.svg';
import scrollLock from 'scroll-lock';
import {
  WaterWindow,
  Head,
  WaterWrapper,
  WaterProgressBar,
  Consumption,
  Item,
  WaterGoal,
  WaterSpan,
  Left,
  LeftSpan,
  WaterButton,
  WaterImg,
  // SrOnly
} from './WaterStyled';
import { AddWaterModal } from '../ModalAddWater/ModalAddWater';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
import { selectUser } from '../../redux/auth/selectors';

export const Water = () => {
  // const { waterRate } = useSelector(selectUser);
  const [openModal, setOpenModal] = useState(false);
  const [targetWater, setTargetWater] = useState(2000);
  const [consumedWater, setConsumedWater] = useState(1800);
  const [leftWater, setLeftWater] = useState(targetWater - consumedWater);
  const [percentageConsumed, setPercentageConsumed] = useState(
    (consumedWater / targetWater) * 100
  );

  const openModalHendler = () => {
    setOpenModal(true);
    scrollLock.disablePageScroll(document.body);
    setConsumedWater();
  };

  const closeModalHendler = (e) => {
    e.preventDefault();
    setOpenModal(false);
    scrollLock.clearQueueScrollLocks();
    scrollLock.enablePageScroll();
  };

  const data = {
    labels: ['Water Target'],
    datasets: [
      {
        data: [consumedWater, targetWater],
        backgroundColor: ['#B6C3FF', 'transparent'],
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      label: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
        stacked: true,
      },
      y: {
        display: false,
        stacked: true,
      },
    },
    layout: {
      padding: {
        top: 8,
        bottom: 0,
      },
    },
    barPercentage: 0.8,
    categoryPercentage: 1.1,
  };

  const barPattern = {
    id: 'barPattern',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        data,
        chartArea: { top, bottom, height },
        scales: { x, y },
      } = chart;
      ctx.save();
      const width = chart.getDatasetMeta(0).data[0].width;
      ctx.fillRect(x.getPixelForValue(0) - width / 2, top, width, height - 0.5);

      ctx.font = '16px Poppins';
      ctx.textStyle = 'normal';
      ctx.textAlign = 'center';
      ctx.textBaseLine = 'middle';
      ctx.fillStyle = '#B6C3FF';
      ctx.fontWeight = '600';
      ctx.lineHeight = '22px';
      ctx.fillText(
        `${Math.round(percentageConsumed)}%`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y - 6
      );

      ctx.restore();
    },
  };

  return (
    <WaterWindow>
      <Head>Water</Head>
      <WaterWrapper>
        <WaterProgressBar style={{ width: '80px', height: '192px' }}>
          <Bar
            data={data}
            options={options}
            plugins={[barPattern]}
            width={82}
            height={187}
          />
        </WaterProgressBar>
        <div>
          <Consumption>Water consumption</Consumption>
          <Item>
            <WaterGoal>
              {/* {waterUsed} */}
              {targetWater}
              <WaterSpan>ml</WaterSpan>
            </WaterGoal>
            <Left>
              left:
              <LeftSpan>
                {leftWater}
                {/* {waterGoal <= waterUsed ? 0 : waterGoal - waterUsed} */}
              </LeftSpan>
              <WaterSpan>ml</WaterSpan>
            </Left>
          </Item>
          {openModal && (
            <AddWaterModal
              closeModal={closeModalHendler}
              // waterGoal={waterGoal}
              // waterUsed={waterUsed}
            />
          )}
          <WaterButton onClick={openModalHendler}>
            <WaterImg src={addSvg} alt="plus" />
            Add water intake
          </WaterButton>
        </div>
      </WaterWrapper>
    </WaterWindow>
  );
};
