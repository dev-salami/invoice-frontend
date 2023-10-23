"use client";

import React, { useState } from "react";
import logo from "../../public/assets/logo.png";
import sun from "../../public/assets/icon-sun.svg";
import moon from "../../public/assets/icon-moon.svg";
import profile from "../../public/assets/image-avatar.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

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
					<div className=" h-full w-full flex flex-col  pb-6 justify-between items-center">
						{/* Logo */}
						<Image
							src={logo}
							alt="logo"
							className="relative"
						/>
						<UserButton afterSignOutUrl="/" />

						{/* Bottom Side */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
