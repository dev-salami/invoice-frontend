"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCreateModal } from "@/redux/features/crudSlice";

function NavSelect() {
	// const { toggleCreateModal } = useSelector((state) => state.crud);
	const dispatch = useDispatch();
	const me = () => dispatch(toggleCreateModal(false));

	return (
		<div className="m-8 p-6  lg:mt-10 lg:w-[70%] mx-auto flex justify-between items-center px-6">
			<div className="flex flex-col  text-white justify-center ">
				<div className="font-semibold text-lg">Invoices</div>
				<div className="text-white">{`There are 45 total invoices.`}</div>
			</div>
			<div className="flex gap-3  ">
				<select
					className="rounded-2xl bg-transparent h-fit my-auto p-2 font-semibold  text-sm"
					name="status"
					id="">
					<option
						className="select__option"
						value="">
						Status
					</option>
					<option
						className="select__option"
						value="paid">
						Paid
					</option>
					<option
						className="select__option"
						value="pending">
						Pending
					</option>
					<option
						className="select__option"
						value="draft">
						Draft
					</option>
				</select>
				<button
					onClick={() => dispatch(toggleCreateModal(true))}
					className="bg-purple-500 rounded-3xl p-2  h-fit flex items-center">
					<div className="bg-white text-xl flex items-center justify-center text-purple-500 rounded-full h-6 w-6 font-bold">
						+
					</div>
					<div className="font-medium text-sm">
						<span className="hidden md:inline text-white pl-4">
							New invoice
						</span>

						<span className="md:hidden  text-white pl-4">New </span>
					</div>
				</button>
			</div>
		</div>
	);
}

export default NavSelect;
