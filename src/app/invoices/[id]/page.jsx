import axios from "axios";
// import { useRouter } from "next/router";
import React from "react";
import SingleInvoice from "@/components/singleInvoice";
import { auth } from "@clerk/nextjs";

async function Invoice({ params }) {
	const { userId } = auth();

	const url = process.env.API_URL_V;
	const res = await axios.get(`${url}/api/v1/invoice/${params?.id}`, {
		headers: {
			auth: userId,
		},
	});
	// const data = await invoices.json();
	// console.log(res.data.invoice);
	// console.log(params);

	return (
		<div className="relative">
			<SingleInvoice
				userId={userId}
				invoice={res.data.invoice[0]}
			/>
			{/* <DeleteModal /> */}
		</div>
	);
}

export default Invoice;
