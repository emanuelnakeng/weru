import CodeBlock from '../ui/CodeBlock';
function AppIcon({ id }) {
	return (
		<div id={id} className='section-container'>
			<h2>App Icon</h2>
			<p>To update the app icon, follow the steps below</p>
			<h4>Steps</h4>
			<ul>
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
		</div>
	);
}
export default AppIcon;
