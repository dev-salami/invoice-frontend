import React from "react";

const CircularLoader = () => {
	return (
		<div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#141625] bg-opacity-50 z-50">
			<div className="border-t-8 border-white border-solid rounded-full w-32 h-32 animate-spin"></div>
		</div>
	);
};

export default CircularLoader;
