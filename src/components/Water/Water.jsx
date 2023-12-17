import React from 'react';

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
    WaterImg
} from './Water.styled'
export default function Water() {

//   const waterGoal = items.total.water.goal;
    //   const waterUsed = items.total.water.used;
    
//     switch (progress(waterUsed, waterGoal)) {
//     case 91:
//       walue = -18;
//       break;
//     case 92:
//       walue = -16;
//       break;
//     case 93:
//       walue = -15;
//       break;
//     case 94:
//       walue = -13;
//       break;
//     case 95:
//       walue = -12;
//       break;
//     case 96:
//       walue = -10;
//       break;
//     case 97:
//       walue = -8;
//       break;
//     case 98:
//       walue = -6;
//       break;
//     case 99:
//       walue = -5;
//       break;
//     case 100:
//       walue = 3;
//       break;
//     default:
//       walue = -20;
//   }

  return (
    <WaterWindow>
      <Head>Water</Head>
      <WaterWrapper>
        <WaterProgressBar>
          <Progress>
            <ProgressBar
            //   style={{
            //     height: `${progress(waterUsed, waterGoal)}%`,
            //   }}
            >
              {/* <span className={css.srOnly} style={{ top: `${walue}px` }}>
                {`${progress(waterUsed, waterGoal)}%`}
              </span> */}
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
          {/* <WaterButton  onClick={openModalHendler}> */}
            <span>
              {/* <WaterImg src={addSvg} alt="plus" /> */}
            </span>
            Add water intake
          </WaterButton>
        </div>
      </WaterWrapper>
    </WaterWindow>
  );
}