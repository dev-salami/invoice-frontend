import InvoiceItem from "@/components/invoiceItem";
// import Data from "@/data/data";
import NavSelect from "@/components/NavSelect";
import CreateInvoice from "@/components/CreateInvoice";
import axios from "axios";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// export const getStaticProps = async () => {
// 	const res = await axios.get(
// 		"https://invoice-app-api-tum5.onrender.com/api/v1/invoice"
// 	);
// 	const data = await res.data;
// 	return { props: { data } };
// };

// };
const url = process.env.API_URL_V;
// console.log(url);
const res = await axios(`${url}/api/v1/invoice`);
// const data = await invoices.json();
// console.log(res.data.invoices);

export default async function Home({ data }) {
	// const me = useSelector((state) => state.crud.me);
	// console.log(me);
	// const invoicelength = useSelector((state) => state.crud.me);

	// const [showCreateComponent, setshowCreateComponent] = useState(false);
	const toggleCreateComponent = () => {
		// setshowCreateComponent((prev) => !prev);
		// console.log("test");
	};
	// console.log(data);
	return (
		<>
			{/* <TopBar />
			<SideBar /> */}
			{/* {showCreateComponent && (
				<CreateInvoice toggleCreateComponent={toggleCreateComponent} />
			)} */}
			<CreateInvoice />
			<section className="lg:pl-[100px] pl-0   ">
				<NavSelect invoiceLength={res.data.invoices.length} />
				<div className=" flex justify-center items-center lg:w-[70%] mx-auto flex-col gap-8 p-6">
					{res.data.invoices.map((invoice) => (
						<InvoiceItem
							key={invoice.id}
							invoice={invoice}
						/>
					))}
					Testing
				</div>
			</section>
		</>
	);
}