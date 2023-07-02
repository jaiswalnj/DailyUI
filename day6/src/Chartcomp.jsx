import {Line} from 'react-chartjs-2'
import {
  Chart as ChartJS, 
  LineElement,
  CategoryScale, 
  LinearScale, 
  PointElement
  } from 'chart.js';

  ChartJS.register(
    LineElement, 
    CategoryScale, 
    LinearScale, 
    PointElement
  ) 


const Chartcomp = () => {
    const data = {
          labels: ['FEB', 'MAR', 'APR' ,'MAY' , 'JUN' , 'JUL'],
          datasets:[{
          labels: 'Points',
          data: [30, 36, 26, 32, 20, 28],
          backgroundColor: 'white', 
          borderColor: 'orange', 
          pointBorderColor: 'orange',
          pointBorderWidth: 2,
          fill:true,
          tension:0.5
          }
        ]
      }
    const options = {
        plugins:{
          legend:true
        },
        scales:{
          x:{
            grid:{
              display:false
            }
          },
          y:{
            min:10,
            max:40,
            grid:{
              display:false
            }
          }
        }
    }

  return (
    <div>
      <Line
       data={data}
       options={options}
      ></Line>
    </div>
  )
}

export default Chartcomp