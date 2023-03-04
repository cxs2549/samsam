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
    <div className="pb-8 gap-2 z-0 dark:border-neutral-700">
      <img src="./assets/flowers.jpg" alt="" />

    </div>
  )
}

export default Hero
