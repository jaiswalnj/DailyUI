import React,{useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


function App() {
  const [amt, setAmt] = useState();
  const [time,setTime] = useState();
  const [int,setInt] = useState();
  const [totint,setTotint] = useState();
  const [totamt,setTotamt] = useState();
  const [mamt,setMamt] = useState();

  const handleamt = (e) => {
    setAmt(parseInt(e.target.value));
  };
  const handletime = (e) => {
    setTime(parseInt(e.target.value));
  };
  const handleint = (e) => {
    setInt(parseInt(e.target.value));
  };
  const calculate = () =>{
    let inte=parseInt(amt*(int/100)*time);
    let totamte= parseInt(amt+inte);
    let mamte= parseInt(totamte/(time*12));
      setTotamt(totamte);
      setMamt(mamte);
      setTotint(inte);
  }
  const data={
    labels: ['Principle', 'Interest'],
    datasets: [
    {
      label: 'amount',
      data: [500000,120000],
      backgroundColor: [
        'rgba(185, 135, 255, 0.8)',
        'rgba(103, 0, 248, 0.8)',
      ],
      borderColor: [
        'rgba(185, 135, 255, 0.8)',
        'rgba(103, 0, 248, 0.8)',
      ],
      borderWidth: 1,
    },
  ],
};
  const options = {        
    radius : 140,
    rotation:180,
   };
  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions){
    const { ctx, data } = chart;
    ctx. save ();
    ctx.font = '30px';
    ctx. fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx. fillText (`Total Amount: 6,20,000`, chart. getDatasetMeta (0) .data [0].x, chart.getDatasetMeta (0) . data [0].y) ;
    }
  };
  const sliceThickness = {
    id: 'sliceThickness',
    beforeDraw (chart, plugins) {
    let sliceThicknessPixel=[300, 250];
    sliceThicknessPixel.forEach((thickness, index) =>{
    chart.getDatasetMeta(0).data[index].outerRadius=(chart.chartArea.width/thickness) * 100;
    })
  } 
}
  return (
    <div className="min-h-screen pt-16">
      <h1 className='text-3xl text-center text-gray-500 font-semibold'>Loan Calculator</h1>
      <span className='flex justify-center text-center text-gray-400 mt-4'>The calculated amount is approximate.The exact terms of the loan are determined individually.</span>
      <div className='grid grid-cols-2 divide-x-4 divide-gray-200 px-10 py-16 h-128 mx-60 mt-12 bg-gray-50 rounded-3xl shadow-t shadow-xl shadow-gray-500/50'>
        
        
        <div className='grid grid-rows justify-center'>
          <div className=''>
            <Doughnut data={data} options={options} plugins={[textCenter,sliceThickness]}/>
          </div>
          <div className='flex flex-col mt-10'>
            <h1 className='text-center text-lg'>You Will Pay</h1>
            <h1 className='text-center text-bold text-5xl bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent'>${mamt}</h1>
            <h1 className='text-center text-gray-400'>Per Month</h1>
          </div>
        </div>
        
        
        <div className='grid grid-rows justify-center'>
              <div className=''>
                <ul class="flex w-72 bg-white rounded-full border-b shadow-lg text-sm font-medium text-center text-gray-500 ">
                    <li class="w-full">
                        <a href="#" class="inline-block py-2 bg-white">INR</a>
                    </li>
                    <li class="w-full">
                        <a href="#" class="inline-block py-2 bg-white "><div className='w-20 h-6 flex justify-center items-center text-center shadow-[inset_2px_2px_6px_rgba(0,0,0,0.4)] rounded-full bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent'>USD</div></a>
                    </li>
                    <li class="w-full">
                        <a href="#" class="inline-block py-2 bg-white">EUR</a>
                    </li>
                </ul>
              </div>
              <div>
                <label for="loan_amount" class="block px-2 mb-2 text-sm font-medium text-gray-900">LOAN AMOUNT</label>
                <input id="loan_amount" type="text" onChange={handleamt} value={amt} class="w-full h-12 px-6 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)] rounded-lg " placeholder='5,00,000'></input>
              </div>
              <div>
                <label for="period" class="block px-2 mb-2 text-sm font-medium text-gray-900">PERIOD:</label>
                <input id="period" type="text" onChange={handletime} value={time} class="w-full h-12 px-6 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)] rounded-lg " placeholder='2 Years'></input>
              </div>
              <div className='flex justify-between ml-4 mr-6'>
                  <div class="flex items-center">
                      <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 bg-violet-400"/>
                      <label for="bordered-radio-1" class="w-full py-2 ml-2 text-sm font-medium text-gray-900">Years</label>
                  </div>
                  <div class="flex items-center">
                      <input id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-amber-600 bg-gray-100"/>
                      <label for="bordered-radio-2" class="w-full py-2 ml-2 text-sm font-medium text-gray-900">Months</label>
                  </div>
              </div>
              <div>
                <label for="interest" class="block px-2 mb-2 text-sm font-medium text-gray-900">RATE OF INTEREST</label>
                <input id="interest" type="text" onChange={handleint} value={int} class="w-full h-12 px-6 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)] rounded-lg " placeholder='12.5%'></input>
              </div>
              <button type='button' onClick={calculate}className='w-full h-12 rounded-xl text-white bg-gradient-to-r from-violet-300 via-violet-400 to-violet-500'>CALCULATE</button>
        </div>

      </div>
    </div>
  );
}

export default App;
