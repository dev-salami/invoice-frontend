"use client";
import React, { useState } from "react";
import { generateID, getFormattedDate, getFutureDate } from "@/helper/utils";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toggleCreateModal, toggleEditModal } from "@/redux/features/crudSlice";
import { useRouter } from "next/router";

function EditInvoice({ invoice }) {
	const { createModalOpen } = useSelector((state) => state.crud);
	const dispatch = useDispatch();

	const [loading, setloading] = useState(false);
	const [successMsg, setsuccessMsg] = useState("");
	const [errorMsg, seterrorMsg] = useState("");
	const [fromAddress, setfromAddress] = useState(invoice?.senderAddress.street);
	const [fromCode, setfromCode] = useState(invoice?.senderAddress.city);
	const [fromCity, setfromCity] = useState(invoice?.senderAddress.postCode);
	const [fromCountry, setfromCountry] = useState(
		invoice?.senderAddress.country
	);
	const [Name, setName] = useState(invoice?.clientName);
	const [Email, setEmail] = useState(invoice?.clientEmail);
	const [toAddress, settoAddress] = useState(invoice?.senderAddress.street);
	const [toCode, settoCode] = useState(invoice?.senderAddress.city);
	const [toCity, settoCity] = useState(invoice?.senderAddress.postCode);
	const [toCountry, settoCountry] = useState(invoice?.senderAddress.country);
	const [description, setdescription] = useState(invoice?.description);
	const [payment__terms, setpayment__terms] = useState(invoice.payment__terms);

	// section test
	const [inputs, setInputs] = useState([
		// { name: "", quantity: "", price: "", total: "" },
		...invoice.items,
	]);

	const handleInputChange = (index, event) => {
		const { name, value } = event.target;
		const newInputs = [...inputs];
		newInputs[index] = { ...newInputs[index], [name]: value };
		setInputs(newInputs);
	};

	const handleAddInput = () => {
		setInputs([...inputs, { name: "", quantity: "", price: "", total: "" }]);
	};

	const handleDeleteInput = (index) => {
		const newInputs = [...inputs];
		newInputs.splice(index, 1);
		setInputs(newInputs);
	};
	const itemListSubmit = (event) => {
		// event.preventDefault();
		// Retrieve all input data from the state
		const inputData = inputs.map((input) => ({
			name: input.name,
			quantity: input.quantity,
			price: input.price,

			total: input.quantity * input.price,
		}));
		return inputData;
		// Perform desired action with the input data
		// console.log(inputData);
	};
	const CreateInvoice = () => {
		const id = generateID();
		const date = getFormattedDate();
		const due = getFutureDate(+payment__terms);
		const items = itemListSubmit();

		const dataMag = {
			id: id,
			createdAt: date,
			paymentDue: due,
			description: description,
			paymentTerms: payment__terms,
			clientName: Name,
			clientEmail: Email,
			status: "draft",
			senderAddress: {
				street: fromAddress,
				city: fromCity,
				postCode: fromCode,
				country: fromCountry,
			},
			clientAddress: {
				street: toAddress,
				city: toCity,
				postCode: toCode,
				country: toCountry,
			},
			items: items,
			total: 3102.04,
		};
		console.log(dataMag);
		setloading(true);

		axios
			.post("https://invoice-app-api-tum5.onrender.com/api/v1/invoice", dataMag)
			.then((res) => {
				console.log(res.data);
				setloading(false);
				setsuccessMsg("Your Invoice has successfully been created.");
				setTimeout(() => {
					setshowCreateComponent(false);
					setsuccessMsg("");
				}, 3000);
			})
			.catch((err) => {
				console.log(err);
				setloading(false);
				seterrorMsg("An error has occured");
				setTimeout(() => {
					setshowCreateComponent(false);
					seterrorMsg("");
				}, 3000);
			});
	};

	const renderInputs = () => {
		return inputs.map((input, index) => (
			<>
				<div
					className="flex px-4  gap-3"
					key={index}>
					<div className=" flex flex-col gap-1 w-full ">
						<label className=" text-gray-400 label text-sm">Name</label>

						<input
							className="bg-[#1e2139] w-full border-[.2px] rounded-lg  focus:outline-purple-400  focus:outline-none  border-gray-800  px-2 py-1
                        "
							type="text"
							name="name"
							value={input.name}
							onChange={(event) => handleInputChange(index, event)}
							placeholder="Item Name"
						/>
					</div>

					<div className=" flex flex-col gap-1 w-fit  ">
						<label className=" text-gray-400 label text-sm">Qty</label>

						<input
							className="bg-[#1e2139] w-10 md:w-20 border-[.2px] rounded-lg  focus:outline-purple-400  focus:outline-none  border-gray-800  p-1
                        "
							type="text"
							name="quantity"
							value={input.quantity}
							onChange={(event) => handleInputChange(index, event)}
						/>
					</div>
					<div className=" flex flex-col gap-1 w-fit  ">
						<label className=" text-gray-400 label text-sm">Price</label>

						<input
							className="bg-[#1e2139] w-16 sm:w-28 border-[.2px] rounded-lg  focus:outline-purple-400  focus:outline-none  border-gray-800  p-1
                        "
							type="text"
							name="price"
							value={input.price}
							onChange={(event) => handleInputChange(index, event)}
							placeholder="Price"
						/>
					</div>

					<div className=" flex flex-col gap-1 w-fit    ">
						<label className=" text-gray-400 label text-sm">Total</label>

						<input
							className="bg-[#1e2139] w-16 sm:w-28   border-[.2px] rounded-lg  focus:outline-purple-400  focus:outline-none  border-gray-800  p-1
                        "
							type="text"
							name="total"
							contentEditable="false"
							value={(input.price * input.quantity).toFixed(2)}
							onChange={(event) => handleInputChange(index, event)}
							placeholder="Total"
						/>
					</div>
					{/* <input
					type="number"
					name="total"
					value={input.total}
					onChange={(event) => handleInputChange(index, event)}
					placeholder="Total"
				/> */}
					{index > 0 && (
						<button
							className="flex items-end text-2xl font-extrabold "
							onClick={() => handleDeleteInput(index)}>
							*
						</button>
					)}
				</div>
				<hr className="border my-4  " />
			</>
		));
	};

	// section test

	return (
		<section>
			<div
				onClick={() => dispatch(toggleEditModal(false))}
				className="fixed inset-0 bg-black/90"></div>
			{/* <h1 className=" text-xl h-28 fixed bg-[#141625] z-50 p-8 border-red-500 border-2 top-0 w-full font-bold sm:text-2xl ">
				Create Invoice
			</h1> */}
			<div className="bg-[#141625] fixed top-0 overflow-y-scroll scrollbar-hide bottom-0 left-0 w-full md:w-[750px] right-0  rounded-r-3xl lg:pl-[100px]">
				<div className=" text-xl  sticky top-0  w-full  bg-[#141625] z-50 p-8 text-center    font-bold sm:text-2xl ">
					<h1>Edit Invoice</h1>
					{successMsg && (
						<p className="text-sm font-bold text-green-500">{successMsg}</p>
					)}
					{errorMsg && (
						<p className="text-sm font-bold text-red-500">{errorMsg}</p>
					)}
				</div>

				{/* <button onClick={() => CreateInvoice()}>test</button> */}
				<form
					action=""
					className=" px-4 mt-12">
					<div className="">
						<h1 className="text-purple-400 my-3">Bill From</h1>

						<div className="flex sm:flex-row flex-col gap-3">
							<div className=" flex flex-col gap-1 w-full ">
								<label className=" text-gray-400 label text-sm">
									Street Address
								</label>
								<input
									required
									value={fromAddress}
									id="senderStreet"
									onChange={(e) => setfromAddress(e.target.value)}
									type="text"
									className={`bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400  focus:outline-none  border-gray-800 `}
								/>
							</div>
							<div className=" flex flex-col gap-1  ">
								<label className=" text-gray-400 label text-sm">
									Post Code
								</label>
								<input
									required
									value={fromCode}
									id="senderStreet"
									onChange={(e) => setfromCode(e.target.value)}
									type="text"
									className={`bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400  focus:outline-none  border-gray-800 `}
								/>
							</div>
						</div>
						<div className="flex sm:flex-row flex-col gap-3">
							<div className=" flex flex-col gap-1 w-full ">
								<label className=" text-gray-400 label text-sm">City</label>
								<input
									required
									value={fromCity}
									id="senderStreet"
									onChange={(e) => setfromCity(e.target.value)}
									type="text"
									className={`bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400  focus:outline-none  border-gray-800 `}
								/>
							</div>

							<div className=" flex flex-col gap-1 w-full">
								<label className=" text-gray-400 label text-sm">Country</label>
								<input
									required
									value={fromCountry}
									id="senderStreet"
									onChange={(e) => setfromCountry(e.target.value)}
									type="text"
									className={`bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400  focus:outline-none  border-gray-800 `}
								/>
							</div>
						</div>
					</div>
					{/* Bill TO */}
					<div className="flex flex-col gap-4 mt-8 mb-16">
						<h1 className="text-purple-400 my-3">Bill To</h1>
						<div>
							<div className=" flex flex-col gap-1 w-full ">
								<label className=" text-gray-400 label text-sm">
									Client Name
								</label>
								<input
									required
									value={Name}
									id="senderStreet"
									onChange={(e) => setName(e.target.value)}
									type="text"
									className={`bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400  focus:outline-none  border-gray-800 `}
								/>
							</div>
							<div className=" flex flex-col gap-1 w-full ">
								<label className=" text-gray-400 label text-sm">
									Client Email
								</label>
								<input
									required
									value={Email}
									id="senderStreet"
									onChange={(e) => setEmail(e.target.value)}
									type="text"
									className={`bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400  focus:outline-none  border-gray-800 `}
								/>
							</div>
						</div>
						<div className="flex sm:flex-row flex-col gap-3">
							<div className=" flex flex-col gap-1 w-full ">
								<label className=" text-gray-400 label text-sm">
									Street Address
								</label>
								<input
									required
									value={toAddress}
									id="senderStreet"
									onChange={(e) => settoAddress(e.target.value)}
									type="text"
									className={`bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400  focus:outline-none  border-gray-800 `}
								/>
							</div>
							<div className=" flex flex-col gap-1  ">
								<label className=" text-gray-400 label text-sm">
									Post Code
								</label>
								<input
									required
									value={toCode}
									id="senderStreet"
									onChange={(e) => settoCode(e.target.value)}
									type="text"
									className={`bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400  focus:outline-none  border-gray-800 `}
								/>
							</div>
						</div>
						<div className="flex sm:flex-row flex-col gap-3">
							<div className=" flex flex-col gap-1 w-full ">
								<label className=" text-gray-400 label text-sm">City</label>
								<input
									required
									value={toCity}
									id="senderStreet"
									onChange={(e) => settoCity(e.target.value)}
									type="text"
									className={`bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400  focus:outline-none  border-gray-800 `}
								/>
							</div>

							<div className=" flex flex-col gap-1 w-full">
								<label className=" text-gray-400 label text-sm">Country</label>
								<input
									required
									value={toCountry}
									id="senderStreet"
									onChange={(e) => settoCountry(e.target.value)}
									type="text"
									className={`bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400  focus:outline-none  border-gray-800 `}
								/>
							</div>
						</div>
						<div className="flex sm:flex-row flex-col gap-3">
							<div className=" flex flex-col gap-1 w-full ">
								<label className=" text-gray-400 label text-sm">
									Description
								</label>
								<input
									required
									value={description}
									id="senderStreet"
									onChange={(e) => setdescription(e.target.value)}
									type="text"
									className={`bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400  focus:outline-none  border-gray-800 `}
								/>
							</div>

							<div className=" flex flex-col gap-1 w-fit">
								<label className=" text-gray-400 label text-sm">
									Payment Terms
								</label>
								<select
									onChange={(e) => setpayment__terms(e.target.value)}
									className={`bg-[#1e2139] w-40 py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400  focus:outline-none  border-gray-800 `}
									name="payment__terms"
									id="payment">
									<option value="1">Next 1 day</option>
									<option value="7">Next 7 day</option>
									<option value="14">Next 14 day</option>
									<option value="30">Next 30 day</option>
								</select>
							</div>
						</div>
					</div>
				</form>
				<h1 className="font-semibold md:text-2xl text-xl text-gray-400 p-4">
					Item List
				</h1>
				{/* <Form /> */}
				<div>
					{renderInputs()}
					{/* <hr /> */}
					{/* <hr className="border mt-4  " /> */}

					<button
						className="my-4 bg-[#1e2139] w-full font-semibold py-1 px-3 rounded-xl"
						onClick={handleAddInput}>
						Add New Item
					</button>
					{/* <button
				className="my-4 bg-[#1e2139] w-full font-semibold py-1 px-3 rounded-xl"
				onClick={handleFormSubmit}>
				submit form
			</button> */}
				</div>
				<div className=" flex justify-around text-white capitalize  sticky bottom-0  w-full  bg-[#141625] z-50 p-4     ">
					<button
						onClick={() => dispatch(toggleEditModal(false))}
						className="capitalize px-6 py-3 rounded-full bg-[#1e2139]">
						Cancel
					</button>
					<button
						onClick={() => CreateInvoice()}
						className="capitalize  px-3 py-2 rounded-full bg-purple-500 flex gap-4 items-center">
						<span>save & send</span>
						{loading && <AiOutlineLoading3Quarters className="animate-spin" />}
					</button>
				</div>
			</div>
		</section>
	);
}

export default EditInvoice;
