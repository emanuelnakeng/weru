function ScreenWrap({ children, mobileBg, largeBg }) {
	return (
		<div
			className={`flex flex-col w-screen items-center  bg-[${mobileBg}] sm:bg-${largeBg}`}
		>
			{children}
		</div>
	);
}
export default ScreenWrap;
