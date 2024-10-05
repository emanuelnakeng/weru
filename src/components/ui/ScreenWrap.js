function ScreenWrap({ children }) {
	return (
		<div className='flex flex-col w-screen items-center bg-bg-clr '>
			{children}
		</div>
	);
}
export default ScreenWrap;
