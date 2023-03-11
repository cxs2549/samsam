import React from 'react'
import { Cormorant_Garamond } from "next/font/google"
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "600" })


const MobileNav = () => {
  return (
    <div className="flex justify-center bg-[#868475] items-center md:hidden">
          <ul className="flex gap-4 relative max-w-xs  py-2" id="mobileNav">
            <li className=" relative">
              <p className={cormorant.className}>home </p>
            </li>
            <li className="">
              <p className={cormorant.className}>organization</p>
            </li>
            <li className="">
              <p className={cormorant.className}>lifestyle</p>
            </li>
          </ul>
        </div>
  )
}

export default MobileNav