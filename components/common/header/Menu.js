import React from 'react'

const Menu = ({ open, menuItems }) => {
    const secondaryItems = ["pricing", "support"]
    return (
      <div
        className={`absolute w-full h-screen left-0 top-full transition-opacity bg-[#F6F5F1] dark:bg-black duration-300 divide-y dark:divide-neutral-700 px-8 pt-4 w-50 z-50 ${
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
  

export default Menu