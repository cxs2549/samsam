/* eslint-disable @next/next/no-img-element */
import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { Cormorant } from "next/font/google"
const gloock = Cormorant({ subsets: ["latin"], weight: "500" })

const Services = () => {
  return (
    <div className="sm:grid grid-cols-2 gap-2">
      <div className="mb-8 flex-1">
        <div className="pb-8 overflow-hidden">
          <div className="relative px-4 py-12 text-center">
            <div className="absolute h-[1px] top-0 left-4 bg-neutral-200 dark:bg-neutral-600 w-1/2 sm:w-full"></div>
            <div className="scale-150">
              <h3 className={gloock.className}>Home & Office Organization</h3>
            </div>
            <div className="absolute h-[1px] bottom-0 right-4 sm:left-0 bg-neutral-200 dark:bg-neutral-600 w-4/12 sm:w-7/12"></div>
          </div>
        </div>
        <div className="relative">
          <img src="./assets/slide1.jpg" alt="" />
          <div className="absolute inset-0 bg-neutral-400/10"></div>
          <div className="absolute bottom-6 flex items-end justify-center gap-2 h-full w-full">
            <button className="text-white font-semibold border rounded-full h-10 px-5">
              Learn more
            </button>
            <button className="bg-brand rounded-full h-10 px-5 font-semibold text-white">
              Pricing &rarr;
            </button>
          </div>
        </div>
      </div>
      <div className="mb-8 flex-1">
        <div className="pb-8 overflow-hidden">
          <div className="relative px-4 py-12 text-center">
            <div className="absolute h-[1px] top-0 left-4 sm:left-0 sm:right-4 bg-neutral-200 dark:bg-neutral-600 w-1/2 sm:w-full"></div>
            <div className="scale-150">
              <h3 className={gloock.className}>Personal Growth</h3>
            </div>
            <div className="absolute h-[1px] bottom-0 right-4 bg-neutral-200 dark:bg-neutral-600 w-4/12 sm:w-7/12"></div>
          </div>
          <div></div>
        </div>
        <div className="relative">
          <img src="./assets/growth.jpg" alt="" />
          <div className="absolute inset-0 bg-neutral-400/20"></div>
          <div className="absolute bottom-6 flex items-end grid-cols-2 h-full w-full justify-center gap-2">
            <button className="text-white font-semibold border rounded-full h-10 px-5">
              Learn more
            </button>
            <button className="bg-brand rounded-full h-10 px-5 font-semibold text-white">
              Pricing &rarr;
            </button>
          </div>
        </div>
      </div>
      <div className=" flex-1">
        <div className="pb-8 overflow-hidden">
          <div className="relative px-4 py-12 text-center">
            <div className="absolute h-[1px] top-0 left-4 bg-neutral-200 dark:bg-neutral-600 w-1/2"></div>
            <div className="scale-150">
              <h3 className={gloock.className}>Recipes</h3>
            </div>
            <div className="absolute h-[1px] bottom-0 right-4 bg-neutral-200 dark:bg-neutral-600 w-4/12"></div>
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
