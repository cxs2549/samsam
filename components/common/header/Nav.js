import React from 'react'
import { Cormorant_Garamond } from "next/font/google"
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "600" })

const Nav = ({menuItems}) => {
  return (
    <div className="px-4 py-2 hidden md:block bg-[#868475]">
          <ul className="flex justify-between max-w-3xl mx-auto">
            {menuItems.map((item) => (
              <li key={item} className="capitalize text-neutral-200">
                <p className={cormorant.className}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
  )
}

export default Nav