import React from "react";
import rightArrow from "../../public/assets/icon-arrow-right.svg";
import PaidStatus from "./PaidStatus";
import Link from "next/link";
import Image from "next/image";

function invoiceItem({ invoice }) {
	return (
		<Link
			className="w-full"
			href={`invoices/${invoice.id}`}>
			{/* Big Screen  */}
			<div className=" hidden md:flex cursor-pointer border-purple-500   w-full duration-100  ease-in-out  hover:border  py-4 shadow-sm px-6 bg-[#1E2139]  rounded-lg  items-center justify-between">
				<div className=" flex items-center ">
					<h2 className=" text-white ">
						<span className=" text-[#7e88c3]">#</span>
						{invoice.id}
					</h2>

					<h2 className=" text-sm text-gray-400 font-light ml-6">
						Due {invoice.paymentDue}
					</h2>

					<h2 className=" text-sm text-gray-400 font-light ml-10">
						{invoice.clientName}
					</h2>
				</div>

				<div className="  flex  items-center ">
					<h1 className=" text-xl mr-8  text-white">£ {invoice.total}</h1>

					<PaidStatus type={invoice.status} />

					<Image
						alt="arrow"
						src={rightArrow}
						className=" ml-4"
					/>
				</div>
			</div>

			{/* Phone Screen */}
			<div className=" md:hidden flex cursor-pointer hover:border border-purple-500 py-4 shadow-sm px-6 bg-[#1E2139]  rounded-lg  items-center justify-between">
				<div className=" flex flex-col">
					<h2 className=" text-white ">
						<span className=" text-[#7e88c3]">#</span>
						{invoice.id}
					</h2>

					<h2 className=" text-sm text-gray-400 font-light mt-3 ">
						Due {invoice.paymentDue}
					</h2>
					<h1 className=" text-xl  text-white">£ {invoice.total}</h1>
				</div>

				<div className=" flex   flex-col">
					<h2 className=" text-sm mb-4 text-gray-400 font-light  text-right  ">
						{invoice.clientName}
					</h2>

					<PaidStatus type={invoice.status} />
				</div>
			</div>
		</Link>
		// <div className="hover:border duration-500  text-sm sm:text-base border-purple-500 w-full hover:cursor-pointer rounded-xl p-3 md:p-6 shadow-lg flex justify-between bg-white">
		// 	<div className="flex md:flex-row flex-col justify-center gap-2 md:gap-4">
		// 		<span className="font-semibold">#RT3080</span>
		// 		<span className="text-gray-400 text-sm font-thin">Due 2021-8-19</span>
		// 		<span className="md:hidden flex font-semibold text-lg"># 1800.9</span>

		// 		<span className="md:flex hidden text-gray-400 text-sm font-thin">
		// 			Jensen Huang
		// 		</span>
		// 	</div>
		// 	<div className="flex md:flex-row flex-col gap-2 md:gap-4 items-center justify-center">
		// 		<span className="md:flex hidden font-semibold text-lg"># 1800.9</span>
		// 		<span className="md:hidden flex text-gray-400 text-sm font-thin">
		// 			Jensen Huang
		// 		</span>
		// 		<span>paid</span>
		// 	</div>
		// </div>
	);
}

export default invoiceItem;
