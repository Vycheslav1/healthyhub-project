// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';
// import { selectGoals } from './selectors'
// import AddWaterModal from '../addWaterModal/addWaterModal';
import addSvg from 'src/images/sprite/add.svg';
// import scrollLock from 'scroll-lock';

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

export const Water = () => {
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
              {/* <SrOnly style={{ top: `${walue}px` }}>
                {`${progress(waterUsed, waterGoal)}%`} 
              </SrOnly>  */}
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
          {/* {openModal && (
            <AddWaterModal
              closeModal={closeModalHendler}
              waterGoal={waterGoal}
              waterUsed={waterUsed}
            />
          )} */}
          <WaterButton
          // onClick={openModalHendler}
          >
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
