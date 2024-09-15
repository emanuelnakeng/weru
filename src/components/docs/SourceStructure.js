const directoriesImg = require('../../assets/directories.png');

function SourceStructure({ id }) {
	return (
		<div id={id} className='section-container'>
			<h2>Source Structure</h2>
			<p>
				This directory contains the main application source code, broken
				down into several subdirectories
			</p>
			<img src={directoriesImg} alt='' />
			<div className='sectionInner'>
				<h4>./components</h4>
				<p>
					Contains reusable UI elements. These components help to
					modularize the application, allowing code to be reused and
					maintained efficiently.
				</p>
			</div>
			<div className='sectionInner'>
				<h4>./data</h4>
				<p>
					Stores static data, configuration files and mock data used
					at runtime.
				</p>
			</div>
			<div className='sectionInner'>
				<h4>./screens</h4>
				<p>
					Contains components that represent entire screens within the
					application.
				</p>
			</div>
			<div className='sectionInner'>
				<h4>./utils</h4>
				<p>
					Contains utility functions, helpers, and other reusable code
					that doesn't fit into components or screens.
				</p>
			</div>
			<div className='sectionInner'>
				<h4>./utils/nav</h4>
				<p>
					This folder is crucial for managing the application's
					navigation structure.
				</p>
			</div>
			<div className='sectionInner'>
				<h4>./store</h4>
				<p>
					Contains the logic and configuration for managing and
					manipulating the global state of the application.
				</p>
			</div>
		</div>
	);
}
export default SourceStructure;
