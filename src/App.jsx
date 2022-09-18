import React, { useRef, useState } from "react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineCall,
  MdLogout,
} from "react-icons/md";
import { GiFuelTank, GiHamburgerMenu } from "react-icons/gi";
import { TiDocumentText } from "react-icons/ti";
import { AiOutlineMessage } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BsCalendar4Week } from "react-icons/bs";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FuelEfficiency from "./Components/FuelEfficiency";
import Documents from "./Components/Documents";
import Messages from "./Components/Messages";
import Settings from "./Components/Settings";
import Calender from "./Components/Calender";
import HelpCenter from "./Components/HelpCenter";
import DashBoard from "./Components/DashBoard";
import Footer from "./Components/Footer";
import ProfileSection from "./Components/ProfileSection";

function App() {
  const [login, setLogin] = useState(false);
  const [rightbar, setRightbar] = useState(false);
  const ref = useRef();

  const toggleSidebar = () => {
    if (ref.current.classList.contains("-translate-x-full")) {
      ref.current.classList.remove("-translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (ref.current.classList.contains("translate-x-0")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("-translate-x-full");
    }
  };
  return (
    <BrowserRouter>
      <section className="flex flex-col bg-gray-900 lg:p-10">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="flex flex-col lg:flex-row justify-evenly">
          {/* ---------------------Left Side Bar -----------------------------*/}
          <div className="w-full h-14 lg:w-2/12 relative lg:h-[90vh]">
            <div className="text-blue-500 text-2xl font-bold text-center flex items-center justify-between relative px-4">
              <GiHamburgerMenu
                onClick={toggleSidebar}
                className="lg:hidden cursor-pointer mt-2"
              />
              <div className="flex items-center my-1 lg:my-4 lg:ml-4 mt-2">
                <GiFuelTank className="ml-8 mr-2 -mt-1 text-3xl" />
                <p>
                  <span className="text-4xl text-blue-00"> F</span>uel
                </p>
              </div>
              <div
                onClick={() => {
                  setLogin(!login);
                }}
                className="w-7 h-7 bg-blue-500 rounded-full lg:hidden relative cursor-pointer mt-2"
              >
                {login && <ProfileSection props={{ setLogin, login }} />}
              </div>
            </div>
            <div
              ref={ref}
              className="my-12 px-6 lg:px-0 py-14 lg:py-0 transform transition-transform -translate-x-full lg:translate-x-0 z-10 h-[100vh] absolute -top-10 bg-gray-900 left-0"
            >
              <ImCross
                onClick={toggleSidebar}
                className="absolute top-3 right-4 text-xl text-gray-500 lg:hidden cursor-pointer"
              />
              <ul className="flex flex-col items-center lg:mt-16 space-y-1">
                <Link
                  to={"/"}
                  className="w-40 text-gray-300 flex items-center cursor-pointer font-semibold -ml-10"
                >
                  <div className="flex items-center lg:my-4 lg:ml-4 text-3xl text-blue-500 -mt-4 lg:-mt-8 my-6">
                    <GiFuelTank className="ml-8 mr-2 -mt-1 text-4xl" />{" "}
                    <p className="text-2xl">
                      <span className="text-4xl text-blue-600"> F</span>uel
                    </p>
                  </div>
                </Link>
                <Link
                  to={"/"}
                  className="w-40 text-gray-300 flex items-center cursor-pointer font-semibold hover:underline hover:underline-offset-4 hover:text-blue-500 hover:-translate-y-1  hover:translate-x-1 hover:duration-300 py-2 mt-6"
                >
                  <MdOutlineSpaceDashboard className="text-2xl mx-2" />{" "}
                  Dashboard
                </Link>
                <Link
                  to={"fuelefficiency"}
                  className="w-40 text-gray-300 flex items-center cursor-pointer font-semibold hover:underline hover:underline-offset-4 hover:text-blue-500 hover:-translate-y-1  hover:translate-x-1 hover:duration-300 py-2 xl:w-44 xl:-mr-2"
                >
                  <GiFuelTank className="text-2xl mx-2" /> Fuel Efficiency
                </Link>
                <Link
                  to={"documents"}
                  className="w-40 text-gray-300 flex items-center cursor-pointer font-semibold hover:underline hover:underline-offset-4 hover:text-blue-500 hover:-translate-y-1  hover:translate-x-1 hover:duration-300 py-2"
                >
                  <TiDocumentText className="text-2xl mx-2" /> Documents
                </Link>
                <Link
                  to={"messages"}
                  className="w-40 text-gray-300 flex items-center cursor-pointer font-semibold hover:underline hover:underline-offset-4 hover:text-blue-500 hover:-translate-y-1  hover:translate-x-1 hover:duration-300 py-2"
                >
                  <AiOutlineMessage className="text-2xl mx-2" /> Messages
                </Link>
                <Link
                  to={"settings"}
                  className="w-40 text-gray-300 flex items-center cursor-pointer font-semibold hover:underline hover:underline-offset-4 hover:text-blue-500 hover:-translate-y-1  hover:translate-x-1 hover:duration-300 py-2"
                >
                  <FiSettings className="text-2xl mx-2" /> Settings
                </Link>
                <Link
                  to={"calender"}
                  className="w-40 text-gray-300 flex items-center cursor-pointer font-semibold hover:underline hover:underline-offset-4 hover:text-blue-500 hover:-translate-y-1  hover:translate-x-1 hover:duration-300 py-2"
                >
                  <BsCalendar4Week className="text-2xl mx-2" /> Calender
                </Link>
                <Link
                  to={"helpcenter"}
                  className="w-40 text-gray-300 flex items-center cursor-pointer font-semibold hover:underline hover:underline-offset-4 hover:text-blue-500 hover:-translate-y-1  hover:translate-x-1 hover:duration-300 py-2"
                >
                  <MdOutlineCall className="text-2xl mx-2" /> Help Center
                </Link>
                <Link
                  to={"logout"}
                  className="w-40 text-blue-600 flex items-center cursor-pointer font-semibold"
                >
                  <MdLogout className="text-2xl mx-2 mt-28" />
                  <span className="mt-28"> Log out</span>
                </Link>
              </ul>
            </div>
          </div>
          {/* ----------------------Middle Section-------------------------------- */}
          <div className="w-full lg:w-10/12 relative bg-gray-700 rounded-md flex justify-evenly">
            <div className="w-full lg:w-10/12">
              {/* search bar */}
              {/* <div className="flex bg-gray-800 rounded-lg my-2 shadow-lg">
              <AiOutlineSearch className="text-2xl text-gray-200 font-semibold mt-1 mx-1" />
              <input className="border-none w-[90%] bg-gray-800 text-gray-200 focus:outline-none p-1" type="text" placeholder="Search here" name="search" id="search" />
            </div> */}
              {/* page components */}
              <Routes>
                <Route exact path="/" element={<DashBoard />} />
                <Route
                  exact
                  path="fuelefficiency"
                  element={<FuelEfficiency />}
                />
                <Route exact path="documents" element={<Documents />} />
                <Route exact path="messages" element={<Messages />} />
                <Route exact path="settings" element={<Settings />} />
                <Route exact path="calender" element={<Calender />} />
                <Route exact path="helpcenter" element={<HelpCenter />} />
              </Routes>
            </div>
            {/* -------------------------Right Side Bar -------------------------*/}
            <div className="absolute right-0 top-0 h-full bg-gray-800 px-2 rounded-lg rounded-tl rounded-bl hidden lg:block">
              {rightbar ? (
                <FaGreaterThan
                  onClick={() => {
                    setRightbar(!rightbar);
                  }}
                  className="text-gray-500 mt-4 cursor-pointer"
                />
              ) : (
                <FaLessThan
                  onClick={() => {
                    setRightbar(!rightbar);
                  }}
                  className="text-gray-500 mt-4 cursor-pointer"
                />
              )}
            </div>
            {rightbar && <ProfileSection />}
          </div>
        </div>
        <Footer />
      </section>
      {/* footer section */}
    </BrowserRouter>
  );
}

export default App;
