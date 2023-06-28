import './App.css';

function App() {
  return (
    <div className="flex">
      <div className='basis-1/2 mx-48 mt-28'>
        <div>
        <h1 className='mt-10 text-3xl font-medium'>Final step, to make the payment.</h1>
        <p className='mt-6 mr-32 text-gray-400 text-xl'>To finalize your subscription, kindly complete your payment using a valid credit card.</p>
        </div>

        <div className='w-3/4 mt-16'>
          <div class="relative mt-10">
          <label for="card_number" className='block text-gray-500 font-normal'>Card number</label>
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" className='mt-7 w-8 h-8' viewBox="0 0 24 24" id="mastercard"><path fill="#FF5F00" d="M15.245 17.831h-6.49V6.168h6.49v11.663z"></path><path fill="#EB001B" d="M9.167 12A7.404 7.404 0 0 1 12 6.169 7.417 7.417 0 0 0 0 12a7.417 7.417 0 0 0 11.999 5.831A7.406 7.406 0 0 1 9.167 12z"></path><path fill="#F79E1B" d="M24 12a7.417 7.417 0 0 1-12 5.831c1.725-1.358 2.833-3.465 2.833-5.831S13.725 7.527 12 6.169A7.417 7.417 0 0 1 24 12z"></path></svg>
        </div>
        <input type="text" id="card_number" className="block w-full mt-1 py-2 px-14 text-lg text-gray-900 border shadow-sm border-gray-300 rounded-lg" placeholder="0000-0000-0000-0000" required></input>
        </div>
        
          <div className='flex justify-between mt-6'>
            <div className=''>
            <label for="expiry_date" class="block mb-2 text-gray-500 font-normal">Expiry Date</label>
              <input type="text" id="expiry_date" className="w-44 mt-1 px-4 py-2 bg-white border shadow-sm rounded-lg border-slate-300 placeholder-slate-400" placeholder="11/26" required></input>
            </div>
            <div className=''>
            <label for="cvv" class="block mb-2 text-gray-500 font-normal">CVV</label>
              <input type="text" id="cvv" className="w-44 mt-1 px-4 py-2 bg-white border shadow-sm border-slate-300 rounded-lg  placeholder-slate-400" placeholder="XXX" required></input>
            </div>
            </div>

            <div className='relative mt-6'>
            <label for="discount" className='block mb-2 text-gray-500 font-normal'>Discount code</label>
            <input type='text' id='discount' className='block w-full mt-1 py-2 px-4 text-lg text-gray-900 border shadow-sm border-gray-300 rounded-lg' placeholder='C00-XYZ-PX' required></input>
            <button type="submit" class="text-blue-600 mr-2 absolute right-2.5 bottom-2.5 ">Apply</button>
          </div>
          
          <button type='button' className='w-64 h-16 mt-10 rounded-lg border bg-blue-600 text-white'>Pay Now</button>
        </div>
      </div>
      <div className='basis-1/2 flex justify-center flex-rows mt-20'>
        <div>
       <div className='flex-rows-2 px-10 py-10 w-5/6 mt-10 border border-gray rounded-md shadow-sm bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-100 via-amber-100 via-stone-100 to-indigo-100'>
       <div className='flex-rows-2 w-96 h-60 border border-gray-200 rounded-2xl shadow-2xl bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-100 shadow-2xl'>
          <div className='grid grid-rows-1 mx-10'>
          <svg xmlns="http://www.w3.org/2000/svg" className='mt-4 w-12 h-12' viewBox="0 0 24 24" id="mastercard"><path fill="#FF5F00" d="M15.245 17.831h-6.49V6.168h6.49v11.663z"></path><path fill="#EB001B" d="M9.167 12A7.404 7.404 0 0 1 12 6.169 7.417 7.417 0 0 0 0 12a7.417 7.417 0 0 0 11.999 5.831A7.406 7.406 0 0 1 9.167 12z"></path><path fill="#F79E1B" d="M24 12a7.417 7.417 0 0 1-12 5.831c1.725-1.358 2.833-3.465 2.833-5.831S13.725 7.527 12 6.169A7.417 7.417 0 0 1 24 12z"></path></svg>
          <div className='flex justify-between'>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="50" viewBox="0 0 100 60"><rect x="5" y="5" width="90" height="50" rx="5" ry="5" fill="#FFD700" stroke="#CDA300" stroke-width="2"/><g fill="none" stroke="#CDA300" stroke-width="1"><line x1="20" y1="15" x2="20" y2="45"/><line x1="35" y1="15" x2="35" y2="45"/><line x1="50" y1="15" x2="50" y2="45"/><line x1="65" y1="15" x2="65" y2="45"/><line x1="80" y1="15" x2="80" y2="45"/><line x1="20" y1="20" x2="80" y2="20"/><line x1="20" y1="30" x2="80" y2="30"/><line x1="20" y1="40" x2="80" y2="40"/></g></svg>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-10 rotate-90 font-bold' viewBox='0 0 88 88' id="wifi"><path d="M76.1 40.6c2 1.9 2.2 5 .3 7-1 1.1-2.3 1.6-3.7 1.6-1.2 0-2.4-.4-3.4-1.3-22.2-20.3-46.1-1-47.1-.2-2.1 1.8-5.3 1.5-7-.6-1.8-2.1-1.5-5.2.6-7 10.9-9.1 37.3-20.6 60.3.5zM46.3 68.4c-2.5 0-5 1-6.7 2.8-1.8 1.8-2.8 4.2-2.8 6.7s1 4.9 2.8 6.7c1.8 1.8 4.2 2.8 6.7 2.8s5-1 6.7-2.8c1.8-1.8 2.8-4.2 2.8-6.7s-1-4.9-2.8-6.7c-1.8-1.8-4.2-2.8-6.7-2.8zm44-41.4C66.6 6.3 43.7 7.4 28.6 12 12.5 16.9 2 26.5 1.6 27c-2 1.9-2.1 5-.2 7 1.9 2 5.1 2.1 7.1.2.1-.1 9.2-8.5 23.1-12.7 18.4-5.6 35.9-1.2 52.2 13 .9.8 2.1 1.2 3.3 1.2 1.4 0 2.8-.6 3.8-1.7 1.7-2 1.5-5.2-.6-7zM29.5 54.3c-2.2 1.7-2.5 4.8-.8 7s4.9 2.5 7 .8c.4-.3 11-8.5 20-.1 1 .9 2.2 1.3 3.4 1.3 1.3 0 2.7-.5 3.7-1.6 1.9-2 1.8-5.2-.3-7-12.1-11.2-26.9-5.1-33-.4z"></path></svg>
          </div>
          <span className='mt-4 text-gray-500 text-xl'>XXXX-XXXX-XXXX-XXXX</span>
          <div className='flex justify-between mt-2'>
          <span className='text-gray-500'>Card Holder</span>
          <span className='text-gray-500'>Expiry date</span>
          <span className='text-gray-500 mr-8'>CVV</span>
          </div>
          <div className='flex justify-between mt-1'>
          <span className='text-gray-500'>John Doe</span>
          <span className='text-gray-500'>00/00</span>
          <span className='text-gray-500 mr-8'>XXX</span>
          </div>
          </div>
       </div>
        <h1 className='mt-4 text-xl text-gray-500'>You've to pay.</h1>
        <h1 className='mt-2 text-4xl font-bold'>$ 320.00</h1>
        <div>
          <div className='flex mr-4 mt-8'>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8' viewBox='0 0 140 140'><circle cx="50" cy="50" r="40" fill="#2BB673" /><path d="M30 50 L45 65 L70 35" stroke="#FFFFFF" stroke-width="4" fill="none" /></svg>
          <h1 className='text-xl font-medium'>Payment & Invoice</h1>
          </div>
          <span className='mt-1 font-light text-gray-500'>We'll worry about all the transactions and payment. You can sit back and relax while you make your clients happy.</span>
          <div className='mt-8 w-96 h-20 px-4 pt-4 border border-gray rounded-lg bg-black'>
            <span className='text-white text-sm font-thin'>
            You'll be provided with discount offers from time to time and have access to royalties perks and benifits.
            </span>
          </div>
        </div>
       </div>
       </div>
      </div>
      
    </div>
  );
}

export default App;
