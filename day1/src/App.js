import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='flex min-h-screen'>
      <div className='basis-1/2 bg-gradient-to-tr from-violet-300 via-sky-200 to-purple-300'>
        <div className='flex justify-center items-center mx-20 my-40 py-20 px-20 bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-100 shadow-2xl'> 
          <div className='grid grid-rows-2 font-poppins font-medium'>
            <h1 className='text-white text-5xl' >Digital <br/>platform <br/>for distance</h1>
            <h1 className='text-black text-5xl' >learning</h1>
            <p className='text-white'>You will never know everything.<br/>But you will know more</p>
          </div>
        </div>
      </div>
      <div className='basis-1/2 ml-10'>
        <div className='grid grid-rows-1 justify-start mx-20 my-20'>
          <h6 className='font-bold text-3xl bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent'>CONNECT</h6>
          <h1 className='font-semibold text-3xl mt-10'>Hey, hello 👋</h1>
          <p className='text-sm font-thin mt-2'>Enter the information to register.</p>
          <div className=''>
          <div className='flex mt-8'>
            <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-black">First Name</label>
              <input type="text" id="first_name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="John" required></input>
            </div>
            <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-black">Last Name</label>
              <input type="text" id="last_name" className=" mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Doe" required></input>
            </div>
            </div>
            <div>
            <label for="email" class="block mt-4 mb-2 text-sm font-medium text-black">Email</label>
              <input type="email" id="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="johndoe@gmail.com" required></input>
            </div>
            <div>
            <label for="passward" class="block mt-4 mb-2 text-sm font-medium text-black">Password</label>
              <input type="password" id="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="**********" required></input>
            </div>
            <div class="flex justify-between mt-2">
              <div>
              <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-100 border-black focus:ring-blue-500"></input>
              <label for="checked-checkbox" class="ml-2 text-sm font-medium text-black">Remember Me</label>
              </div>
              <a href="#" class="text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent hover:underline ">Generate Password!</a>
            </div>
            <button type="button" className='w-full mt-4 rounded-md px-3 py-2 bg-gradient-to-r from-purple-500 to-blue-400 text-white text-base'>Sign Up</button>
            <div class="mt-6 inline-flex items-center justify-center w-full">
              <hr class="w-80 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <span class="absolute px-3 font-medium text-gray-900 bg-white">or</span>
            </div>
            <button type="button" className='flex justify-center w-full mt-6 rounded-md px-4 py-2 border shadow-sm border-slate '>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
            <span className='mx-6'>Sign Up with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
