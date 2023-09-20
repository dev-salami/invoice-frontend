import { UserProfile } from "@clerk/nextjs";

const ProfilePage = () => {
	return (
		<section className=" flex justify-center items-center">
			<UserProfile />
		</section>
	);
};

export default ProfilePage;
