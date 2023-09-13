import React, { useState } from "react";

function Form() {
	const [inputs, setInputs] = useState([
		{ itemName: "", quantity: "", price: "", total: "" },
	]);

	const handleInputChange = (index, event) => {
		const { name, value } = event.target;
		const newInputs = [...inputs];
		newInputs[index] = { ...newInputs[index], [name]: value };
		setInputs(newInputs);
	};

	const handleAddInput = () => {
		setInputs([...inputs, { itemName: "", quantity: "", total: "" }]);
	};

	const handleDeleteInput = (index) => {
		const newInputs = [...inputs];
		newInputs.splice(index, 1);
		setInputs(newInputs);
	};
	const handleFormSubmit = (event) => {
		event.preventDefault();
		// Retrieve all input data from the state
		const inputData = inputs.map((input) => ({
			itemName: input.itemName,
			quantity: input.quantity,
			total: input.total,
		}));
		// Perform desired action with the input data
		console.log(inputData);
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
							className="dark:bg-[#1e2139] w-full border-[.2px] rounded-lg  focus:outline-purple-400 border-gray-300 focus:outline-none  dark:border-gray-800  px-2 py-1
                        "
							type="text"
							name="itemName"
							value={input.itemName}
							onChange={(event) => handleInputChange(index, event)}
							placeholder="Item Name"
						/>
					</div>

					<div className=" flex flex-col gap-1 w-fit  ">
						<label className=" text-gray-400 label text-sm">Qty</label>

						<input
							className="dark:bg-[#1e2139] w-10 md:w-20 border-[.2px] rounded-lg  focus:outline-purple-400 border-gray-300 focus:outline-none  dark:border-gray-800  p-1
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
							className="dark:bg-[#1e2139] w-16 sm:w-28 border-[.2px] rounded-lg  focus:outline-purple-400 border-gray-300 focus:outline-none  dark:border-gray-800  p-1
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
							className="dark:bg-[#1e2139] w-16 sm:w-28   border-[.2px] rounded-lg  focus:outline-purple-400 border-gray-300 focus:outline-none  dark:border-gray-800  p-1
                        "
							type="text"
							name="total"
							contentEditable="false"
							value={input.total}
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

	return (
		<div>
			{renderInputs()}
			{/* <hr /> */}
			{/* <hr className="border mt-4  " /> */}

			<button
				className="my-4 bg-[#1e2139] w-full font-semibold py-1 px-3 rounded-xl"
				onClick={handleAddInput}>
				Add New Item
			</button>
			<button
				className="my-4 bg-[#1e2139] w-full font-semibold py-1 px-3 rounded-xl"
				onClick={handleFormSubmit}>
				submit form
			</button>
		</div>
	);
}

export default Form;
