import { Link } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useAuth } from "../../context/auth-context/AuthProvider";


export const Navbar = () => {
	const { user, logoutUser } = useAuth();
	

	return (
		<div className="flex items-center justify-between p-4 z-[100] absolute w-full">
			<h1 className="text-red-600 text-4xl font-bold cursor-pointer">
				NETFLIX
			</h1>
			{user ? (
				<div>
					<button className="text-white pr-4">My Profile</button>
					<button onClick={logoutUser} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
						Logout
					</button>
				</div>
			) : (
				<div>
					<Link to="/login" className="text-white pr-4">Sign In</Link>
					<Link to="/signup" className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
						Sign Up
					</Link>
				</div>
			)}
		</div>
	);
};
