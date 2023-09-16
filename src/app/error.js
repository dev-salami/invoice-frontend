"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
			<h1 className="text-9xl font-extrabold text-white tracking-widest">
				404
			</h1>
			<div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
				Something went wrong!
			</div>
			<div className="flex gap-6">
				<button className="mt-5">
					<Link href="/">
						<a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
							<span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
							<span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
								Go Home
							</span>
						</a>
					</Link>
				</button>
				<button
					onClick={() => reset()}
					className="mt-5">
					<a className="relative inline-block text-sm font-medium text-white group active:text-white focus:outline-none focus:ring">
						<span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-white group-hover:translate-y-0 group-hover:translate-x-0"></span>
						<span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
							Try Again
						</span>
					</a>
				</button>
			</div>
		</main>
		// <div>
		// 	<h2>Something went wrong!</h2>
		// 	<button
		// 		onClick={
		// 			// Attempt to recover by trying to re-render the segment
		// 			() => reset()
		// 		}>
		// 		Try again
		// 	</button>
		// </div>
	);
}
