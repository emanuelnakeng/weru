function Splash({ id }) {
	return (
		<div id={id} className='section-container'>
			<h2>Splash </h2>
			<p>
				Weru used components to build a dynamic and interactive splash
				screen. This method gives you more flexibility and control over
				the design and behavior of the splash screen.
			</p>
			<h4>Steps:</h4>
			<ul>
				<li>Navigate to ./utils/constants.js</li>
				<li>
					Edit the SPLASH_ICON property and reference the new icon for
					use in the splash screen.
				</li>
				<li>Save all modified files to apply the changes.</li>
			</ul>
		</div>
	);
}
export default Splash;
