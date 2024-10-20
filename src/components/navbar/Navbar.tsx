import { useState } from "react";
import {
  HomeIcon,
  InformationCircleIcon,
  BellIcon,
  UserIcon,
  Bars3Icon,
  ChartBarIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import logo from "../../assets/logo.png";
import { ModeToggle } from "../mode-toggle";
interface NavbarProps {
  onSelect: (component: string) => void; // Prop for selecting components
}

const Navbar: React.FC<NavbarProps> = ({ onSelect }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelect = (component: string) => {
    onSelect(component);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-[black] rounded-t-xl mx-auto">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex-shrink-0">
          <img src={logo} alt="Drono Phaeton Logo" className="h-10 w-auto" />
        </div>

        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <span
            onClick={() => handleSelect("Home")}
            className="flex items-center cursor-pointer text-[white] hover:text-[#ff4d00] text-sm"
          >
            <HomeIcon className="h-4 w-4 mr-1" />
            <span>Home</span>
          </span>
          <span
            onClick={() => handleSelect("Dashboard")}
            className="flex items-center cursor-pointer text-[white] hover:text-[#ff4d00] text-sm"
          >
            <ChartBarIcon className="h-4 w-4 mr-1" />
            <span>Dashboard</span>
          </span>
          <span
            onClick={() => handleSelect("About")}
            className="flex items-center cursor-pointer text-[white] hover:text-[#ff4d00] text-sm"
          >
            <InformationCircleIcon className="h-4 w-4 mr-1" />
            <span>About Us</span>
          </span>
          <span
            onClick={() => handleSelect("Contact")}
            className="flex items-center cursor-pointer text-[white] hover:text-[#ff4d00] text-sm"
          >
            <PhoneIcon className="h-4 w-4 mr-1" />
            <span>Contact</span>
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center text-[white] hover:text-[#ff4d00] transition duration-200 cursor-pointer">
                <UserIcon className="h-4 w-4 mr-1" />
                <span>User</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white rounded-lg">
            <DropdownMenuItem
                onClick={() => handleSelect("AddInfo")}
                className="text-gray-600 hover:bg-gray-100"
              >
                Add Information
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleSelect("BloodRequest")}
                className="text-gray-600 hover:bg-gray-100"
              >
                Request Blood
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleSelect("BloodDonationAppointment")}
                className="text-gray-600 hover:bg-gray-100"
              >
                Donate Blood
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleSelect("RequestStatus")}
                className="text-gray-600 hover:bg-gray-100"
              >
                Request Status
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center space-x-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="text-[#eaeaea] hover:text-[#ff4d00] transition duration-200 rounded-md p-1 bg-[#161819] hover:bg-[#333739]">
                <UserIcon className="h-5 w-5" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white rounded-lg">
              <DropdownMenuItem className="text-gray-600 hover:bg-gray-100">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-600 hover:bg-gray-100">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-600 hover:bg-gray-100">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button className="text-[#eaeaea] hover:text-[#ff4d00] transition duration-200 rounded-md p-1 bg-[#161819] hover:bg-[#333739]">
            <BellIcon className="h-5 w-5" />
          </button>

          <button
            className="md:hidden text-[#eaeaea] hover:text-[#ff4d00] transition duration-200 rounded-md p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
          <button className="text-[#eaeaea] hover:text-[#ff4d00] transition duration-200 rounded-md p-1 bg-[#161819] hover:bg-[#333739]" >
          <ModeToggle/>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#F9FAFB] py-4 px-6 space-y-4 shadow-lg">
          <span
            onClick={() => handleSelect("Home")}
            className="flex items-center cursor-pointer text-[#222629] hover:text-[#ff4d00] text-sm"
          >
            <HomeIcon className="h-4 w-4 mr-2" />
            <span>Home</span>
          </span>
          <span
            onClick={() => handleSelect("Dashboard")}
            className="flex items-center cursor-pointer text-[#222629] hover:text-[#ff4d00] text-sm"
          >
            <ChartBarIcon className="h-4 w-4 mr-2" />
            <span>Dashboard</span>
          </span>
          <span
            onClick={() => handleSelect("About")}
            className="flex items-center cursor-pointer text-[#222629] hover:text-[#ff4d00] text-sm"
          >
            <InformationCircleIcon className="h-4 w-4 mr-2" />
            <span>About Us</span>
          </span>
          <span
            onClick={() => handleSelect("Contact")}
            className="flex items-center cursor-pointer text-[#222629] hover:text-[#ff4d00] text-sm"
          >
            <PhoneIcon className="h-4 w-4 mr-2" />
            <span>Contact</span>
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center text-[#222629] hover:text-[#ff4d00] transition duration-200 cursor-pointer">
                <UserIcon className="h-4 w-4 mr-2" />
                <span>User</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white rounded-lg">
              <DropdownMenuItem
                onClick={() => handleSelect("AddInfo")}
                className="text-gray-600 hover:bg-gray-100"
              >
                Add Information
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleSelect("BloodRequest")}
                className="text-gray-600 hover:bg-gray-100"
              >
                Request Blood
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleSelect("BloodRequest")}
                className="text-gray-600 hover:bg-gray-100"
              >
                Donate Blood
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleSelect("Notification")}
                className="text-gray-600 hover:bg-gray-100"
              >
                Request Status
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
