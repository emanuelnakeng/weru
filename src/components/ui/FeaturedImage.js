function FeaturedImage() {
	return (
		<div
			className={`h-[45vh] w-full rounded-3xl text-white text-center flex flex-col items-center bg-cover bg-[url('https://images.pexels.com/photos/4199042/pexels-photo-4199042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]`}
		>
			<div className='flex flex-col justify-center items-center bg-gray-800 bg-opacity-70 w-full h-full rounded-3xl '>
				<div className='sm:w-4/6'>
					<h1 className='text-4xl sm:text-4xl font-extrabold text-center leading-relaxed '>
						Discover convenience and ease of use
					</h1>
				</div>
			</div>
		</div>
	);
}
export default FeaturedImage;
