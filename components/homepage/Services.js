/* eslint-disable @next/next/no-img-element */
import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { Cormorant } from "next/font/google"
const gloock = Cormorant({ subsets: ["latin"], weight: "500" })

const Services = () => {
  return (
    <div className="sm:grid grid-cols-2 gap-x-2 relative z-0 bg-white dark:bg-black">
      <div className=" flex-1">
        <div className="overflow-hidden bg-white dark:bg-black">
          <div className="relative px-4 pb-8 text-center z-10 bg-white dark:bg-black">
            <div className="scale-150 dark:bg-black">
              <h3 className={gloock.className}>Home & Office Organization</h3>
            </div>
            
          </div>
        </div>
        <div className="relative">
          <img src="./assets/living.jpg" alt="" />
          <div className="absolute inset-0 bg-neutral-400/10"></div>
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
      <div className="flex-1">
        <div className="overflow-hidden bg-white dark:bg-black">
          <div className="relative px-4 py-8 text-center">
            
            <div className="scale-150">
              <h3 className={gloock.className}>Personal Growth</h3>
            </div>
            
          </div>
        </div>
        <div className="relative">
          <img src="./assets/growth.jpg" alt="growth" className=" object-cover" />
          <div className="absolute inset-0 bg-neutral-400/20"></div>
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
      <div className=" flex-1 bg-white dark:bg-black w-full">
        <div className="overflow-hidden bg-white dark:bg-black">
          <div className="relative px-4 py-8 text-center">
            
            <div className="scale-150">
              <h3 className={gloock.className}>Recipes</h3>
            </div>
            
          </div>
          <div></div>
        </div>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          className=""
        >
          <img src="./assets/recipes.jpg" className="h-full" alt="" />
          <img src="./assets/bread.jpg" className="h-full" alt="" />
          <img src="./assets/cake.jpg" className="h-full" alt="" />
          <img src="./assets/green.jpg" alt="" />
        </Carousel>
      </div>
    </div>
  )
}

export default Services
