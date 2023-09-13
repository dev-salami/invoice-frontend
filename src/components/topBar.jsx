"use client";

import React, { useState } from "react";
import logo from "../../public/assets/logo.png";
import sun from "../../public/assets/icon-sun.svg";
import moon from "../../public/assets/icon-moon.svg";
import profile from "../../public/assets/image-avatar.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
function TopBar() {
	const [colorTheme, setTheme] = useState(true);
	const transition = {
		type: "spring",
		stiffness: 200,
		damping: 10,
	};

	return (
		<div>
			<header className=" lg:hidden h-[80px] z-50  duration-300 ease-in-out  p-4  dark:bg-[#1E2139]  bg-[#373b53] flex items-center justify-end   ">
				{/* Logo img */}

				<Image
					src={logo}
					className="h-[80px] w-[80px] absolute top-0 left-0"
					alt="logo-image"
				/>

				{/* Right side */}
				<div className="  flex  items-center  ">
					{/* darkMode Button */}

					{colorTheme === "light" ? (
						<motion.img
							// onClick={toggleDarkMode}
							initial={{ scale: 0.6, rotate: 90 }}
							animate={{ scale: 1, rotate: 360, transition }}
							whileTap={{ scale: 0.9, rotate: 15 }}
							src={moon}
							className="cursor-pointer h-6"
						/>
					) : (
						<motion.img
							className="cursor-pointer h-7"
							// onClick={toggleDarkMode}
							whileTap={{ scale: 0.9, rotate: 15 }}
							initial={{ rotate: 45 }}
							animate={{ rotate: 360, transition }}
							src={sun}
						/>
					)}

					<div className=" h-[80px] border-dotted border-l border-[#494e6e] mx-6"></div>

					<div className=" relative  ">
						<Image
							alt="profile"
							src={profile}
							className="h-[50px] w-[50px] rounded-full"
						/>
					</div>
				</div>
			</header>
		</div>
	);
}

export default TopBar;
