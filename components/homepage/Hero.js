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
    <div className="gap-2 z-0 dark:border-neutral-700 relative overflow-hidden">
      <img
        src="./assets/hero.jpg"
        alt=""
        className="max-h-[500px] w-full object-cover object-bottom"
      />
      <div
        className="absolute md:top-2 top-0 left-0 w-8/12 p-4"
        id="heroText"
      >
        <p className={dancingScript.className}>
          An organized space offers the liberating
          potential for healing, serenity & rejuvenation
        </p>
        <button className="rounded-md bg-brand px-4 h-10 font-medium text-neutral-600 shadow mt-4 text-sm xl:text-base">
          Work with me
        </button>
      </div>
    </div>
  )
}

export default Hero
