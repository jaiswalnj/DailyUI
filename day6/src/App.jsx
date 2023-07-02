import React from 'react';
import Card from './Card'
import Chartcomp from './Chartcomp'


const App = () => {
  return (
    <div className='flex max-h-screen'>
      <div className='basis-1/12 flex flex-col items-center justify-between py-10 min-h-screen bg-sky-100'>
        <div>
        <h1 className='text-3xl font-bold text-indigo-900'>Nish</h1>
        <div className='flex items-center justify-center mt-8 rounded-full w-20 h-20 border-b border-2 border-indigo-900'>
          <img src='./photo.png' className='w-16 h-16 rounded-full'/>
        </div>
        </div>
        <div className='flex flex-col gap-16 items-center '>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 fill-gray-400' viewBox="0 0 24 24" id="home"><path d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" className='fill-indigo-900' width="20" height="20" viewBox="0 0 20 20" id="profile"><path fill="#000" fill-rule="evenodd" d="M134 2009c-2.217 0-4.019-1.794-4.019-4s1.802-4 4.019-4 4.019 1.794 4.019 4-1.802 4-4.019 4m3.776.673a5.978 5.978 0 0 0 2.182-5.603c-.397-2.623-2.589-4.722-5.236-5.028-3.652-.423-6.75 2.407-6.75 5.958 0 1.89.88 3.574 2.252 4.673-3.372 1.261-5.834 4.222-6.22 8.218a1.012 1.012 0 0 0 1.004 1.109.99.99 0 0 0 .993-.891c.403-4.463 3.836-7.109 7.999-7.109s7.596 2.646 7.999 7.109a.99.99 0 0 0 .993.891c.596 0 1.06-.518 1.003-1.109-.385-3.996-2.847-6.957-6.22-8.218" transform="translate(-124 -1999)"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" className='fill-gray-400' viewBox="0 0 24 24" id="grid"><path d="M10,13H3a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,20H4V15H9ZM21,2H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,9H15V4h5Zm1,4H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,21,13Zm-1,7H15V15h5ZM10,2H3A1,1,0,0,0,2,3v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,10,2ZM9,9H4V4H9Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 fill-gray-400' viewBox="0 0 512 512" id="stats"><path d="M176 96h64v320h-64zM80 320h64v96H80zM272 256h64v160h-64zM368 192h64v224h-64z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" className='fill-gray-400' viewBox="0 0 24 24" id="location"><path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"></path></svg>
        </div>
      </div>
      <div className='basis-11/12 '>
        <div className='flex justify-between items-center mt-8'>
          <div className='flex gap-2'>
          <h1 className='flex items-center text-5xl ml-10 text-indigo-900 font-bold'> My</h1>
          <h1 className='flex items-center text-5xl text-indigo-900 italic'> profile</h1>
          </div>
          <div className='ml-96 relative shadow-2xl'>
          <svg xmlns="http://www.w3.org/2000/svg" className='absolute w-8 h-8 flex items-center pl-4 pointer-events-none fill-indigo-900' viewBox='0 0 24 24' id="search"><path d="M11 22C4.935 22 0 17.065 0 11S4.935 0 11 0s11 4.935 11 11-4.935 11-11 11zm0-20c-4.962 0-9 4.037-9 9s4.038 9 9 9 9-4.037 9-9-4.038-9-9-9z"></path><path d="M23 24a.997.997 0 0 1-.707-.293l-4.795-4.795a1 1 0 0 1 1.415-1.414l4.794 4.795A.999.999 0 0 1 23 24z"></path></svg>
            <input className='w-80 h-8 pl-14 bg-white rounded-full border border-indigo-100 text-xs placeholder-gray' placeholder='Search'></input>
          </div>
          <div className='w-36 flex items-center justify-between mr-16'>
            <svg xmlns="http://www.w3.org/2000/svg" className='mx-2 w-6 h-6 fill-indigo-900' viewBox="0 0 24 24" id="notification"><path d="M12 23a2 2 0 0 0 2-2H10A2 2 0 0 0 12 23zM4 19H20a1 1 0 0 0 .707-1.707L19 15.586V10a7.006 7.006 0 0 0-6-6.92V2a1 1 0 0 0-2 0V3.08A7.006 7.006 0 0 0 5 10v5.586L3.293 17.293A1 1 0 0 0 4 19zm2.707-2.293A1 1 0 0 0 7 16V10a5 5 0 0 1 10 0v6a1 1 0 0 0 .293.707l.293.293H6.414z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" className='mx-2 w-6 h-6 fill-indigo-900' viewBox="0 0 24 24" id="bookmark"><g data-name="Layer 2"><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z" data-name="bookmark"></path></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" className='mx-2 w-6 h-6 fill-indigo-900' viewBox="0 0 50 50" id="paste"><path d="M38 4h-8.37c-.82-2.32-3.02-4-5.63-4s-4.81 1.68-5.63 4H10C7.79 4 6 5.79 6 8v32c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM24 4c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm14 36H10V8h4v6h20V8h4v32z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
          </div>
        </div>
       <div className='h-5/6 px-16 py-16 grid grid-cols-2 divide-x-2 divide-gray-200'>
        <div>
        <h1 className='text-xl font-bold text-indigo-900'>Test Results</h1>
        <div className='flex gap-8'>
        <Card color='bg-indigo-50' height='8' title='Free Cortisol'/>
        <Card color='bg-amber-50' height='8' title='Growth hormone'/>
        <Card color='bg-orange-50' title='Insulin Antibodies'/>
        </div>
          <div className='flex mt-16'>
            <div>
              <h1 className='text-3xl font-semibold text-indigo-900'>Recipes</h1>
              <ul className='w-64 mt-16'>
                <li className='flex justify-between items-center py-1 mx-2 my-2'>
                  <div className='flex gap-4 items-center'>
                 <svg id="SvgjsSvg1039" className='w-8 h-8 fill-orange-200' viewBox='0 0 50 50' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"><defs id="SvgjsDefs1040"></defs><g id="SvgjsG1041"><svg xmlns="http://www.w3.org/2000/svg" ><defs><clipPath id="a"><path d="M0 38h38V0H0v38Z" fill="#ffcbad" class="color000 svgShape"></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)" fill="#ffcbad" class="color000 svgShape"><path fill="#ffcbad" d="M37 19c0-9.941-8.059-18-18-18S1 9.059 1 19s8.059 18 18 18 18-8.059 18-18" class="color269 svgShape"></path><path d="M27 17a8 8 0 1 0-16 0 8 8 0 0 0 16 0" fill="#ffcbad" class="color000 svgShape"></path><path fill="#ff7729" d="M27 19a8 8 0 1 0-16 0 8 8 0 0 0 16 0" class="colorbbddf5 svgShape"></path></g></svg></g></svg>
                  <div>
                    <h1 className='text-indigo-900'>Bensylpanecillin</h1>
                    <span className='text-xs text-indigo-900'>Hospital</span>
                  </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className='ml-16 w-2 h-2 ' viewBox='0 0 30 80' id="chevron-small-right"><path d="M30.304 41.712 1.823 10.704a6.3 6.3 0 0 1 0-8.868 6.17 6.17 0 0 1 8.783 0L45.332 37.27a6.31 6.31 0 0 1 0 8.874L10.607 81.577a6.155 6.155 0 0 1-8.783 0 6.3 6.3 0 0 1 0-8.868Z"></path></svg>
                </li>
                <hr className='ml-10'></hr>
                <li className='flex justify-between items-center py-1 mx-2 my-2'>
                  <div className='flex gap-4 items-center'>
                 <svg id="SvgjsSvg1039" className='w-8 h-8 fill-orange-200' viewBox='0 0 50 50' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"><defs id="SvgjsDefs1040"></defs><g id="SvgjsG1041"><svg xmlns="http://www.w3.org/2000/svg" ><defs><clipPath id="a"><path d="M0 38h38V0H0v38Z" fill="#85ff9d" class="color000 svgShape"></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)" fill="#e0ffcc" class="color000 svgShape"><path fill="#e0ffcc" d="M37 19c0-9.941-8.059-18-18-18S1 9.059 1 19s8.059 18 18 18 18-8.059 18-18" class="color269 svgShape"></path><path d="M27 17a8 8 0 1 0-16 0 8 8 0 0 0 16 0" fill="#e0ffcc" class="color000 svgShape"></path><path fill="#85ff33" d="M27 19a8 8 0 1 0-16 0 8 8 0 0 0 16 0" class="colorbbddf5 svgShape"></path></g></svg></g></svg>
                  <div>
                    <h1 className='text-indigo-900'>Spalgonesin</h1>
                    <span className='text-xs text-indigo-900'>Drug Store</span>
                  </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-2 h-2 ' viewBox='0 0 30 80' id="chevron-small-right"><path d="M30.304 41.712 1.823 10.704a6.3 6.3 0 0 1 0-8.868 6.17 6.17 0 0 1 8.783 0L45.332 37.27a6.31 6.31 0 0 1 0 8.874L10.607 81.577a6.155 6.155 0 0 1-8.783 0 6.3 6.3 0 0 1 0-8.868Z"></path></svg>
                </li>
                <hr className='ml-10'></hr>
                <li className='flex justify-between items-center py-1 mx-2 my-2'>
                  <div className='flex gap-4 items-center'>
                 <svg id="SvgjsSvg1039" className='w-8 h-8 fill-orange-200' viewBox='0 0 50 50' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"><defs id="SvgjsDefs1040"></defs><g id="SvgjsG1041"><svg xmlns="http://www.w3.org/2000/svg" ><defs><clipPath id="a"><path d="M0 38h38V0H0v38Z" fill="#ffcbad" class="color000 svgShape"></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)" fill="#e1c7ff" class="color000 svgShape"><path fill="#e1c7ff" d="M37 19c0-9.941-8.059-18-18-18S1 9.059 1 19s8.059 18 18 18 18-8.059 18-18" class="color269 svgShape"></path><path d="M27 17a8 8 0 1 0-16 0 8 8 0 0 0 16 0" fill="#e1c7ff" class="color000 svgShape"></path><path fill="#a85cff" d="M27 19a8 8 0 1 0-16 0 8 8 0 0 0 16 0" class="colorbbddf5 svgShape"></path></g></svg></g></svg>
                  <div>
                    <h1 className='text-indigo-900'>Ibubromax</h1>
                    <span className='text-xs text-indigo-900'>Hospital</span>
                  </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className='ml-24 w-2 h-2 ' viewBox='0 0 30 80' id="chevron-small-right"><path d="M30.304 41.712 1.823 10.704a6.3 6.3 0 0 1 0-8.868 6.17 6.17 0 0 1 8.783 0L45.332 37.27a6.31 6.31 0 0 1 0 8.874L10.607 81.577a6.155 6.155 0 0 1-8.783 0 6.3 6.3 0 0 1 0-8.868Z"></path></svg>
                </li>
                <hr className='ml-10'></hr>
                <li className='flex justify-between items-center py-1 mx-2 my-2'>
                  <div className='flex gap-4 items-center'>
                 <svg id="SvgjsSvg1039" className='w-8 h-8 fill-orange-200' viewBox='0 0 50 50' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"><defs id="SvgjsDefs1040"></defs><g id="SvgjsG1041"><svg xmlns="http://www.w3.org/2000/svg" ><defs><clipPath id="a"><path d="M0 38h38V0H0v38Z" fill="#ffcbad" class="color000 svgShape"></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)" fill="#fffcb3" class="color000 svgShape"><path fill="#fffcb3" d="M37 19c0-9.941-8.059-18-18-18S1 9.059 1 19s8.059 18 18 18 18-8.059 18-18" class="color269 svgShape"></path><path d="M27 17a8 8 0 1 0-16 0 8 8 0 0 0 16 0" fill="#fffcb3" class="color000 svgShape"></path><path fill="#fff157" d="M27 19a8 8 0 1 0-16 0 8 8 0 0 0 16 0" class="colorbbddf5 svgShape"></path></g></svg></g></svg>
                  <div>
                    <h1 className='text-indigo-900'>Nerofan</h1>
                    <span className='text-xs text-indigo-900'>Hospital</span>
                  </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className='ml-28 w-2 h-2 ' viewBox='0 0 30 80' id="chevron-small-right"><path d="M30.304 41.712 1.823 10.704a6.3 6.3 0 0 1 0-8.868 6.17 6.17 0 0 1 8.783 0L45.332 37.27a6.31 6.31 0 0 1 0 8.874L10.607 81.577a6.155 6.155 0 0 1-8.783 0 6.3 6.3 0 0 1 0-8.868Z"></path></svg>
                </li>
                <hr className='ml-10'></hr>
              </ul>
            </div>
            <div>
          <img src='./recipe.png' className='ml-10 w-68 h-96'/>
           </div>
          </div>
        </div>
        <div>
          <div className='mx-12 flex gap-4'>
            <div>
              <div className='flex flex-col justify-center w-40 mb-4  h-32 rounded-xl border border-indigo-900 text-indigo-900 shadow-md shadow-indigo-200'>
                <h1 className='ml-6 '>Thyroglobulin</h1>
                <h1 className='ml-6 mt-2 font-bold text-xl italic'>12/12</h1>
              </div>
              <div className='flex flex-col justify-center w-40 h-24 rounded-xl border border-indigo-900 text-indigo-900 shadow-md shadow-indigo-200'>
                <h1 className='ml-6 '>Phosphorus</h1>
                <h1 className='ml-6 mt-2 font-bold text-xl italic'>34/183</h1>
              </div>
            </div>
            <div>
            <div className='flex flex-col justify-center w-40 mb-4 h-20 rounded-xl bg-indigo-900 text-white shadow-md shadow-indigo-200'>
                <h1 className='ml-6 '>Calcitonin</h1>
                <h1 className='ml-6 mt-2 font-bold text-xl italic'>32/183</h1>
            </div>
            <div className='flex flex-col justify-center w-40 h-36 rounded-xl border border-indigo-900 text-indigo-900 shadow-md shadow-indigo-200'>
                <h1 className='ml-6 '>Inhibin B</h1>
                <h1 className='ml-6 mt-2 font-bold text-xl italic'>140/183</h1>
            </div>
            </div>
            <div>
            <div className='flex flex-col justify-center w-40 h-36 rounded-xl border border-indigo-900 text-indigo-900 shadow-md shadow-indigo-200'>
                <h1 className='ml-6 '>Prolaktin</h1>
                <h1 className='ml-6 mt-2 font-bold text-xl italic'>22/28</h1>
            </div>
            </div>
          </div>
          <div>
            <div className='flex justify-between px-10 mt-16'>
              <h1 className='text-2xl font-bold text-indigo-900'>Test statistics</h1>
              <div className='w-24 mx-10 px-3 flex justify-between items-center rounded-full bg-sky-100'>
                <span>Month</span>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-2 h-2 mx-2 rotate-90' viewBox='0 0 30 80' id="chevron-small-right"><path d="M30.304 41.712 1.823 10.704a6.3 6.3 0 0 1 0-8.868 6.17 6.17 0 0 1 8.783 0L45.332 37.27a6.31 6.31 0 0 1 0 8.874L10.607 81.577a6.155 6.155 0 0 1-8.783 0 6.3 6.3 0 0 1 0-8.868Z"></path></svg>
              </div>
            </div>
            <div className='mx-10 mt-10 w-128 h-64'>
              <Chartcomp/>
            </div>
            <div className='mt-8 px-6 mx-16 flex justify-between'>
              <button className='w-48 h-10 rounded-xl border border-indigo-900 text-indigo-900'>Test Again</button>
              <button className='w-48 h-10 rounded-xl bg-orange-400 text-white'> Consultation</button>
            </div>
          </div>
        </div>
        <div>
        </div> 

        </div>

      </div>

    </div>
  )
}

export default App
