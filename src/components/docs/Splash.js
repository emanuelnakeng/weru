import DocsSection from '../ui/DocsSection';

function Splash({ id }) {
	return (
		<DocsSection id={id}>
			<h2 className='text-3xl font-bold text-bg-clr'>Splash </h2>
			<p>
				Weru uses components to build a dynamic and interactive splash
				screen. This method gives you more flexibility and control over
				the design and behavior of the splash screen.
			</p>
			<h4 className='font-semibold'>Steps:</h4>
			<ul className='ml-10 list-disc ml-10'>
				<li>Navigate to ./utils/constants.js</li>
				<li>
					Edit the SPLASH_ICON property and reference the new icon for
					use in the splash screen.
				</li>
				<li>Save all modified files to apply the changes.</li>
			</ul>
		</DocsSection>
	);
}
export default Splash;
