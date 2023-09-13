import axios from "axios";
// import { useRouter } from "next/router";
import React from "react";
import SingleInvoice from "@/components/singleInvoice";

async function Invoice({ params }) {
	// const router = useRouter();
	// const { id } = router.query;
	const res = await axios(
		`http://localhost:5000/api/v1/invoice/${params?.id}`,
		{
			withCredentials: true,
			credentials: "include",
		}
	);
	// const data = await invoices.json();
	// console.log(res.data.invoice);
	// console.log(params);

	return (
		<div className="relative">
			<SingleInvoice invoice={res.data.invoice[0]} />
			{/* <DeleteModal /> */}
		</div>
	);
}

export default Invoice;
