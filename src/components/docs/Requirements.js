function Requirements({ id }) {
	return (
		<div id={id} className='section-container'>
			<h2>Requirements</h2>
			<p>
				Please ensure that your environment meets the following
				requirements. This will help ensure a smooth installation and
				optimal performance of the app.
			</p>
			<div>
				<div className='section-table'>
					<h4>Nodejs</h4>
					<p>v20 - v21</p>
				</div>
				<div className='section-table'>
					<h4>IDE/Text Editor</h4>
					<p>Visual Studio Code, Atom, or Sublime Text</p>
				</div>
				<div className='section-table'>
					<h4>Expo SDK</h4>
					<p>~51.0.0</p>
				</div>
				<div className='section-table'>
					<h4>Backend</h4>
					<p>Firebase</p>
				</div>
			</div>
		</div>
	);
}
export default Requirements;
