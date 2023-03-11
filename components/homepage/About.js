/* eslint-disable @next/next/no-img-element */
import { Gloock } from "next/font/google"
const gloock = Gloock({ subsets: ["latin"], weight: "400" })

const About = () => {
  return (
    <div className="bg-[#F6F5F1]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2">
        <div className="p-4 py-8 flex flex-col gap-5 items-center sm:max-w-xl">
          <div className="flex gap-4 w-full items-end">
            {/* <img
              src="./assets/sam.png"
              alt=""
              className="rounded-full h-20 w-20 object-cover order-2"
            /> */}
            <div className="text-2xl uppercase text-neutral-700 ">
              <h3 className={gloock.className}>About</h3>
            </div>
          </div>
          <div>
            <p className=" text-neutral-700  ml-auto">
              As a professional organizer, life coach, and grief advocate, I
              leverage my background in fashion to create functional spaces that
              reflect personal style and promote well-being.
            </p>
            <button className="mt-4">Read more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
