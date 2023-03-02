import React from "react"
import { Dancing_Script } from "next/font/google"
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" })
const Hero = () => {
  return (
    <div className="mb-8 bg-white dark:bg-black z-20 overflow-hidden px-4">
      <img src="./assets/sam.png" alt="" className="rounded-t" />
      <div class="container px-4 pt-8 bg-pink-50 dark:bg-neutral-800 rounded-b">
        <div id="title">
          <div className="h-[100px] dark:text-white">
            <h1 className={`${dancingScript.className}`}>Professional Organizer</h1>
            
           
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Hero
