"use client";

import React, { useState } from "react";
import logo from "../../public/assets/logo.png";
import sun from "../../public/assets/icon-sun.svg";
import moon from "../../public/assets/icon-moon.svg";
import profile from "../../public/assets/image-avatar.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

function SideBar() {
	const [colorTheme, setTheme] = useState(true);
	//   const [darkSide, setDarkSide] = useState(
	//     colorTheme === "light" ? true : false
	//   );

	//   const toggleDarkMode = () => {
	//     setTheme(colorTheme);
	//     setDarkSide((state) => !state);
	//   };

	const transition = {
		type: "spring",
		stiffness: 200,
		damping: 10,
	};

	return (
		<div className="h-fit w-fit">
			{/* SideBar */}
			<div className=" z-50 hidden lg:block ">
				<div className=" fixed  z-50  w-[80px] rounded-r-3xl  flex-col  top-0 left-0 h-screen dark:bg-[#1E2139]  bg-[#373b53]">
					<div className=" h-full w-full flex flex-col justify-between items-center">
						{/* Logo */}

						<Image
							src={logo}
							alt="logo"
							className="relative"
						/>

						{/* Bottom Side */}
						<div>
							{colorTheme === true ? (
								<motion.img
									// onClick={toggleDarkMode}
									initial={{ scale: 0.6, rotate: 90 }}
									animate={{ scale: 1, rotate: 360, transition }}
									whileTap={{ scale: 0.9, rotate: 15 }}
									src={moon}
									className="cursor-pointer ml-8 h-6"
								/>
							) : (
								<motion.img
									className="cursor-pointer ml-8 h-7"
									// onClick={toggleDarkMode}
									whileTap={{ scale: 0.9, rotate: 15 }}
									initial={{ rotate: 45 }}
									animate={{ rotate: 360, transition }}
									src={sun}
								/>
							)}

							<div className=" w-[80px] border-dotted border-t border-[#494e6e] my-6"></div>

							<div className=" relative  ml-4 mb-4 ">
								<Image
									src={profile}
									alt="profile"
									className="h-[50px] w-[50px] rounded-full"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
