"use client";

import React, { useState } from "react";
import logo from "../../public/assets/logo.png";
import sun from "../../public/assets/icon-sun.svg";
import moon from "../../public/assets/icon-moon.svg";
import profile from "../../public/assets/image-avatar.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
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

				<UserButton afterSignOutUrl="/" />
			</header>
		</div>
	);
}

export default TopBar;
