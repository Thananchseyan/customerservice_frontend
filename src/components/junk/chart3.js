// import React from 'react';
// import {Line} from 'react-chartjs-2';
// import Chart from "chart.js";

// Chart.defaults.global.defaultFontFamily = "Open Sans, sans-serif";
// Chart.defaults.global.Legend.display = false;


// function Chart3() {

//     const myChartRef = this.chartRef.current.getContext("2d")
//     const state = {
//     labels: ['Mon', 'Tue', 'Wed',
//              'Thu', 'Fri','Sat','Sun'],
//     datasets: [
//       {
//         label: 'New Message',
//         fill: false,
//         lineTension: 0,
//         backgroundColor: '#1de9b6',
//         borderColor: '#1de9b6',
//         borderWidth: 1,
//         data: [6, 9, 8, 8, 6, 6,]
//       }
//     ]
//   }

//     return (
//       <div>
//         <Line
//           data={state}
//           options={{
//             title:{
//               display:true,
//               text:'New Messages',
//               fontSize:20
//             },
//             //responsive: true,
//             //maintainAspectRatio: false,
//             layout:{
//               padding :{
//                 top: 5,
//                 left :15,
//                 right: 14,
//                 bottom: 50
//               }
//             },
//             scales : {
//               x: {
//                 grid: {
//                   display: false
//                 },
//                 title:{
//                   display:true,
//                   text:'Days',
//                   font:{
                   
//                   }
//                 }        
//               },
//               y:{
//                 title:{
//                   display:true,
//                   text:'Messages'
//                 } 
//               }
//             },
//             // scales : {
//             //   y: [{
//             //     title: {
//             //       display: true,
//             //       text: 'Days'
//             //     },

        
//             //   }]
//             // },
//             // scales: {
//             //   yAxes:[{
//             //     scaleLabel:{
//             //       display:true,
//             //       labelString:'Message'
//             //     }
//             //   }]
//             // }
//             // legend:{
//             //   display:true,
//             //   position:'right'
//             // },
//             animationEnabled: true,
// 			      exportEnabled: true,
//           }}
//         />
//       </div>
//     );
  
// }

// export default Chart3;