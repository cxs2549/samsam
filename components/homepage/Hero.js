/* eslint-disable @next/next/no-img-element */
import React from "react"
import { Dancing_Script } from "next/font/google"
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" })
const Hero = () => {
  return (
    <div className="py-8 pb-6 px-4 flex flex-col">
     <img src="./assets/sam.png" alt="" className="rounded-full w-24 h-24 object-cover bg-green-200" />
      <div className="">
        <h1 className={dancingScript.className}>
          Professional Organizer
        </h1>
      </div>
    </div>
  )
}

export default Hero
