function StackedCards(params) {
	return (
		<section className='stackedContainer'>
			<h2 className='sectionTitle'>Beautiful stacked cards</h2>
			<div className='sectionKeywordsContainer'>
				{params.keywords.map((keyword, index) => {
					return <h3>{keyword}</h3>;
				})}
			</div>
			<div>
				<img
					src={params.image}
					alt='screens'
					className='stackedImage'
				/>
			</div>
		</section>
	);
}

export default StackedCards;
