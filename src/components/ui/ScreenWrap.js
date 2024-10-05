function ScreenWrap({ children, classProps }) {
	console.log(classProps);

	return (
		<div className={`flex flex-col w-screen items-center ${classProps} `}>
			{children}
		</div>
	);
}
export default ScreenWrap;

//bg-[{mobileBg}] sm:bg-${largeBg}
