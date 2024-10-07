import { useState } from "react";
import { Button } from "@/components/ui/button"; // Import the button component from shadcn
import { Link } from "react-router-dom"; // Import Link for routing
import { FaMoon, FaSun, FaBell, FaUser } from "react-icons/fa"; // Import icons from react-icons

const Navbar = () => {
  const [nightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src="/path/to/logo.svg" alt="Logo" className="h-8" />
      </div>
      <div className="flex space-x-6">
        <Link to="/home" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
          Dashboard
        </Link>
        <Link to="/services" className="text-gray-700 hover:text-blue-600">
          Services
        </Link>
        <Link to="/aboutus" className="text-gray-700 hover:text-blue-600">
          About Us
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">
          Contact
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Button
          onClick={toggleNightMode}
          variant="outline"
          className="hover:bg-gray-200"
        >
          {nightMode ? <FaMoon /> : <FaSun />}
        </Button>
        <Button variant="outline" className="hover:bg-gray-200">
          <FaBell />
        </Button>

        <Button variant="outline" className="hover:bg-gray-200">
          <FaUser />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
