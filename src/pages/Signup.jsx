import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

import { useAuth } from "../context/auth-context/AuthProvider";

export const Signup = () => {
	const { signup } = useAuth();

	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});

	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const { isLoading, isError, error, mutate } = useMutation((formData) =>
		signup(formData)
	);

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		mutate(formData, {
			onSuccess: (data, variables, context) => {
				console.log(data)
				navigate("/");
			}
		});
	};

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
						{isError ? (
							<p className="my-2 p-3 bg-red-400"> {error.message} </p>
						) : null}
						<form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
							<input
								className="p-3 my-2 bg-gray-700 rounded"
								type="email"
								name="email"
								value={formData.email}
								placeholder="Email"
								onChange={handleChange}
							/>
							<input
								className="p-3 my-2 bg-gray-700 rounded"
								type="password"
								name="password"
								value={formData.password}
								placeholder="Password"
								onChange={handleChange}
							/>
							<button
								disabled={isLoading}
								className="bg-red-600 py-3 my-6 rounded font-bold">
								{isLoading ? <span> Loading... </span> : <span>Sign Up</span>}
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
