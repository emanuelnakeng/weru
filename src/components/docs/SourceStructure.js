import DocsSection from '../ui/DocsSection';

const directoriesImg = require('../../assets/directories.png');

function SourceStructure({ id }) {
	return (
		<DocsSection id={id}>
			<h2 className='text-3xl font-bold text-bg-clr'>Source Structure</h2>
			<p>
				This directory contains the main application source code, broken
				down into several subdirectories
			</p>
			<img
				src={directoriesImg}
				alt=''
				className='sm:w-4/5 w-full rounded-lg'
			/>
			<div className='mb-5'>
				<h4 className='font-semibold'>./components</h4>
				<p>
					Contains reusable UI elements. These components help to
					modularize the application, allowing code to be reused and
					maintained efficiently.
				</p>
			</div>
			<div className='mb-5'>
				<h4 className='font-semibold'>./data</h4>
				<p>
					Stores static data, configuration files and mock data used
					at runtime.
				</p>
			</div>
			<div className='mb-5'>
				<h4 className='font-semibold'>./screens</h4>
				<p>
					Contains components that represent entire screens within the
					application.
				</p>
			</div>
			<div className='mb-5'>
				<h4 className='font-semibold'>./utils</h4>
				<p>
					Contains utility functions, helpers, and other reusable code
					that doesn't fit into components or screens.
				</p>
			</div>
			<div className='mb-5'>
				<h4 className='font-semibold'>./utils/nav</h4>
				<p>
					This folder is crucial for managing the application's
					navigation structure.
				</p>
			</div>
			<div className='mb-5'>
				<h4 className='font-semibold'>./store</h4>
				<p>
					Contains the logic and configuration for managing and
					manipulating the global state of the application.
				</p>
			</div>
		</DocsSection>
	);
}
export default SourceStructure;
