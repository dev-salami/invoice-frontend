import InvoiceItem from "@/components/invoiceItem";
import NavSelect from "@/components/NavSelect";
import CreateInvoice from "@/components/CreateInvoice";
import axios from "axios";
import { auth } from "@clerk/nextjs";

const url = process.env.API_URL_V;

export default async function Home({ data }) {
	const { userId } = auth();
	const res = await axios.get(`${url}/api/v1/invoice`, {
		headers: {
			auth: userId,
		},
	});

	return (
		<>
			<CreateInvoice userId={userId} />
			<section className="lg:pl-[100px] pl-0   ">
				<NavSelect invoiceLength={res.data.invoices.length} />
				<div className=" flex justify-center items-center lg:w-[70%] mx-auto flex-col gap-8 p-6">
					{res.data.invoices.length > 0 ? (
						<>
							{res.data.invoices.map((invoice) => (
								<InvoiceItem
									key={invoice.id}
									invoice={invoice}
								/>
							))}
						</>
					) : (
						<div className="flex justify-center items-center text-4xl font-semibold">
							You Currently do not have any Invoices
						</div>
					)}
				</div>
			</section>
		</>
	);
}
