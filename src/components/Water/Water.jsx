import React from 'react';
import { useSelector } from 'react-redux';
// import { useState } from 'react';
import { selectGoals } from './selectors'
import addSvg from '../../Images/sprite/add.svg'
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
} from './Water.styled'


export default function Water() {

//  const [openModal, setOpenModal] = useState(false);
  const { items } = useSelector(selectGoals);


  if (Object.keys(items).length === 0) {
    return;
  }
  const waterGoal = items.total.water.goal;
  const waterUsed = items.total.water.used;

//   function progress(used, goal) {
//     if (used >= goal) {
//       return 100;
//     }
//     return Math.round((waterUsed / waterGoal) * 100);
//   }

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
              {/* <SrOnly style={{ top: `${walue}px` }}>
                {`${progress(waterUsed, waterGoal)}%`} */}
              {/* </SrOnly> */}
            </ProgressBar>
          </Progress>
        </WaterProgressBar>
        <div>
          <Consumption>Water consumption</Consumption>
          <Item>
            <WaterGoal>
              {waterUsed}
              <WaterSpan>ml</WaterSpan>
            </WaterGoal>
            <Left>
              left:
              <LeftSpan>
                {waterGoal <= waterUsed ? 0 : waterGoal - waterUsed}
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
          <WaterButton >
            <span>
              <WaterImg src={addSvg} alt="plus" />
            </span>
            Add water intake
          </WaterButton>
        </div>
      </WaterWrapper>
    </WaterWindow>
  );
}