/* eslint-disable @next/next/no-img-element */
import React from "react"
import { Dancing_Script, Cormorant } from "next/font/google"
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" })
const cormorant = Cormorant({ subsets: ["latin"], weight: "400" })
const Hero = () => {
  return (
    <div className="flex flex-wrap px-4 py-8 gap-2 sticky top-0 z-0 border-b">
      <div className="flex-1 flex gap-2 ">
        <div className="flex flex-col gap-2 justify-end">
          <div className="flex flex-col">
            <img
              src="./assets/sam.png"
              alt=""
              className="rounded-full w-24 h-24 object-cover"
            />
            <div className="">
              <h1 className={dancingScript.className}>
                Professional Organizer
              </h1>
              <p className={cormorant.className}>Los Angeles, CA</p>
            </div>
          </div>
        </div>
        <div className="h-full flex-1">
          <img
            src="./assets/pinkcloset.jpg"
            className="h-[200px] sm:h-[300px] w-full object-cover object-top rounded"
            alt=""
          />
        </div>
      </div>

      <div className="flex-1 hidden sm:block rounded overflow-hidden h-[200px] sm:h-[300px]">
        <div>
          <img
            src="./assets/closet.png"
            className="h-[60px] w-full object-cover object-top rounded"
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 gap-2 h-full mt-2 rounded overflow-hidden">
          <img src="./assets/vanity.jpg" alt="" className="rounded h-full w-full object-cover" />
          <img
            src="./assets/anothercloset.jpg"
            className="h-full w-full object-cover rounded"
            alt=""
          />
        </div>
       
      </div>
      
    </div>
  )
}

export default Hero
