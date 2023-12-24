import { useSelector } from 'react-redux';
import { useState } from 'react';
import addSvg from 'src/images/sprite/add.svg';
import scrollLock from 'scroll-lock';

import {
  WaterWindow,
  Head,
  WaterWrapper,
  WaterProgressBar,
  Progress,
  ProgressBar,
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
// import { selectGoals } from '../../redux/usersGoal/selectors';

export const Water = () => {
  const [openModal, setOpenModal] = useState(false);
  // const { items } = useSelector(selectGoals);

  const openModalHendler = () => {
    setOpenModal(true);
    scrollLock.disablePageScroll(document.body);
  };

  const closeModalHendler = (e) => {
    e.preventDefault();
    setOpenModal(false);
    scrollLock.clearQueueScrollLocks();
    scrollLock.enablePageScroll();
  };

  // if (Object.keys(items).length === 0) {
  //   return;
  // }

  // const waterGoal = items.total.water.goal;
  // const waterUsed = items.total.water.used;

  // function progress(used, goal) {
  //   if (used >= goal) {
  //     return 100;
  //   }
  //   return Math.round((waterUsed / waterGoal) * 100);
  // }

  // let value = -20;

  // switch (progress(waterUsed, waterGoal)) {
  //   case 91:
  //     value = -18;
  //     break;
  //   case 92:
  //     value = -16;
  //     break;
  //   case 93:
  //     value = -15;
  //     break;
  //   case 94:
  //     value = -13;
  //     break;
  //   case 95:
  //     value = -12;
  //     break;
  //   case 96:
  //     value = -10;
  //     break;
  //   case 97:
  //     value = -8;
  //     break;
  //   case 98:
  //     value = -6;
  //     break;
  //   case 99:
  //     value = -5;
  //     break;
  //   case 100:
  //     value = 3;
  //     break;
  //   default:
  //     value = -20;
  // }

  return (
    <WaterWindow>
      <Head>Water</Head>
      <WaterWrapper>
        <WaterProgressBar>
          <Progress>
            <ProgressBar
            // style={{
            //   height: `${progress(waterUsed, waterGoal)}%`,
            // }}
            >
              {/* <SrOnly style={{ top: `${value}px` }}>
                {`${progress(waterUsed, waterGoal)}%`}
              </SrOnly> */}
            </ProgressBar>
          </Progress>
        </WaterProgressBar>
        <div>
          <Consumption>Water consumption</Consumption>
          <Item>
            <WaterGoal>
              {/* {waterUsed} */}
              <WaterSpan>ml</WaterSpan>
            </WaterGoal>
            <Left>
              left:
              <LeftSpan>
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
            <span>
              <WaterImg src={addSvg} alt="plus" />
            </span>
            Add water intake
          </WaterButton>
        </div>
      </WaterWrapper>
    </WaterWindow>
  );
};
