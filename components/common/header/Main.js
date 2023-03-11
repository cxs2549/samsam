/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React from "react"
import { Rotate as Hamburger } from "hamburger-react"
import Menu from "./Menu"
import { SiTiktok, SiTwitter } from "react-icons/si"
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai"
import { BsPinterest } from "react-icons/bs"

const Main = ({ isOpen, setOpen, menuItems }) => {
  return (
    <div className="px-4  bg-[#F6F5F1] relative  z-10  ">
      <div className="max-w-7xl mx-auto flex items-center  h-16 md:h-20 justify-between md:justify-end">
        <Link
          href={`/`}
          className="absolute left-1/2 -translate-x-1/2  overflow-hidden"
        >
          <img
            src="./assets/logo.png"
            alt="ss logo"
            className="max-w-[120px] transition-all duration-150 sm:max-w-[130px] xl:max-w-[150px]"
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
        <Menu open={isOpen} menuItems={menuItems} />
        <div className=" bg-[#F6F5F1]">
          <div className="hidden sm:flex text-neutral-600 justify-end gap-4">
            <AiFillYoutube size={20} />
            <BsPinterest size={20} />
            <AiFillInstagram size={20} />
            <SiTwitter size={20} />
            <SiTiktok size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
