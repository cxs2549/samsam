import React from "react"
import { Gloock } from "next/font/google"
const gloock = Gloock({ subsets: ["latin"], weight: "400" })
const Hero = () => {
  return (
    <div className="mb-8">
      <div class="container p-4">
        <div
          id="title"
          style={{ backgroundImage: 'url("./assets/herobg.png")' }}
        >
          <h1 className="leading-[.8] font-extrabold">Healthy Living</h1>
        </div>
        <div className="mt-2 text-neutral-800 dark:text-neutral-100 flex items-center justify-between">
          <p className={gloock.className}>with Samantha Sambilé</p>
        </div>
      </div>
      <img src="./assets/sam.png" alt="" />
    </div>
  )
}

export default Hero
