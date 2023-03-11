import React from "react"
import { SiTiktok, SiTwitter } from "react-icons/si"
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai"
import { BsPinterest } from "react-icons/bs"

const MobileSocials = () => {
  return (
    <div className="px-4 pt-4 bg-[#F6F5F1] sm:hidden flex text-neutral-600  justify-end gap-4">
      <AiFillYoutube size={20} />
      <BsPinterest size={20} />
      <AiFillInstagram size={20} />
      <SiTwitter size={20} />
      <SiTiktok size={20} />
    </div>
  )
}

export default MobileSocials
