import React from 'react'

import { FaLinkedin, FaGithub } from 'react-icons/fa';
const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">

            <div className="text-white text-3xl ">Ar</div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin />
                <FaGithub  />
            </div>
        </nav>
    )
}

export default Navbar
