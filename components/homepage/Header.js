/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useState } from "react"
import { Rotate as Hamburger } from "hamburger-react"
import { SiTiktok } from "react-icons/si"
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai"
import { BsPinterest } from "react-icons/bs"
import Headroom from "react-headroom"
import { Cormorant, Gloock } from "next/font/google"
const cormorant = Cormorant({ subsets: ["latin"], weight: "600" })
const gloock = Gloock({ subsets: ["latin"], weight: "400" })

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
        <div className="px-4 pt-4 bg-white dark:bg-black sm:hidden">
          <div className="flex text-neutral-600 dark:text-neutral-400 justify-end gap-4">
            <AiFillYoutube size={20} />
            <BsPinterest size={20} />
            <AiFillInstagram size={20} />
            <SiTiktok size={20} />
          </div>
        </div>
        <div className="px-4 flex items-center justify-between md:justify-end bg-white relative dark:bg-black z-10 h-16 md:h-20">
          <Link
            href={`/`}
            className="absolute left-1/2 -translate-x-1/2  overflow-hidden"
          >
            <img
              src="./assets/logo.png"
              alt="ss logo"
              className="max-w-[120px] dark:invert transition-all duration-150 sm:max-w-[130px] xl:max-w-[150px]"
            />
          </Link>
          <div className="text-neutral-800 dark:text-neutral-400 md:hidden">
            <Hamburger
              rounded={true}
              toggled={isOpen}
              toggle={setOpen}
              size={24}
            />
          </div>
          <Menu open={isOpen} />
          <div className=" bg-white dark:bg-black">
          <div className="hidden sm:flex text-neutral-600 dark:text-neutral-400 justify-end gap-4">
            <AiFillYoutube size={20} />
            <BsPinterest size={20} />
            <AiFillInstagram size={20} />
            <SiTiktok size={20} />
          </div>
        </div>
        </div>
        <div className="px-4 py-2 hidden md:block bg-brand">
          <ul className="flex justify-between max-w-3xl mx-auto">
            {menuItems.map((item) => (
              <li key={item} className="capitalize text-neutral-600">
                <p className={cormorant.className}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center bg-pink-50 items-center md:hidden">
          <ul className="grid grid-cols-3 gap-2 relative max-w-xs  py-2" id="mobileNav">
            <li className=" ml-16 relative">
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
