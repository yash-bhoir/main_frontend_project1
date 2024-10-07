import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MoonIcon,
  SunIcon,
  UserIcon,
  HomeIcon,
  InformationCircleIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`shadow-lg transition-colors duration-300 ${
        darkMode ? "bg-[#222629]" : "bg-[#F9FAFB]"
      } rounded-lg`}
    >
      <div className="max-w-screen-md mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#86C232]">
          My Website
        </div>

        {/* Center Navigation Tabs */}
        <div className="flex-1 flex justify-center space-x-4">
          <a
            href="#"
            className={`flex items-center rounded-md p-2 transition duration-200 ${
              darkMode ? "text-gray-200" : "text-[#222629]"
            } hover:text-[#86C232]`}
          >
            <HomeIcon className="h-5 w-5 mr-1" />
            <span className="text-base">Home</span>
          </a>
          <a
            href="#"
            className={`flex items-center rounded-md p-2 transition duration-200 ${
              darkMode ? "text-gray-200" : "text-[#222629]"
            } hover:text-[#86C232]`}
          >
            <span className="text-base">Dashboard</span>
          </a>
          <a
            href="#"
            className={`flex items-center rounded-md p-2 transition duration-200 ${
              darkMode ? "text-gray-200" : "text-[#222629]"
            } hover:text-[#86C232]`}
          >
            <InformationCircleIcon className="h-5 w-5 mr-1" />
            <span className="text-base">About Us</span>
          </a>
          <a
            href="#"
            className={`flex items-center rounded-md p-2 transition duration-200 ${
              darkMode ? "text-gray-200" : "text-[#222629]"
            } hover:text-[#86C232]`}
          >
            <span className="text-base">Contact</span>
          </a>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="text-[#222629] hover:text-[#86C232] transition duration-200 rounded-md flex items-center">
                User
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white dark:bg-[#474B4F] rounded-lg">
              <DropdownMenuItem className="text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button className="text-[#222629] hover:text-[#86C232] transition duration-200 rounded-md p-2">
            <BellIcon className="h-5 w-5" />
          </button>
          <button
            onClick={toggleDarkMode}
            className="text-[#222629] hover:text-[#86C232] transition duration-200 rounded-md p-2"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-[#86C232]" />
            ) : (
              <MoonIcon className="h-6 w-6 text-[#474B4F]" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
