import Navbar from "../navbar/Navbar";
import Dashboard from "../dashboard/dashboard";
import About from "../aboutus/aboutus";
import Contact from "../contact/contact";
import AddInfo from "../users/addInfo";
import BloodRequest from "../users/bloodRequest";
import RequestStatus from "../users/requestStatus";
import Notification from "../notifictaion/notification";
import { useState } from "react";
import MainHome from "./mainHome";

const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>("Home");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Home":
        return <MainHome />;
      case "Dashboard":
        return <Dashboard />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "AddInfo":
        return <AddInfo />;
      case "BloodRequest":
        return <BloodRequest />;
      case "RequestStatus":
        return <RequestStatus />;
      case "Notification":
        return <Notification />;
      default:
        return <h2>Welcome to My Website</h2>;
    }
  };

  return (
    <div className="bg-[white]">
      <div className="bg-[white] w-auto h-auto rounded-xl shadow-lg m-6">
      <div className="border-b border-white">

        <Navbar onSelect={setSelectedComponent} />
        </div>
        <main className=" mx-auto max-w-screen-xl px-4 bg-black">
          {renderComponent()}
        </main>
      </div>
    </div>
  );
};

export default Home;
