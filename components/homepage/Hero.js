import React from "react"
import { Dancing_Script } from "next/font/google"
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" })
const Hero = () => {
  return (
    <div className="mb-8 relative bg-white dark:bg-black z-40">
      <img src="./assets/sam.png" alt="" />
      <div class="container px-4 pt-8">
        <div id="title">
          <div className="h-[200px] dark:text-white">
            <h1 className={`${dancingScript.className}`}>Professional</h1>
            <div className="-translate-y-6">
              <h1 className={dancingScript.className}>Organizer</h1>
            </div>
            <div className="-translate-y-10">
              <h1 className={dancingScript.className}>&</h1>
            </div>
            <div className="-translate-y-14">
              <h1 className={dancingScript.className}>Life Coach</h1>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Hero
