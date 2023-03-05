import { Cormorant } from "next/font/google"
const cormorant = Cormorant({ subsets: ["latin"], weight: "500" })

const About = () => {
  return (
    <div className="p-4 py-8 flex flex-col gap-5 items-center justify-center">
      <div className="flex justify-between w-full items-end">
        <img
          src="./assets/sam.png"
          alt=""
          className="rounded-full h-20 w-20 object-cover"
        />
        <div className="text-4xl uppercase">
          <h3 className={cormorant.className}>About</h3>
        </div>
      </div>
      <div>
        <p className="text-right text-neutral-700 dark:text-neutral-200">
          As a professional organizer, life coach, and grief advocate, I leverage my background in fashion to create functional spaces that reflect personal style and promote well-being.
        </p>
      </div>
    </div>
  )
}

export default About