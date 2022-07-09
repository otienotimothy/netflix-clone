export const Jumbo = ({ children, direction = "row" }) => {
	return (
		<>
			<div
				style={{ borderBottom: "8px solid #222" }}
				className="flex py-[50px] px-[5%] text-white overflow-hidden">
				<div
					className={`flex flex-${direction} items-center justify-between max-w-[1100px] w-full lg:flex-col`}>
					<div className="">{children}</div>
				</div>
			</div>
		</>
	);
};

Jumbo.Container = function({ children }) {
	return <div>{children}</div>;
};

Jumbo.Pane = function({ children }) {
	return <div className="w-1/2 lg:w-full lg:text-center lg:py-0 lg:px-[45px]" >{children}</div>;
};

Jumbo.Title = function({children}) {
    return <h1 className="text-[50px] leading-[1.1] mb-2 sm:text-[35px] " > {children} </h1>
}

Jumbo.SubTitle = function({children}) {
    return <h2 className="text-[26px] font-normal leading-[normal]" > {children} </h2>
}

Jumbo.Image = function({src, alt}){
    return <img src={src} alt={alt} className="max-w-full h-auto" />
}