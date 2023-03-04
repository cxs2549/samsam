/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useState } from "react"
import { Rotate as Hamburger } from "hamburger-react"
import { SiTiktok } from "react-icons/si"
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai"
import { BsPinterest } from "react-icons/bs"
import Headroom from "react-headroom"
import { Cormorant } from "next/font/google"
const cormorant = Cormorant({ subsets: ["latin"], weight: "600" })

const menuItems = [
  "professional organizing",
  "personal growth",
  "lifestyle",
  "healthy living",
  "recipes",
  "resources",
]

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <Headroom>
      <header className="z-50">
        <div className="px-4 pt-4">
          <div className="flex text-black justify-end gap-4">
            <AiFillYoutube size={22} />
            <BsPinterest size={22} />
            <AiFillInstagram size={22} />
            <SiTiktok size={22} />
          </div>
        </div>
        <div className="px-4 py-2 flex items-center justify-between relative dark:bg-black z-10">
          <Link
            href={`/`}
            className="absolute left-1/2 -translate-x-1/2  overflow-hidden"
          >
            <img
              src="./assets/logo.png"
              alt="ss logo"
              className="max-w-[150px] transition-all duration-150 sm:max-w-[180px]"
            />
          </Link>
          <Hamburger
            rounded={true}
            toggled={isOpen}
            toggle={setOpen}
            size={24}
            color="#000"
          />
          <Menu open={isOpen} />
        </div>
        <div className="px-4 hidden md:block">
          <ul className="flex justify-between max-w-4xl mx-auto">
            {menuItems.map((item) => (
              <li key={item} className="capitalize">
                <p className={cormorant.className}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <ul className="grid grid-cols-3 gap-2 relative" id="mobileNav">
            <li className=" ml-24 relative">
              <p className={cormorant.className}>home </p>
            </li>
            <li className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
              <p className={cormorant.className}>organization</p>
            </li>
            <li className="ml-28">
              <p className={cormorant.className}>lifestyle</p>
            </li>
          </ul>
        </div>
      </header>
    </Headroom>
  )
}

export default Header

const Menu = ({ open }) => {
  const secondaryItems = ["pricing", "support"]
  return (
    <div
      className={`absolute w-full h-screen left-0 top-full transition-opacity bg-white dark:bg-black duration-300 divide-y dark:divide-neutral-700 px-4 pt-4 w-50 z-50 ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <ul className="pb-4">
        {menuItems.map((item) => (
          <li key={item} className="capitalize text-xl  py-3">
            {item}
          </li>
        ))}
      </ul>
      <ul className="pt-4 pb-4">
        {secondaryItems.map((item) => (
          <li key={item} className="capitalize text-xl py-3">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
