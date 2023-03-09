import { SiTiktok, SiTwitter } from "react-icons/si"
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai"
import { BsPinterest } from "react-icons/bs"
import { Gloock } from "@next/font/google"

const gloock = Gloock({ subsets: ["latin"], weight: "400" })

export default function Example() {
  return (
    <footer
      className="bg-[#F0EEE2]  d border-t"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-8 px-4 bg-[#F0EEE2] ">
       
        <div className="  pb-8  md:items-center md:justify-between dark:border-neutral-700">
          <div className="">
            <div className="flex text-neutral-600 dark:text-neutral-400 gap-4">
              <AiFillYoutube size={20} />
              <BsPinterest size={20} />
              <AiFillInstagram size={20} />
              <SiTwitter size={20} />
              <SiTiktok size={20} />
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 md:order-1">
          &copy; 2023 cs.dev for Samantha Sambile, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
