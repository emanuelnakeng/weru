function DocsSection({ id, children }) {
	return (
		<div
			id={id}
			className='bg-white px-5 sm:px-10 rounded-xl py-10 w-full mb-10 flex flex-col gap-5 text-gray-500'
		>
			{children}
		</div>
	);
}
export default DocsSection;
