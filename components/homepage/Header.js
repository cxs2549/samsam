/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useState } from "react"
import { Rotate as Hamburger } from "hamburger-react"

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <header className="p-4 flex items-center justify-between relative bg-white dark:bg-black z-50">
      <Link href={`/`}>
        <img src="./assets/logo.png" alt="ss logo" className="w-12" />
      </Link>
      <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
      <Menu open={isOpen} />
    </header>
  )
}

export default Header

const Menu = ({ open }) => {
  const menuItems = [
    "professional organizing",
    "personal growth",
    "lifestyle",
    "healthy living",
    "recipes",
    "resources",
  ]
  const secondaryItems = ["pricing", "support"]
  return (
    <div
      className={`absolute w-full h-screen left-0 top-full transition-opacity bg-white dark:bg-black duration-300 divide-y px-4 pt-4 ${
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
      <ul className="grid gap-1 grid-cols-2 pt-8 w-full items-center justify-between">
        <li className="w-full">
          <button className="bg-white text-black p-4 w-full font-semibold text-lg hover:invert border rounded">
            Login
          </button>
        </li>
        <li className="w-full">
          <button className="bg-white text-black p-4 w-full font-semibold text-lg hover:invert border rounded">
            Register
          </button>
        </li>
      </ul>
    </div>
  )
}
