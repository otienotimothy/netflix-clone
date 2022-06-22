import { Link } from "react-router-dom";

export const Signup = () => {
	return (
		<div className="w-full h-screen">
			<img
				className="hidden sm:block absolute w-full h-full object-cover"
				src="https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/9db86ec0-0032-4e0c-a0bd-b0b54864f466/KE-en-20220613-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
				alt="netflix-bg"
			/>
			<div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
			<div className="fixed w-full px-4 py-24 z-50">
				<div className="max-w-[450px] h-[500px] mx-auto bg-black/75 text-white">
					<div className="max-w-[320px] mx-auto py-16">
						<h1 className="text-3xl font-bold">Sign Up</h1>
						<form className="w-full flex flex-col py-4">
							<input
								className="p-3 my-2 bg-gray-700 rounded"
								type="email"
								name=""
								id=""
								placeholder="Email"
							/>
							<input
								className="p-3 my-2 bg-gray-700 rounded"
								type="password"
								name=""
								id=""
								placeholder="Password"
							/>
							<button className="bg-red-600 py-3 my-6 rounded font-bold">
								Sign Up
							</button>
						</form>
						<div className="flex justify-between items-center text-sm text-gray-600">
							<p>
								{" "}
								<input className="mr-2" type="checkbox" /> Remember me{" "}
							</p>
							<p> Need help? </p>
						</div>
						<p className="py-4">
							<span className="text-gray-600">Already have an Account?</span>
							<Link to="/login"> Login </Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
