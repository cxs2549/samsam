import React from "react"
import { Gloock } from "next/font/google"
const gloock = Gloock({ subsets: ["latin"], weight: "400" })
const Hero = () => {
  return (
    <div>
      <img src="./assets/sam.png" alt="" />
      <div class="container p-4 bg-neutral-50" >
        <div
          id="title"
          style={{ backgroundImage: 'url("./assets/herobg.png")' }}
        >
          <h1 className="leading-[.9] font-extrabold">Healthy Living</h1>
        </div>
        <div className="mt-1 text-neutral-600 dark:text-neutral-100">
          <p className={gloock.className}>with Samantha Sambilé</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
