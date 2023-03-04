/* eslint-disable @next/next/no-img-element */
import React from "react"
import { SiTiktok } from "react-icons/si"
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai"
import { BsPinterest } from "react-icons/bs"
import { Dancing_Script, Cormorant } from "next/font/google"
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" })
const cormorant = Cormorant({ subsets: ["latin"], weight: "400" })
const Hero = () => {
  return (
    <div className="pb-8 gap-2 z-0 dark:border-neutral-700 relative">
      <img src="./assets/hero.jpg" alt="" />
      <div className="absolute top-0 left-0 w-7/12 p-4" id="heroText">
        <p className={dancingScript.className}>
          An organized space allows for freedom, healing & tranquility
        </p>
        <button className="rounded-full bg-brand px-4 h-10 font-semibold text-neutral-600 shadow mt-3 text-sm">Work with me</button>
      </div>
    </div>
  )
}

export default Hero
