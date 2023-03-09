/* eslint-disable @next/next/no-img-element */
import React from "react"
import { Dancing_Script } from "next/font/google"
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" })

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="grid md:grid-cols-2 max-w-8xl mx-auto pb-8 md:pb-0">
        <div className="p-4 order-2 md:order-1 flex flex-col gap-8 justify- items-center text-center " id="heroText">
          <p className={dancingScript.className}>
            An organized space offers the liberating potential for healing,
            serenity & rejuvenation
          </p>
          <button className="bg-[#868475] rounded-md px-6 font-semibold text-neutral-200 h-12 shadow">Work with me</button>
        </div>
        <div className="max-h-[400px] overflow-hidden md:order-2">
          <img src="./assets/hero.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
