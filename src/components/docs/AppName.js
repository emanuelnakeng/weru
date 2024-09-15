const image = require('../../assets/app-nam.png');

function AppName({ id }) {
	return (
		<div id={id} className='section-container'>
			<h2>App Name</h2>
			<p>
				To change the app name from "weru" to your own, navigate to
				./app.json
			</p>
			<img src={image} alt='App name' />
			<h4>Steps:</h4>
			<ul>
				<li>
					Replace every occurrence of "weru" with your desired app
					name.
				</li>
				<li>Save all modified files to apply the changes.</li>
			</ul>
		</div>
	);
}
export default AppName;
