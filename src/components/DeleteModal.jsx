"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDeleteModal } from "@/redux/features/crudSlice";
import axios from "axios";
import { useRouter } from "next/navigation";

function DeleteModal({ id }) {
	const dispatch = useDispatch();
	const router = useRouter();
	const [msg, setmsg] = useState("");

	const url = process.env.API_URL_V;
	const deleteInvoice = () => {
		axios
			.delete(`http://localhost:5000/api/v1/invoice/${id}`)
			.then((res) => {
				console.log(res);
				setmsg("Invoice deleted successfully");
				setTimeout(() => {
					router.push("/invoices");
				}, 2000);
			})
			.catch((err) => {
				console.log(err);
				setmsg("An error occurred");
				setTimeout(() => {
					router.push("/invoices");
				}, 2000);
			});
	};

	return (
		<div className="relative">
			<div
				onClick={() => {
					dispatch(toggleDeleteModal(false));
				}}
				className="fixed inset-0 bg-black/70  "></div>
			<div className=" z-10 fixed inset-0 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-sm  p-8 rounded-xl h-fit bg-gray-800 ">
				{msg ? (
					<p className="text-white font-semibold">{msg}</p>
				) : (
					<div className="flex flex-col gap-4">
						<h2 className="text-red-600 font-semibold">Confirm Deletion</h2>

						<p className="text-gray-400 text-xs font-semibold">
							{`Are you sure you want to delete invoice RT3080? This action cannot be undone.`}
						</p>
						<div className="flex justify-around w-full font-semibold text-sm">
							<button
								onClick={() => {
									dispatch(toggleDeleteModal(false));
									console.log("delete modal");
								}}
								className="rounded-md text-white bg-red-500 px-5 py-1">
								Delete
							</button>
							<button
								onClick={deleteInvoice}
								className="rounded-md text-blue-700 bg-white px-5 py-1">
								Cancel
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default DeleteModal;
