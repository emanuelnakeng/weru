import CodeBlock from '../ui/CodeBlock';

function Installation({ id }) {
	return (
		<div id={id} className='section-container'>
			<h2>Installation</h2>
			<p>
				We understand that a smooth installation process is crucial for
				a seamless experience, this installation guide is designed to
				make the process as straightforward and stress-free as possible.
			</p>
			<h4>1 - Install Node.js</h4>
			<p>React Native and Expo require Node.js.</p>
			<h4>Steps: </h4>
			<ul>
				<li>
					Go to the{' '}
					<a href='https://nodejs.org/'>Node.js download page.</a>
				</li>
				<li>
					Choose the LTS (Long Term Support) version and download it
					for your operating system.
				</li>
				<li>Install Node.js</li>
				<li>
					Run the installer you downloaded and follow the installation
					prompts.
				</li>
				<li>
					Verify the installation by opening a terminal and running
				</li>
			</ul>
			<CodeBlock code='node -v' />
			<h4>2 - Install Dependancies</h4>
			<p>Install dependencies for various functionalities or tools.</p>
			<h4>Steps: </h4>
			<ul>
				<li>Navigate to the project</li>
			</ul>
			<CodeBlock code='cd /project' />
			<ul>
				<li>Install dependencies</li>
			</ul>
			<CodeBlock code='npm install' />
			<ul>
				<li>Start development server</li>
			</ul>
			<CodeBlock code='npx expo start' />
		</div>
	);
}
export default Installation;
