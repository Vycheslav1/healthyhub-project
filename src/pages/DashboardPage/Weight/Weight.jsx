// import { nanoid } from 'nanoid';
// import { getDate, parseISO } from 'date-fns';
// import { avarageValue } from '../../../utils/DashBoard/avarageValue';
// import {
//   WeightBody,
//   WeigthFrame,
//   WeigthItem,
//   ScrollWrap,
//   GraphicHeader,
//   GraphicTitle,
//   Avarage,
//   Value,
//   WeightData,
//   WeightDate,
//   Stub,
// } from '../DashboardPage.styled';

// export const Weight = ({ name, data: dataWeight, period }) => {
//   if (!dataWeight) {
//     return;
//   }

//   const dateOrMonth = (date, period) => {
//     if (period.value === 'lastYear') {
//       return date.substring(0, 3);
//     }
//     return getDate(parseISO(date));
//   };

//   return (
//     <>
//       <WeightBody>
//         <GraphicHeader>
//           <GraphicTitle>{name}</GraphicTitle>
//           <Avarage>
//             Avarage value:<Value>{avarageValue(dataWeight)} kg</Value>
//           </Avarage>
//         </GraphicHeader>
//         <ScrollWrap>
//           <WeigthFrame>
//             {dataWeight.length ? (
//               dataWeight.map(({ value, date }) => {
//                 return (
//                   <WeigthItem key={nanoid()}>
//                     <WeightData>{value}</WeightData>
//                     <WeightDate>{dateOrMonth(date, period)}</WeightDate>
//                   </WeigthItem>
//                 );
//               })
//             ) : (
//               <Stub> Created by HealthyHub🍎Team</Stub>
//             )}
//           </WeigthFrame>
//         </ScrollWrap>
//       </WeightBody>
//     </>
//   );
// };
