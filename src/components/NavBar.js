import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-shadow ${sticky ? "bg-gray-200 shadow-md" : "bg-gray-200"
        }`}
    >
      <div className="flex items-center justify-between px-4 py-3 max-w-screen-lg mx-auto">
        <div className="text-2xl font-bold uppercase">
          A<span className="text-cyan-600">BHISH</span>EK
        </div>

        <div className="hidden md:flex space-x-6">
          {menuLinks.map((menu, i) => (
            <a
              key={i}
              href={menu.link}
              className="relative flex items-center group text-gray-800 hover:text-cyan-600"
            >
              {menu.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-600 transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>

        <div
          onClick={() => setOpen(!open)}
          className={`md:hidden text-3xl cursor-pointer ${open ? "text-cyan-600" : "text-gray-800"
            }`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 w-3/4 md:w-1/2 h-screen bg-white z-40 transition-transform transform ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-4">
          <div
            onClick={() => setOpen(false)}
            className="text-3xl cursor-pointer"
          >
            <ion-icon name="close"></ion-icon>
          </div>
        </div>
        <div className="flex flex-col items-center  h-full">
          <ul className="space-y-4">
            {menuLinks.map((menu, i) => (
              <li key={i} onClick={() => setOpen(false)}>
                <a
                  href={menu.link}
                  className="text-2xl text-gray-500 hover:text-cyan-600 transition-colors"
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
