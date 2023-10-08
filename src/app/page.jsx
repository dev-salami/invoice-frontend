// "use client";
// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";

// export default function Example() {
// 	// const [name, setname] = useState("");
// 	// const [password, setpassword] = useState("");
// 	// const url = process.env.API_URL_V;

// 	// const data = { email: name, password: password };
// 	// const login = (e) => {
// 	// 	e.preventDefault();
// 	// 	axios
// 	// 		.post(`${url}/api/v1/auth/login`, data, {
// 	// 			withCredentials: true,
// 	// 		})
// 	// 		.then((res) => console.log(res.data))
// 	// 		.catch((err) => console.log(err.response.data));

// 	// 	// console.log(JSON.stringify(data));
// 	// };
// 	// const random = () => {
// 	// 	axios
// 	// 		.get(`${url}/set-cookie`, {
// 	// 			withCredentials: true,
// 	// 		})
// 	// 		.then((res) => console.log(res.data))
// 	// 		.catch((err) => console.log(err));

// 	// 	// console.log(JSON.stringify(data));
// 	// };

// 	return (
// 		<>
// 			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
// 				{/* <button
// 					onClick={random}
// 					className=" text-xl ">

// 				</button> */}
// 				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
// 					<p>LOGO IMAGE</p>
// 					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
// 						Sign in to your account
// 					</h2>
// 				</div>

// 				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
// 					<form className="space-y-6">
// 						<div>
// 							<label
// 								htmlFor="email"
// 								className="block text-sm font-medium leading-6 text-gray-400">
// 								Email address
// 							</label>
// 							<div className="mt-2">
// 								<input
// 									onChange={(e) => setname(e.target.value)}
// 									id="email"
// 									name="email"
// 									type="email"
// 									autoComplete="email"
// 									required
// 									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
// 								/>
// 							</div>
// 						</div>

// 						<div>
// 							<label
// 								htmlFor="password"
// 								className="block text-sm font-medium leading-6 text-gray-500">
// 								Password
// 							</label>
// 							<div className="mt-2">
// 								<input
// 									onChange={(e) => setpassword(e.target.value)}
// 									id="password"
// 									name="password"
// 									type="password"
// 									autoComplete="current-password"
// 									required
// 									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
// 								/>
// 							</div>
// 							<div className="flex items-center justify-end text-sm mt-2">
// 								<Link
// 									href="/"
// 									className="font-semibold text-indigo-500 hover:text-indigo-500">
// 									Forgot password?
// 								</Link>
// 							</div>
// 						</div>

// 						<div>
// 							<button
// 								onClick={login}
// 								type="submit"
// 								className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
// 								Sign in
// 							</button>
// 						</div>
// 					</form>

// 					<p className="mt-10 text-right text-sm text-gray-500">
// 						<span> {`Don't have an account  ?`}</span>{" "}
// 						<Link
// 							href="/"
// 							className="font-semibold leading-6 pr-2 text-indigo-500 hover:text-indigo-500">
// 							Register
// 						</Link>
// 					</p>
// 				</div>
// 			</div>
// 		</>
// 	);
// }
import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import invoice from "../../public/assets/invoice.webp";
import Image from "next/image";

const Header = async ({ username }) => {
	const { userId } = auth();

	return (
		<section className="  container   my-6  mx-auto">
			{/* <div className="flex items-center">
				<Link href="/">
					<div className="text-lg font-bold text-white uppercase">
						Invoice Generator App
					</div>
				</Link>
			</div> */}
			{/* <div className="flex items-center justify-center text-white">
				{!userId && (
					<>
						<Link
							href="sign-in"
							className="text-gray-300 hover:text-white mr-4">
							Sign In
						</Link>
						<Link
							href="sign-up"
							className="text-gray-300 hover:text-white mr-4">
							Sign Up
						</Link>
					</>
				)}
			
			</div> */}
			<div className="text-center max-w-xl flex flex-col gap-4 mx-auto w-fit ">
				<h1 className="text-4xl font-bold">Invoicea</h1>
				<h2 className="text-2xl font-bold">
					Start Generating Invoices In Few Steps
				</h2>
				<p className="text-gray-400 ">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
					repudiandae quo, nesciunt exercitationem quae sapiente reiciendis quas
					possimus aperiam? Non.
				</p>
			</div>
			<div className="w-fit mx-auto my-4 flex  gap-4">
				{!userId ? (
					<>
						<Link
							href="sign-up"
							className=" border text-xs px-6 py-2 rounded-md w-fit bg-black/40">
							Sign Up
						</Link>
						<Link
							href="sign-in"
							className=" border text-xs px-6 py-2 rounded-md w-fit bg-black/40">
							Sign In
						</Link>
					</>
				) : (
					<Link
						href="invoices"
						className=" border text-xs px-6 py-2 rounded-md w-fit bg-black/40">
						View Invoices
					</Link>
				)}
			</div>
			<div className="w-fit mx-auto">
				<Image
					alt="header-image"
					src={invoice}></Image>
			</div>
		</section>
	);
};

export default Header;
