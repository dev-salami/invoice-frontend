import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
	return (
		<section className="flex justify-center items-center mt-6">
			<SignIn />
		</section>
	);
};
export default SignInPage;
