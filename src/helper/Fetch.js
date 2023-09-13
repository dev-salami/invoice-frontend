import axios from "axios";

export const getSingleInvoice = async ({ id }) => {
	const response = await axios(
		`https://invoice-app-api-tum5.onrender.com/api/v1/invoice/${id}`
	);
	const data = await response.json();
	return data;
};
