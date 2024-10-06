import CodeBlock from '../ui/CodeBlock';
import DocsSection from '../ui/DocsSection';
function AppIcon({ id }) {
	return (
		<DocsSection id={id}>
			<h2 className='text-3xl font-bold text-bg-clr'>App Icon</h2>
			<p>To update the app icon, follow the steps below</p>
			<h4 className='font-semibold'>Steps</h4>
			<ul className='ml-10 list-disc'>
				<li>
					Create various sizes and formats of your logo to ensure
					compatibility across different devices and platforms here:{' '}
					<a href='https://appicon.co/'>https://appicon.co/</a>
				</li>
				<li>Unzip the files and upload to ./assets</li>
				<li>Ensure that in app.json the correct icon is referenced</li>
				<li>Save all modified files to apply the changes.</li>
			</ul>
			<CodeBlock code='"expo": "icon" : "./assets/icon.png"' />
		</DocsSection>
	);
}
export default AppIcon;
