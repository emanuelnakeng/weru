import DocsSection from '../ui/DocsSection';

const image = require('../../assets/app-nam.png');

function AppName({ id }) {
	return (
		<DocsSection id={id}>
			<h2 className='text-3xl font-bold text-bg-clr'>App Name</h2>
			<p>
				To change the app name from "weru" to your own, navigate to
				./app.json
			</p>
			<img
				src={image}
				alt='App name'
				className='sm:w-4/5 w-full rounded-lg'
			/>
			<h4 className='font-semibold'>Steps:</h4>
			<ul>
				<li>
					Replace all instances of "Weru" with your desired app name.
				</li>
				<li>Save all modified files to apply the changes.</li>
			</ul>
		</DocsSection>
	);
}
export default AppName;
