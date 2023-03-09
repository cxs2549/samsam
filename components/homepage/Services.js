import React from "react"
import { Gloock } from "next/font/google"
const gloock = Gloock({ subsets: ["latin"], weight: "400" })

const Services = () => {
  return (
    <div className="bg-[#F0EEE2]">
      <div className="max-w-7xl mx-auto p-4 py-8">
        <div className="text-2xl uppercase text-neutral-700">
          <p className={gloock.className}>Services</p>
        </div>
        <div className="flex">
          <div>

          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Services
