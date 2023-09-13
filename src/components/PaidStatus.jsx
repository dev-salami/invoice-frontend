"use client";
import React from "react";

function PaidStatus({ type }) {
	const classNames = {
		paid: ["text-[#33d69f] bg-[#33d69f0f]", "bg-[#33d69f]"],
		pending: ["text-[#ff8f00] bg-[#ff8f000f]", "bg-[#ff8f00]"],
		draft: ["text-[#dfe3fa] bg-[#dfe3fa0f]", "bg-[#dfe3fa]"],
	};

	// 	const string = `
	// 	Happy Birthday Muheenah. On this special day, I wanted to take a moment to celebrate you and the wonderful qualities that make you so special. You bring so much joy, positivity, and kindness to those around you.
	// I feel incredibly fortunate to know you and to have you as a friend. Our conversations and interactions have always brought a smile to my face and brightened my day. Your friendship means a lot to me, and I cherish the moments we share
	// May Allah (SWT) grant you good health, success in all your endeavors, and happiness that knows no bounds.
	// Wishing you a very Happy Birthday and a fantastic year ahead!`
	return (
		<div
			className={`${
				type === "paid"
					? classNames.paid[0]
					: type === "pending"
					? classNames.pending[0]
					: classNames.draft[0]
			} flex justify-center space-x-2 rounded-lg  items-center px-4 py-2`}>
			<div
				className={` h-3 w-3 rounded-full  ${
					type === "paid"
						? classNames.paid[1]
						: type === "pending"
						? classNames.pending[1]
						: classNames.draft[1]
				} `}
			/>
			<p>{type}</p>
		</div>
	);
}

export default PaidStatus;
