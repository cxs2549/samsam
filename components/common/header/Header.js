import { useState } from "react"
import Headroom from "react-headroom"
import MobileSocials from './MobileSocials'
import Main from './Main'
import Nav from "./Nav"

const menuItems = ['professional organizing', 'personal growth', 'lifestyle', 'healthy living', 'recipes', 'resources']

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <Headroom>
      <header className="z-50">
        <MobileSocials />
        <Main isOpen={isOpen} setOpen={setOpen} menuItems={menuItems} />
        <Nav menuItems={menuItems} />
      </header>
    </Headroom>
  )
}

export default Header
