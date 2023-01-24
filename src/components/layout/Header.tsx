import Logo from "./Logo"
import Nav from "./Nav"

const Header = () => {
  return (
    <div className="flex justify-between items-center 
     bg-red-500 text-white p-2">
      <Logo />
      <Nav />
    </div>
  )
}

export default Header