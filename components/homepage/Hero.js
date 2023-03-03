/* eslint-disable @next/next/no-img-element */
import React from "react"
import { Dancing_Script, Cormorant } from "next/font/google"
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" })
const cormorant = Cormorant({ subsets: ["latin"], weight: "400" })
const Hero = () => {
  return (
    <div className="flex flex-wrap px-4 py-8 gap-2">
      <div className=" flex flex-col flex-1">
        <img
          src="./assets/sam.png"
          alt=""
          className="rounded-full w-24 h-24 object-cover"
        />
        <div className="">
          <h1 className={dancingScript.className}>Professional Organizer</h1>
          <p className={cormorant.className}>Los Angeles, CA</p>
        </div>
      </div>

      <div className="flex-1 rounded overflow-hidden">
        <div>
          <img
            src="./assets/closet.png"
            className="h-[80px] w-full object-cover object-top rounded"
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <img src="./assets/vanity.png" alt="" className="rounded" />
          <img src="./assets/veggies.jpg" className="h-full w-full object-cover rounded" alt="" />
        </div>
      </div>
      <img
        src="./assets/closet.png"
        className="h-[120px] object-cover w-full object-bottom"
        alt=""
      />
    </div>
  )
}

export default Hero
