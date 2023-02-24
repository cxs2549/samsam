/* eslint-disable @next/next/no-img-element */
import React from "react"
import { Gloock } from "next/font/google"
const gloock = Gloock({ subsets: ["latin"], weight: "400" })

const Services = () => {
  return (
    <div>
      <div className="mb-8">
        <div className="pb-8 overflow-hidden">
          <div className="relative px-4 py-12 text-center">
            <div className="absolute h-[1px] top-0 left-4 bg-black dark:bg-white w-1/2"></div>
            <div className="scale-150">
              <h3 className={gloock.className}>Home & Office Organization</h3>
            </div>
            <div className="absolute h-[1px] bottom-0 right-4 bg-black dark:bg-white w-4/12"></div>
          </div>
          <div></div>
        </div>
        <div className="relative">
          <img src="./assets/slide1.jpg" alt="" />
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute bottom-6 flex items-end justify-center gap-2 h-full w-full">
            <button className="text-white font-semibold border rounded-full h-10 px-5">
              Learn more
            </button>
            <button className="bg-blue-400 rounded-full h-10 px-5 font-semibold text-white">
              Pricing &rarr;
            </button>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <div className="pb-8 overflow-hidden">
          <div className="relative px-4 py-12 text-center">
            <div className="absolute h-[1px] top-0 left-4 bg-black dark:bg-white w-1/2"></div>
            <div className="scale-150">
              <h3 className={gloock.className}>Personal Growth</h3>
            </div>
            <div className="absolute h-[1px] bottom-0 right-4 bg-black dark:bg-white w-4/12"></div>
          </div>
          <div></div>
        </div>
        <div className="relative">
          <img src="./assets/growth.jpg" alt="" />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-6 flex items-end grid-cols-2 h-full w-full justify-center gap-2">
            <button className="text-white font-semibold border rounded-full h-10 px-5">
              Learn more
            </button>
            <button className="bg-blue-400 rounded-full h-10 px-5 font-semibold text-white">
              Pricing &rarr;
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="pb-8 overflow-hidden">
          <div className="relative px-4 py-12 text-center">
            <div className="absolute h-[1px] top-0 left-4 bg-black dark:bg-white w-1/2"></div>
            <div className="scale-150">
              <h3 className={gloock.className}>Recipes</h3>
            </div>
            <div className="absolute h-[1px] bottom-0 right-4 bg-black dark:bg-white w-4/12"></div>
          </div>
          <div></div>
        </div>
        <div className="relative">
          <img src="./assets/recipes.jpg" alt="" />
          <div className="absolute inset-0 bg-black/20"></div>
          
        </div>
      </div>
    </div>
  )
}

export default Services
