"use client";
// import { useRouter, useNavigate } from "next/router";
import React from "react";
import PaidStatus from "./PaidStatus";
import { downloadPDF, formatDBDate } from "@/helper/utils";
import DeleteModal from "./DeleteModal";
import { toggleDeleteModal, toggleEditModal } from "@/redux/features/crudSlice";
import { useDispatch, useSelector } from "react-redux";
import DeleteInvoice from "./EditInvoice";
import EditInvoice from "./EditInvoice";
import Link from "next/link";

function SingleInvoice({ invoice }) {
	const dispatch = useDispatch();

	const { deleteModalOpen, editModalOpen } = useSelector((state) => state.crud);

	return (
		<div className="text-sm font-light">
			{deleteModalOpen ? <DeleteModal id={invoice.id} /> : null}
			{editModalOpen ? <EditInvoice invoice={invoice} /> : null}

			{invoice && (
				<div
					key="invoice-info"
					initial={{ x: 0 }}
					animate={{ x: 0 }}
					exit={{ x: "200%" }}
					transition={{ duration: 0.5 }}
					className="bg-[#141625] mx-auto duration-300 min-h-screen  py-[34px] px-2 md:px-8 lg:px-12 max-w-3xl lg:py-[72px] ">
					<div className="">
						<button className=" flex items-center space-x-4  group  text-white font-thin ">
							{/* <img className='' src={leftArrow} /> */}
							<Link
								href="/invoices"
								className=" group-hover:opacity-80">
								Go back
							</Link>
						</button>

						<div className=" mt-8 rounded-lg w-full flex items-center justify-between px-6 py-6  bg-[#1e2139]">
							<div className=" flex space-x-2 justify-between md:justify-start md:w-auto w-full items-center">
								<h1 className="  text-gray-400">Status</h1>
								<PaidStatus type={invoice?.status} />
							</div>
							<div className=" ">
								<button
									onClick={() => dispatch(toggleEditModal(true))}
									className=" text-[#7e88c3] text-center bg-[#252945] hover:opacity-80   p-3 px-7 rounded-full ">
									Edit
								</button>
								<button
									onClick={() =>
										downloadPDF({ name: invoice.id, style: "full-invoice" })
									}
									className=" text-[#7e88c3] text-center bg-[#252945] hover:opacity-80   p-3 px-7 rounded-full ">
									Download Invoice
								</button>
								<button
									onClick={() => dispatch(toggleDeleteModal(true))}
									className=" -z-50 ml-3 text-center  text-white bg-red-500 hover:opacity-80 p-3 px-7 rounded-full">
									Delete
								</button>
								{invoice?.status === "pending" && (
									<button
										// onClick={onMakePaidClick}
										className=" ml-3 text-center  text-white bg-[#7c5dfa] hover:opacity-80 p-3 px-7 rounded-full">
										Make as Paid
									</button>
								)}
							</div>
						</div>

						<div className="full-invoice mt-4 rounded-lg w-full  px-6 py-6  bg-[#1e2139]">
							<div className=" flex flex-col md:flex-row items-start justify-between w-full ">
								<div>
									<h1 className=" font-semibold text-white text-xl">
										<span className="text-[#7e88c3]">#</span>
										{invoice.id}
									</h1>
									<p className=" text-sm text-gray-500">{invoice.clientName}</p>
								</div>
								<div className=" mt-4 md:mt-0 text-left text-gray-400 text-sm md:text-right felx flex-col items-center">
									<p>{invoice.senderAddress.street}</p>
									<p>{invoice.senderAddress.city}</p>
									<p>{invoice.senderAddress.postCode}</p>
									<p>{invoice.senderAddress.country}</p>
								</div>
							</div>

							<div className=" mt-10 grid grid-cols-2 w-full  md:grid-cols-3">
								<div className=" flex flex-col justify-between ">
									<div>
										<h3 className=" text-gray-400 font-thin mb-2  ">
											Invoice Date
										</h3>
										<h1 className="  font-semibold text-white">
											{formatDBDate(invoice.createdAt)}
										</h1>
									</div>
									<div>
										<h3 className=" text-gray-400 font-thin mb-2">
											Payment Due
										</h3>
										<h1 className=" text-white  font-semibold">
											{formatDBDate(invoice.paymentDue)}
										</h1>
									</div>
								</div>

								<div className="">
									<p className=" text-gray-400 font-thin mb-2">Bill to</p>
									<h1 className=" text-white  font-semibold">
										{invoice.clientName}
									</h1>
									<p className=" text-gray-400 font-thin">
										{invoice.clientAddress.street}
									</p>
									<p className=" text-gray-400 font-thin">
										{invoice.clientAddress.city}
									</p>
									<p className=" text-gray-400 font-thin">
										{invoice.clientAddress.postCode}
									</p>
									<p className=" text-gray-400 font-thin">
										{invoice.clientAddress.country}
									</p>
								</div>

								<div className=" mt-8 md:mt-0">
									<p className=" text-gray-400 font-thin mb-2">Sent to</p>
									<h1 className=" text-white  font-semibold">
										{invoice.clientEmail}
									</h1>
								</div>
							</div>

							{/* Last Section */}

							<div className=" sm:hidden mt-10  bg-[#252945] rounded-lg rounded-b-none space-y-4  p-10">
								{invoice.items.map((item, index) => (
									<div
										key={index}
										className=" justify-between  text-white flex">
										<h1>{item.name}</h1>
										<h1>£{item.total}</h1>
									</div>
								))}
							</div>

							<div className=" hidden sm:block mt-10  bg-[#252945] rounded-lg rounded-b-none space-y-4  p-10">
								{invoice.items.map((item) => (
									<div
										key={item.name}
										className=" flex justify-around  ">
										<div className=" space-y-4">
											<p className=" text-gray-400 font-thin">Item name</p>

											<h1 className=" text-white text-base font-semibold">
												{item.name}
											</h1>
										</div>
										<div className=" space-y-4">
											<p className=" text-gray-400 font-thin">Qty.</p>

											<h1 className=" text-white text-base font-semibold">
												{item.quantity}
											</h1>
										</div>
										<div className=" space-y-4">
											<p className=" text-gray-400 font-thin">Item price</p>

											<h1 className=" text-white text-base font-semibold">
												£{item.price}
											</h1>
										</div>
										<div className=" space-y-4">
											<p className=" text-gray-400 font-thin">Total</p>

											<h1 className=" text-white text-base font-semibold">
												£{item.total}
											</h1>
										</div>
									</div>
								))}
							</div>
							<div className=" p-10 font-semibold text-white rounded-lg rounded-t-none justify-between flex  bg-black ">
								<h3 className=" text-xl ">Amount Due</h3>

								<h1 className=" text-3xl">£{invoice.total}</h1>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default SingleInvoice;
