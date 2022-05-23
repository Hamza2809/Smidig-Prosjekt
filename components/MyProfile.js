import AppLayout from 'components/AppLayout';
import {useState, ReactComponentElement} from "react";

export default function MyProfile() {
  return (
  <div className="">
    <div className="max-w-sm h-auto mx-auto my-20 rounded-md overflow-hidden shadow-lg">
      <img className="object-cover rounded-full h-36 w-36 mx-auto m-1 p-1 border-4 border-purple-600"
           src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
           alt="Human Picture by Ike louie Natividad"/>




      <div className="px-6 py-4">
        <div className="flex flex-col">
          <div className="font-bold text-xl text-center text-slate-900 hover:cursor-pointer">Mikasa Ackerman
          </div>
          <p className="text-slate-900 text-sm text-center">Frontend og Mobilutvikling</p>
        </div>

      </div>

      <div>
        <h4 className="text-sm text-center my-2 font-semibold"> Ser etter noen som ønsker å jobbe 1-2 dager i uka, først og fremst med programmering.</h4>
        <p className="text-xs mx-6 text-justify"></p>
        <div className="flex flex-row justify-center font-semibold mx-auto my-4">

          <div
              className="my-auto text-white bg-violet-400 hover:bg-violet-400 hover:cursor-pointer rounded-3xl py-2 px-4 mx-2">Fiskepinner12@hotmail.com
          </div>
        </div>
      </div>
      <div className="bg-violet-400 text-white mt-5 px-6 pt-4 pb-2 flex flex-row justify-center">
        <div className="flex flex-row mx-1 hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" width="32" height="32" fill="currentColor"
               className="bi bi-facebook" viewBox="0 0 16 16">
            <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
          <h5 className="my-auto text-sm">Facebook</h5>
        </div>
        <div className="flex flex-row mx-1 hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
               className="bi bi-discord"
               viewBox="0 0 16 16">
            <path
                d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
          </svg>
          <h5 className="my-auto text-sm">Discord</h5>
        </div>
      </div>
    </div>
  </div>
  )

  }












