import { SiTiktok } from "react-icons/si"
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai"
import { BsPinterest } from "react-icons/bs"
import { Roboto_Slab } from "@next/font/google"
const robotoSlab = Roboto_Slab({ weight: "400", subsets: ["latin"] })


export default function Example() {
  return (
    <footer
      className="bg-white dark:bg-neutral-900 dark:border-neutral-700 border-t"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-8 px-4 bg-white dark:bg-black">
        <div className=" border-gray-200 pb-4 xl:mt-0">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-sm dark:text-gray-200">
              Curated news, articles, and resources, sent to your inbox weekly.
            </p>
          </div>
          <form className="mt-4 sm:flex sm:max-w-md">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="appearance-none min-w-0 w-full dark:border-neutral-700 border border-gray-300 py-2 px-4 text-base rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400 sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full bg-brand border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-neutral-700 focus:outline-none focus:ring-0 "
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 border-t border-gray-200 py-12  md:items-center md:justify-between dark:border-neutral-700">
          <div className="">
          <div className="flex text-neutral-700 dark:text-neutral-400 gap-4">
            <AiFillYoutube size={20} />
            <BsPinterest size={20} />
            <AiFillInstagram size={20} />
            <SiTiktok size={20} />
          </div>
          </div>
        </div>
        

        <p className="text-xs text-gray-400 md:order-1">
          &copy; 2023 CSD for Samantha Sambilè, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
