import './App.css';

function App() {
  return (
    <div>
    <div className='mt-10 mx-20'>
    <div className='flex justify-between items-center'>
      <h1 className='itfont-poppins text-4xl font-bold'>CipherAI</h1>
      <div className='flex items-center'>
      <button id="products" data-dropdown-toggle="productsnavbar" className='flex items-center'>Products <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            <div id="productsnavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <ul class="py-2 text-sm text-gray-700" aria-labelledby="productbutton">
                  <li>
                    <a href="#" class="block px-4 py-2 ">Human Resource Management</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 ">Artificial Inteligence</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 ">Blockchain</a>
                  </li>
                </ul>
            </div>
      <a href='#' className='mx-4'>Solutions</a>
      <a href='#' className='mx-4'>Resources</a>
      <a href='#' className='mx-4'>Enterprise</a>
      <a href='#' className='mx-4'>Pricing</a>
      </div>
      <button className='w-40 h-14 border rounded-full bg-black text-white'>Sign In</button>
    </div>
    <hr class="w-full h-px mt-6 bg-gray-400 border-0 "></hr>
    </div>


    <div className='grid grid-rows justify-center items-center mt-20'>
      <h1 className='text-8xl text-center mb-2 font-bold' >Transform with <br/>SaaS Solution .....</h1>
      <span className='mt-4 mb-2 text-center text-2xl text-gray-500'>It's a fast and easy way to manage your business, with the <br/> help of systems designed by us.</span>
      <div className='mt-4 flex justify-center'>
      <button className='w-64 h-16 border rounded-full bg-black text-white text-xl'>Check Our Tools</button>
      </div>
    </div>
    <div className='flex mt-16'>
      <div className='basis-3/5 ml-20 mr-2 grid grid-rows'>
        <div className='flex w-full h-80 mb-4 pl-16 border bg-[#dbebff] rounded-lg'>
          <div className='mt-20'>
          <h1 className='text-4xl mb-2 font-poppins font-[1100]'>Automated<br/>reports</h1>
          <span className='text-gray-600 font-poppins font-light'>You can generate an automated report for all the things related to your business.</span>
          </div>
          <img src='http://localhost:3000/images/report.png'className='w-96 h-80 ml-28'/>
        </div>
        <div className='flex w-full h-72 mt-4 pl-16 border bg-[#f6e9d0] rounded-lg'>
        <div className='mt-10'>
        <h1 className='text-4xl mb-2 font-poppins font-[1100]'>Employee<br/>Performance</h1>
          <span className='text-gray-600 font-poppins font-light'>Track vour site performance overtime. we build long-term professional relationships with our customers that you can rely on & trust.</span>
          </div>
        <img src='http://localhost:3000/images/employee.png'className=''/>
        </div>
      </div>
      <div className='basis-2/5 grid grid-rows items-end mr-20 ml-2 w-full px-10 py-10 h-100 border bg-[#f7e5f8] rounded-lg '>
      <img src='http://localhost:3000/images/task.png'className=''/>
      <h1 className='text-4xl font-poppins font-[1100]'>Task<br/>Optimization</h1>
      <span className='text-gray-600 font-poppins font-light'>Optimize your task with the help <br/> of tools specificly designed for<br/>your industry.</span>
      </div>
    </div>


    <div className='flex mx-24 my-16 justify-between'>
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className='w-20 h-20' viewBox="0 0 24 24" id="slack"><path d="M2,14.67a2,2,0,1,0,4,0v-2H4A2,2,0,0,0,2,14.67Zm12.64-3.34a2,2,0,0,0,2-2V4a2,2,0,1,0-4,0V9.33A2,2,0,0,0,14.66,11.33Zm7.32-2a2,2,0,1,0-4,0v2h2A2,2,0,0,0,22,9.33ZM9.34,12.67a2,2,0,0,0-2,2V20a2,2,0,1,0,4,0V14.67A2,2,0,0,0,9.34,12.67ZM14.66,18h-2v2a2,2,0,1,0,2-2ZM20,12.67H14.66a2,2,0,0,0,0,4H20a2,2,0,0,0,0-4ZM9.34,7.33H4a2,2,0,1,0,0,4H9.34a2,2,0,0,0,0-4ZM9.34,2a2,2,0,0,0,0,4h2V4A2,2,0,0,0,9.34,2Z"></path></svg>
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className='w-20 h-20' viewBox="0 0 24 24" id="twitter"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path></svg>
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 100 100" className='w-20 h-20' viewBox="0 0 100 100" id="discord"><path d="M85.778,24.561c-11.641-8.71-22.793-8.466-22.793-8.466s-1.14,1.302-1.14,1.302c13.839,4.152,20.27,10.257,20.27,10.257c-19.799-10.901-45.019-10.823-65.613,0c0,0,6.675-6.431,21.328-10.583c0,0-0.814-0.977-0.814-0.977s-11.071-0.244-22.793,8.466c0,0-11.722,21.084-11.722,47.052c0,0,6.838,11.722,24.829,12.292c0,0,3.012-3.582,5.454-6.675c-10.339-3.093-14.246-9.524-14.246-9.524c6.495,4.064,13.063,6.608,21.247,8.222c13.316,2.741,29.879-0.077,42.249-8.222c0,0-4.07,6.594-14.734,9.606c2.442,3.012,5.373,6.512,5.373,6.512C90.662,83.254,97.5,71.532,97.5,71.613C97.5,45.645,85.778,24.561,85.778,24.561z M34.818,64.043c-4.559,0-8.303-3.989-8.303-8.955c0.333-11.892,16.357-11.855,16.607,0C43.121,60.054,39.458,64.043,34.818,64.043z M64.531,64.043c-4.559,0-8.303-3.989-8.303-8.955c0.366-11.869,16.19-11.874,16.607,0C72.834,60.054,69.171,64.043,64.531,64.043z"></path></svg>
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className='w-20 h-20' viewBox="0 0 24 24" id="wordpress"><path d="M12,2a10.00009,10.00009,0,1,0,10,9.99976A10.01117,10.01117,0,0,0,12,2ZM3.00928,11.99976a8.95547,8.95547,0,0,1,.77844-3.659L8.07654,20.09131A8.99123,8.99123,0,0,1,3.00928,11.99976ZM12,20.99121a8.98726,8.98726,0,0,1-2.54-.36633l2.69788-7.83869,2.7633,7.57135a.84386.84386,0,0,0,.06446.12391A8.97138,8.97138,0,0,1,12,20.99121ZM13.239,7.78436c.54126-.02844,1.02906-.08539,1.02906-.08539a.37165.37165,0,0,0-.05738-.741s-1.4563.11432-2.39648.11432c-.8833,0-2.3678-.11432-2.3678-.11432a.37165.37165,0,0,0-.057.741s.4585.05695.943.08539l1.40075,3.838-1.968,5.90087L6.49133,7.78436C7.033,7.75592,7.52026,7.699,7.52026,7.699a.37166.37166,0,0,0-.05749-.741s-1.45593.11432-2.39612.11432c-.1687,0-.36768-.00415-.57861-.01093A8.98815,8.98815,0,0,1,18.07117,5.36957c-.0387-.00238-.07654-.0072-.11634-.0072A1.55669,1.55669,0,0,0,16.445,6.958a4.21016,4.21016,0,0,0,.88317,2.1087,4.73577,4.73577,0,0,1,.74122,2.47955,10.88314,10.88314,0,0,1-.68409,2.9065l-.897,2.99634ZM16.52,19.771l2.74609-7.9397A8.489,8.489,0,0,0,19.94983,8.611a6.9105,6.9105,0,0,0-.06043-.92456A8.99224,8.99224,0,0,1,16.52,19.771Z"></path></svg>
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className='w-20 h-20' viewBox="0 0 24 24" id="behance"><path d="M20.07,6.35H15V7.76h5.09ZM19,16.05a2.23,2.23,0,0,1-1.3.37A2.23,2.23,0,0,1,16,15.88a2.49,2.49,0,0,1-.62-1.76H22a6.47,6.47,0,0,0-.17-2,5.08,5.08,0,0,0-.8-1.73,4.17,4.17,0,0,0-1.42-1.21,4.37,4.37,0,0,0-2-.45,4.88,4.88,0,0,0-1.9.37,4.51,4.51,0,0,0-1.47,1,4.4,4.4,0,0,0-.95,1.52,5.4,5.4,0,0,0-.33,1.91,5.52,5.52,0,0,0,.32,1.94A4.46,4.46,0,0,0,14.16,17a4,4,0,0,0,1.46,1,5.2,5.2,0,0,0,1.94.34,4.77,4.77,0,0,0,2.64-.7,4.21,4.21,0,0,0,1.63-2.35H19.62A1.54,1.54,0,0,1,19,16.05Zm-3.43-4.12a1.87,1.87,0,0,1,1-1.14,2.28,2.28,0,0,1,1-.2,1.73,1.73,0,0,1,1.36.49,2.91,2.91,0,0,1,.63,1.45H15.41A3,3,0,0,1,15.52,11.93Zm-5.29-.48a3.06,3.06,0,0,0,1.28-1,2.72,2.72,0,0,0,.43-1.58,3.28,3.28,0,0,0-.29-1.48,2.4,2.4,0,0,0-.82-1,3.24,3.24,0,0,0-1.27-.52,7.54,7.54,0,0,0-1.64-.16H2V18.29H8.1a6.55,6.55,0,0,0,1.65-.21,4.55,4.55,0,0,0,1.43-.65,3.13,3.13,0,0,0,1-1.14,3.41,3.41,0,0,0,.37-1.65,3.47,3.47,0,0,0-.57-2A3,3,0,0,0,10.23,11.45ZM4.77,7.86H7.36a4.17,4.17,0,0,1,.71.06,1.64,1.64,0,0,1,.61.22,1.05,1.05,0,0,1,.42.44,1.42,1.42,0,0,1,.16.72,1.36,1.36,0,0,1-.47,1.15,2,2,0,0,1-1.22.35H4.77ZM9.61,15.3a1.28,1.28,0,0,1-.45.5,2,2,0,0,1-.65.26,3.33,3.33,0,0,1-.78.08h-3V12.69h3a2.4,2.4,0,0,1,1.45.41,1.65,1.65,0,0,1,.54,1.39A1.77,1.77,0,0,1,9.61,15.3Z"></path></svg>
    </div>


    <div className='grid grid-rows mt-10 bg-violet-50'>
    <div className='relative mx-52 mt-24 h-20'>
      <div className='block w-auto h-auto flex justify-center bg-white border rounded-lg'>
      <img src='http://localhost:3000/images/hrms.png'className='mx-2 my-2 '/>
      </div>
      </div>
      <div className='h-128 max-w-screen mx-20 my-10 bg-slate-900 border rounded-md'>
      </div>
    <div className='mx-24  flex justify-between items-center'>
      <h1 className='text-5xl font-poppins'>Integrated with <br/>the tools you love</h1>
      <button className='w-40 h-14 border rounded-full bg-black text-white'>Learn more</button>
    </div>
      <div className='mx-20 my-10 flex justify-between max-width-screen h-64'>
        <div className='w-64 px-10 py-10 border border-gray-200 rounded-xl shadow-sm bg-white'>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-16 h-16' preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
          <h1 className='mt-12 text-base font-poppins'>Google</h1>
          <span className='mt-2 text-xs font-light'>The most important data for your business,all in one view.</span>
        </div>
        <div className='grid grid-rows w-64'>
          <div className='h-32 flex mb-1 px-4 py-4 border border-gray-200 rounded-xl shadow-sm bg-white'>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" id="whatsapp"><path fill="#4CAF50" d="M8.002 0h-.004C3.587 0 0 3.588 0 8a7.94 7.94 0 0 0 1.523 4.689l-.997 2.972 3.075-.983A7.93 7.93 0 0 0 8.002 16C12.413 16 16 12.411 16 8s-3.587-8-7.998-8z"></path><path fill="#FAFAFA" d="M12.657 11.297c-.193.545-.959.997-1.57 1.129-.418.089-.964.16-2.802-.602-2.351-.974-3.865-3.363-3.983-3.518-.113-.155-.95-1.265-.95-2.413s.583-1.707.818-1.947c.193-.197.512-.287.818-.287.099 0 .188.005.268.009.235.01.353.024.508.395.193.465.663 1.613.719 1.731.057.118.114.278.034.433-.075.16-.141.231-.259.367-.118.136-.23.24-.348.386-.108.127-.23.263-.094.498.136.23.606.997 1.298 1.613.893.795 1.617 1.049 1.876 1.157.193.08.423.061.564-.089.179-.193.4-.513.625-.828.16-.226.362-.254.574-.174.216.075 1.359.64 1.594.757.235.118.39.174.447.273.056.099.056.564-.137 1.11z"></path></svg>
          <div className='grid grid-rows ml-4'>
          <h1 className='text-base font-poppins'>Whatsapp</h1>
          <span className='mt-1 text-xs font-light'>The most important data for your business,all in one view.</span>
          </div>
          </div>
          <div className='h-32 flex mb-1 px-4 py-4 border border-gray-200 rounded-xl shadow-sm bg-white'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="twitter"><path fill="#03A9F4" d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"></path></svg>
          <div className='grid grid-rows ml-4'>
          <h1 className='text-base font-poppins'>Twitter</h1>
          <span className='mt-1 text-xs font-light'>The most important data for your business,all in one view.</span>
          </div>
          </div>
        </div>
        <div className='w-64 px-10 py-10 border border-gray-200 rounded-xl shadow-sm bg-white'>
        <svg xmlns="http://www.w3.org/2000/svg" width="59.734" height="59.852" shape-rendering="geometricPrecision" viewBox="0 0 59.734 59.852" id="slack-logo"><g transform="translate(0 -.148)"><path fill="#36c5f0" d="m 21.902,0.148 c -3.299,0 -5.973,2.68 -5.973,5.985 a 5.979,5.979 0 0 0 5.973,5.985 h 5.974 V 6.133 A 5.98,5.98 0 0 0 21.902,0.148 m 0,15.96 H 5.973 C 2.674,16.108 0,18.788 0,22.094 c 0,3.305 2.674,5.985 5.973,5.985 h 15.93 c 3.298,0 5.973,-2.68 5.973,-5.985 0,-3.306 -2.675,-5.986 -5.974,-5.986"></path><path fill="#2eb67d" d="m 59.734,22.094 c 0,-3.306 -2.675,-5.986 -5.974,-5.986 -3.299,0 -5.973,2.68 -5.973,5.986 v 5.985 h 5.973 a 5.98,5.98 0 0 0 5.974,-5.985 m -15.929,0 V 6.133 A 5.98,5.98 0 0 0 37.831,0.148 c -3.299,0 -5.973,2.68 -5.973,5.985 v 15.96 c 0,3.307 2.674,5.987 5.973,5.987 a 5.98,5.98 0 0 0 5.974,-5.985"></path><path fill="#ecb22e" d="m 37.831,60 a 5.98,5.98 0 0 0 5.974,-5.985 5.98,5.98 0 0 0 -5.974,-5.985 h -5.973 v 5.985 c 0,3.305 2.674,5.985 5.973,5.985 m 0,-15.96 h 15.93 c 3.298,0 5.973,-2.68 5.973,-5.986 A 5.98,5.98 0 0 0 53.76,32.069 H 37.831 c -3.299,0 -5.973,2.68 -5.973,5.985 a 5.979,5.979 0 0 0 5.973,5.985"></path><path fill="#e01e5a" d="m 0,38.054 a 5.979,5.979 0 0 0 5.973,5.985 5.98,5.98 0 0 0 5.974,-5.985 V 32.069 H 5.973 C 2.674,32.069 0,34.749 0,38.054 m 15.929,0 v 15.96 c 0,3.306 2.674,5.986 5.973,5.986 a 5.98,5.98 0 0 0 5.974,-5.985 V 38.054 a 5.979,5.979 0 0 0 -5.974,-5.985 c -3.299,0 -5.973,2.68 -5.973,5.985"></path></g></svg>
          <h1 className='mt-12 text-base font-poppins'>Slack</h1>
          <span className='mt-2 text-xs font-light'>The most important data for your business,all in one view.</span>
        </div>
        <div className='grid grid-rows w-64'>
        <div className='h-32 flex mb-1 px-4 py-4 border border-gray-200 rounded-xl shadow-sm bg-white'>
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 100 100" viewBox="0 0 100 100" id="discord"><path fill="#6665d2" d="M85.22,24.958c-11.459-8.575-22.438-8.334-22.438-8.334l-1.122,1.282c13.623,4.087,19.954,10.097,19.954,10.097c-19.491-10.731-44.317-10.654-64.59,0c0,0,6.571-6.331,20.996-10.418l-0.801-0.962c0,0-10.899-0.24-22.438,8.334c0,0-11.54,20.755-11.54,46.319c0,0,6.732,11.54,24.442,12.101c0,0,2.965-3.526,5.369-6.571c-10.177-3.045-14.024-9.376-14.024-9.376c6.394,4.001,12.859,6.505,20.916,8.094c13.108,2.698,29.413-0.076,41.591-8.094c0,0-4.007,6.491-14.505,9.456c2.404,2.965,5.289,6.411,5.289,6.411c17.71-0.561,24.441-12.101,24.441-12.02C96.759,45.713,85.22,24.958,85.22,24.958z M35.055,63.824c-4.488,0-8.174-3.927-8.174-8.815c0.328-11.707,16.102-11.671,16.348,0C43.229,59.897,39.622,63.824,35.055,63.824z M64.304,63.824c-4.488,0-8.174-3.927-8.174-8.815c0.36-11.684,15.937-11.689,16.348,0C72.478,59.897,68.872,63.824,64.304,63.824z"></path></svg>
          <div className='grid grid-rows ml-4'>
          <h1 className='text-base font-poppins'>Discord</h1>
          <span className='mt-1 text-xs font-light'>The most important data for your business,all in one view.</span>
          </div>
          </div>
          <div className='h-32 flex mb-1 px-4 py-4 border border-gray-200 rounded-xl shadow-sm bg-white'>
          <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" id="instagram"><defs><radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse"><stop offset=".09" stop-color="#fa8f21"></stop><stop offset=".78" stop-color="#d82d7e"></stop></radialGradient><radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse"><stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop><stop offset="1" stop-color="#8c3aaa"></stop></radialGradient></defs><path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 16"></path><path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 17"></path><path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" data-name="Path 18" transform="translate(-422.637 -426.196)"></path></svg>
          <div className='grid grid-rows ml-4'>
          <h1 className='text-base font-poppins'>Instagram</h1>
          <span className='mt-1 text-xs font-light'>The most important data for your business,all in one view.</span>
          </div>
          </div>
        </div>
        <div className='w-64 px-10 py-10 border border-gray-200 rounded-xl shadow-sm bg-white'>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-16 h-16' viewBox="0 0 60 60" id="wordpress"><path fill="#21759B" d="M34 59.6C19.813 59.6 8.293 48.293 8.4 34 8.507 19.707 19.28 8.4 34 8.4c14.721 0 25.6 11.52 25.6 25.6S48.187 59.6 34 59.6zm7.573-3.947l-7.253-19.52-6.827 19.947c5.014 1.174 8.427 1.493 14.08-.427zm-17.706-1.066l-10.88-29.76c-1.494 3.2-1.813 5.867-2.027 9.173.107 8.746 5.013 16.746 12.907 20.587zM56.934 34c.106-5.653-2.453-10.133-2.667-10.773.214 4.374-.427 6.613-1.173 9.067l-7.467 21.44C55.014 48.08 56.826 39.653 57.04 34h-.106zm-23.68-.96l-3.627-9.92-2.667-.213c-1.066-.747-.427-1.92.32-1.92 4.8.32 7.466.32 12.267 0 1.174 0 1.493 1.707.106 1.92l-2.56.213 8.319 24.533 3.946-13.44c.214-5.866-1.387-6.506-3.52-10.773-1.707-3.307.107-6.507 3.414-6.613-2.668-2.56-8.107-5.76-15.254-5.867s-14.72 3.52-19.2 10.347l7.894-.213c.96.427.533 1.813 0 1.92l-2.773.213 8.32 24.96 5.015-15.147z"></path></svg>
          <h1 className='mt-12 text-base font-poppins'>Wordpress</h1>
          <span className='mt-2 text-xs font-light'>The most important data for your business,all in one view.</span>
        </div>
      </div>
    </div>
      <div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
