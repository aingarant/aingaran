import Logo from "./Logo"
import Nav from "./Nav"

const Header = () => {
  return (
    <div className=" 
     bg-red-500 text-white py-2">
      <div className="container mx-auto flex justify-center items-center">
      <Logo />
      </div>

    </div>
  )
}

export default Header