function MoreFeatures(params) {
	return (
		<section className='moreFeaturesContainer'>
			<h2>Other key features</h2>
			<h3>
				Whether it's for the local gym or the largest super store, your
				users can add the card on your app.
			</h3>
			<div className='featuresContainer'>
				{params.features.map((feature, index) => {
					console.log(index);

					return (
						<h4 className='keyFeature' key={'_' + toString(index)}>
							{feature}
						</h4>
					);
				})}
			</div>
		</section>
	);
}

export default MoreFeatures;
