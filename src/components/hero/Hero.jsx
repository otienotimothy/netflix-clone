import { useQuery } from "react-query";
import { fetchItems } from "../../api/requests";
import { URL_PATHS } from "../../api/urls";

export const Hero = () => {
	const { isLoading, isError, error, data } = useQuery("popular", () =>
		fetchItems(URL_PATHS.popular)
	);

	let movie;

	if (!isLoading) {
		movie =
			data.data.results[Math.floor(Math.random() * data.data.results.length)];
		console.log(movie);
	}

    const trancateStr = (str, num) => {
        if(str.length > num){
            return str.slice(0, num) + '...'
        } else {
            return str
        }
    }

	return (
		<div className="w-full h-[550px] text-white">
			<div className="w-full h-full">
				<div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
				<img
					src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
					alt=""
					className="w-full h-full object cover"
				/>
				<div className="absolute w-full top-[20%] p-4 md:p-8">
					<h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
					<div className="my-4">
						<button className="border rounded border-gray-300 bg-gray-300 text-black py-2 px-5">
							Play
						</button>
						<button className="border rounded border-gray-300 text-white py-2 px-5 ml-4">
							Watch Later
						</button>
					</div>
					<p className="text-gray-400 text-sm">
						{" "}
						Released: {movie?.release_date}
					</p>
					<p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-300">
						{movie && trancateStr(movie.overview, 150)}
					</p>
				</div>
			</div>
		</div>
	);
};
