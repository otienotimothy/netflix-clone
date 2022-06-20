import {useRef} from 'react'
import { useQuery } from "react-query";
import { fetchItems } from "../../api/requests";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { Movie } from "../movie/Movie";

export const Row = ({ title, url }) => {
	const { isError, isLoading, error, data } = useQuery(title, () =>
		fetchItems(url)
	);

	const scrollRef = useRef(null)

	const scrollRight = () => {
		scrollRef.current.scrollLeft = scrollRef.current.scrollLeft -500
	}

	const scrollLeft = () => {
		scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + 500
	}

	return (
		<>
			<h2 className="text-white font-bold md:text-lg p-4">{title}</h2>
			<div className="relative flex items-center group">
				<MdChevronLeft
					onClick={scrollLeft}
					className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
					size={40}
				/>
				<div
					id={"slider"}
					ref={scrollRef}
					className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
					{data &&
						data.data.results.map((movie) => (
							<Movie key={movie.id} item={movie} />
						))}
				</div>
				<MdChevronRight
					onClick={scrollRight}
					className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
					size={40}
				/>
			</div>
		</>
	);
};
