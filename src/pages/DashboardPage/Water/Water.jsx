// import { getDate, parseISO } from 'date-fns';
// import {
//   GraphicHeader,
//   GraphicBody,
//   GraficFrame,
//   ScrollWrap,
//   GraphicTitle,
//   Avarage,
//   Value,
// } from '../DashboardPage.styled';
// import { avarageValue } from '../../../utils/DashBoard/avarageValue';
// import { Line } from 'react-chartjs-2';

// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
// } from 'chart.js';

// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip
// );

// export const Water = ({ name, data: dataWater, period }) => {
//   if (!dataWater) {
//     return;
//   }

//   const lables = dataWater.map(({ date }) => {
//     if (period.value === 'lastYear') {
//       return date.substring(0, 3);
//     }
//     return getDate(parseISO(date));
//   });

//   const waterData = dataWater.map(({ value }) => {
//     return value;
//   });

//   const titleTooltip = (tooltipItems) => {
//     return '';
//   };

//   const data = {
//     type: 'line',
//     labels: lables,
//     datasets: [
//       {
//         data: waterData,
//         tension: 0.1,
//         borderColor: 'rgba(227, 255, 168, 1)',
//         spanGaps: true,
//         backgroundColor: 'rgba(227, 255, 168, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     maintainAspectRatio: false,
//     interaction: {
//       mode: 'nearest',
//       axis: 'x',
//       intersect: false,
//     },
//     layout: {
//       padding: {
//         left: 14,
//         right: 31,
//         top: 25,
//         bottom: 24,
//       },
//     },
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         shadowOffsetX: 3,
//         shadowOffsetY: 3,
//         shadowBlur: 10,
//         shadowColor: 'rgba(231, 219, 219, 0.5)',

//         yAlign: false,
//         displayColors: false,
//         cornerRadius: 8,
//         backgroundColor: '#0F0F0F',
//         titleColor: '#FFF',
//         bodyAlign: 'center',
//         footerAlign: 'center',
//         shadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
//         bodyFont: {
//           size: 32,
//           weight: 'bold',
//           family: 'Poppins',
//           lineHeight: 1.19,
//           style: 'normal',
//         },
//         caretSize: 0,
//         footerFont: {
//           size: 14,
//           weight: 'normal',
//           family: 'Poppins',
//           lineHeight: 1.43,
//           style: 'normal',
//         },
//         footerColor: '#B6B6B6',
//         callbacks: {
//           title: titleTooltip,
//           footer: function (context) {
//             return 'milliliters';
//           },
//         },
//       },
//     },
//     pointRadius: 0,
//     scales: {
//       y: {
//         color: '#B6B6B6',
//         min: 0,
//         max: 3000,
//         ticks: {
//           padding: 8,
//           stepSize: 1000,
//           callback: (value) => {
//             if (value !== 0) {
//               return value / 1000 + 'K';
//             }
//             if (value === 0) {
//               return value;
//             }
//           },
//         },
//         grid: {
//           lineWidth: 0.5,
//           color: 'rgba(182, 182, 182, 1)',
//           drawTicks: false,
//         },
//       },
//       x: {
//         stacked: true,
//         beginAtZero: false,
//         color: '#B6B6B6',
//         ticks: {
//           padding: 6,
//         },

//         grid: {
//           lineWidth: 0.5,
//           color: 'rgba(182, 182, 182, 1)',
//           drawTicks: false,
//         },
//         min: 0,
//         max: 31,
//       },
//     },
//   };

//   return (
//     <>
//       <GraficFrame>
//         <GraphicHeader>
//           <GraphicTitle>{name}</GraphicTitle>
//           <Avarage>
//             Avarage value:<Value>{avarageValue(dataWater)} ml</Value>
//           </Avarage>
//         </GraphicHeader>
//         <ScrollWrap>
//           <GraphicBody>
//             {dataWater.length ? (
//               <Line data={data} options={options}></Line>
//             ) : (
//               <p>Created by HealthyHub🍎Team</p>
//             )}
//           </GraphicBody>
//         </ScrollWrap>
//       </GraficFrame>
//     </>
//   );
// };
