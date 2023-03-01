import React from "react"
import { Gloock } from "next/font/google"
const gloock = Gloock({ subsets: ["latin"], weight: "400" })
const Hero = () => {
  return (
    <div className="mb-8 relative bg-white dark:bg-black z-40">
      <div class="container p-4 pt-12">
        <div
          id="title"
          style={{ backgroundImage: 'url("./assets/herobg.png")' }}
        >
          <h1 className="leading-[.8] font-extrabold">Healthy Living</h1>
        </div>
        
      </div>
      <img src="./assets/sam.png" alt="" />
    </div>
  )
}

export default Hero
