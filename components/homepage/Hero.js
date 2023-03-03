/* eslint-disable @next/next/no-img-element */
import React from "react"
import { Dancing_Script, Cormorant } from "next/font/google"
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" })
const cormorant = Cormorant({ subsets: ["latin"], weight: "400" })
const Hero = () => {
  return (
    <div className="pt-4 pb-6 px-4 flex flex-col">
     <img src="./assets/sam.png" alt="" className="rounded-full w-24 h-24 object-cover" />
      <div className="">
        <h1 className={dancingScript.className}>
          Professional Organizer
        </h1>
        <p className={cormorant.className}>Los Angeles, CA</p>
      </div>
    </div>
  )
}

export default Hero
