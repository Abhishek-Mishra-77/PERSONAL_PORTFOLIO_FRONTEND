import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
// import CircleLoader from 'react-spinners/CircleLoader'; 

const Auth = () => {
  const [formClass, setFormClass] = useState("");
  const [eyeSize, setEyeSize] = useState({ width: "50px", height: "50px" });
  const [validationClass, setValidationClass] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State for loading
  const [isFormVisible, setIsFormVisible] = useState(true); // State for form visibility
  const navigation = useNavigate();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const dw = document.documentElement.clientWidth / 15;
      const dh = document.documentElement.clientHeight / 15;
      const x = event.pageX / dw;
      const y = event.pageY / dh;
      setEyeSize({ width: `${x}px`, height: `${y}px` });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleFocusIn = () => {
    setFormClass("translate-y-[-180px]");
  };

  const handleFocusOut = () => {
    setFormClass("translate-y-[-100px]");
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    setLoading(true); // Show spinner
    setIsFormVisible(false); // Hide form
   
  };

  return (
    <div className="relative">
      {isFormVisible && (
        <div className="flex flex-col items-center mt-12">
          <div className="relative w-48 h-48 mx-auto mt-12">
            <div className="absolute w-20 h-20 bg-black rounded-full border-4 border-white -left-6 -top-6"></div>
            <div className="absolute w-20 h-20 bg-black rounded-full border-4 border-white -right-6 -top-6"></div>
            <div className="w-48 h-48 bg-white rounded-full shadow-lg relative mx-auto">
              <div className="w-12 h-20 bg-black rounded-full transform -rotate-45 absolute top-8 left-8"></div>
              <div className="w-12 h-20 bg-black rounded-full transform rotate-45 absolute top-8 right-8"></div>
              <div className="w-8 h-8 bg-white rounded-full absolute top-16 left-12">
                <div className="w-4 h-4 bg-black rounded-full absolute top-1 left-1"></div>
              </div>
              <div className="w-8 h-8 bg-white rounded-full absolute top-16 right-12">
                <div className="w-4 h-4 bg-black rounded-full absolute top-1 left-1"></div>
              </div>
              <div className="w-9 h-6 bg-black rounded-[50px 20px 30px 15px] rotate-15 absolute bottom-12 left-1/2 transform -translate-x-1/2"></div>
            </div>
            <div className="w-64 h-72 bg-white rounded-t-full rounded-b-xl absolute top-1/2 -left-1/4 shadow-lg"></div>
            <div className="w-20 h-24 bg-black rounded-[40px 40px 39px 40px/26px 26px 63px 63px] absolute top-72 -left-20 shadow-md"></div>
            <div className="w-20 h-24 bg-black rounded-[40px 40px 39px 40px/26px 26px 63px 63px] absolute top-72 -right-20 shadow-md"></div>
          </div>

          <form
            className={`relative bg-white p-8 max-w-md mx-auto rounded-lg shadow-lg transition-transform duration-300 ${formClass} ${validationClass}`}
            onSubmit={handleSubmit} // Adds the handleSubmit function to form submission
          >
            <div className={`absolute w-10 h-10 bg-black rounded-full shadow-md transform -translate-y-1/2 transition-transform ${formClass}`}></div>
            <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">Admin Login</h1>
            <div className="relative mb-6">
              <input
                required
                className="w-full h-8 px-2 border-b border-gray-300 text-gray-700 focus:border-teal-400 focus:outline-none"
                onBlur={handleFocusOut}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="absolute top-0 left-0 text-gray-500 transform -translate-y-4 scale-75 origin-top-left transition-transform duration-300">Username</label>
            </div>
            <div className="relative mb-6">
              <input
                id="password"
                type="password"
                required
                className="w-full h-8 px-2 border-b border-gray-300 text-gray-700 focus:border-teal-400 focus:outline-none"
                onFocus={handleFocusIn}
                onBlur={handleFocusOut}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="absolute top-0 left-0 text-gray-500 transform -translate-y-4 scale-75 origin-top-left transition-transform duration-300">Password</label>
              {validationClass === "shake" && (
                <p className="text-red-500 text-sm absolute top-full mt-2">Invalid Credentials..!!</p>
              )}
              <button type="submit" className="w-full py-2 mt-4 bg-teal-500 text-white border border-teal-400 rounded hover:bg-teal-600 transition duration-300">
                Login
              </button>
            </div>
            <div className="text-center mt-2">
              <a
                href="/forgot-password"
                className="text-teal-500 hover:text-teal-700 font-semibold"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Auth;
