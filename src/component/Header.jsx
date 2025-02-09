import Button from "./Button";
import Logo from "/logo.png";

const Header = () => {
  
  return (
    <div className="flex items-center justify-between">
      <img src={Logo} alt="Logo" className="h-16" />
      <nav>
        <ul className="flex gap-4 items-center">
          <li className="cursor-pointer hover:text-gray-400">Home</li>
          <li className="cursor-pointer hover:text-gray-400">Features</li>
          <li className="cursor-pointer hover:text-gray-400">Pricing</li>
          <li className="cursor-pointer hover:text-gray-400">About Us</li>
          <li className="cursor-pointer hover:text-gray-400">Contact</li>
        </ul>
      </nav>
      <nav>
        <ul className="flex gap-3  items-center">
          <li className="cursor-pointer hover:text-gray-400">Login</li>
          <Button label={"Sign Up"}/>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
