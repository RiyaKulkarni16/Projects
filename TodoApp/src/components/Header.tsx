import React from 'react'
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full bg-gray-800 flex justify-between">
      <div className="text-white text-xl p-2">Todo App</div>
      <div className="text-white text-xl p-2">
        <a 
        href="https://github.com/arjitparia2002"
        target="_blank"
        rel="noopener noreferrer"
        >
          <FaGithub /> 
        </a>
      </div>
    </div>
  )
}

export default Header
