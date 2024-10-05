function ScreenWrap({ children }) {
	return (
		<div className='flex flex-col w-screen items-center bg-[#0e0910] sm:bg-bg-clr'>
			{children}
		</div>
	);
}
export default ScreenWrap;
