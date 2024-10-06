function Block({ children }) {
	return (
		<div className='block-container text-medium text-orange-600 py-5'>
			<p>{children}</p>
		</div>
	);
}
export default Block;
