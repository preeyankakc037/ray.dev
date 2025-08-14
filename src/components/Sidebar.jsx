import { useState } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(true); // sidebar open/close state

  const links = [
    { icon: <FaHome />, label: "Home", href: "#home" },
    { icon: <FaUser />, label: "About", href: "#about" },
    { icon: <FaProjectDiagram />, label: "Projects", href: "#projects" },
    { icon: <FaEnvelope />, label: "Contact", href: "#contact" },
  ];

  return (
    <div className={`h-screen ${open ? "w-64" : "w-20"} bg-sidebar-bg text-sidebar-link duration-300 relative`}>
      {/* Logo / Brand */}
     

      {/* Navigation Links */}
      <nav className="mt-6">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="flex items-center p-3 text-sidebar-link hover:bg-sidebar-hover rounded-md mx-2 my-1 duration-200"
              >
                <span className="text-lg">{link.icon}</span>
                <span className={`ml-4 ${open ? "block" : "hidden"}`}>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
