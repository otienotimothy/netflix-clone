export const Jumbo = ({ children, direction = "row" }) => {
	return (
		<>
			<div
				style={{ borderBottom: "8px solid #222" }}
				className="flex py-[60px] px-[5%] text-white overflow-hidden">
				<div
					className={`flex ${direction} flex-wrap items-center justify-center md:justify-between max-w-[1100px] w-full`}>
					{children}
				</div>
			</div>
		</>
	);
};

Jumbo.Container = function({ children }) {
	return <div>{children}</div>;
};

Jumbo.Pane = function({ children }) {
	return <div className="w-1/2 min-w-[320px] text-center lg:py-0 lg:px-[45px]" >{children}</div>;
};

Jumbo.Title = function({children}) {
    return <h1 className="text-[30px] md:text-[40px] lg:text-[50px] leading-[1.1] mb-2" > {children} </h1>
}

Jumbo.SubTitle = function({children}) {
    return <h2 className="text-[20px] md:text-[26px] lg:text-[30px] font-normal leading-[normal]" > {children} </h2>
}

Jumbo.Image = function({src, alt}){
    return <img src={src} alt={alt} className="max-w-full h-auto" />
}