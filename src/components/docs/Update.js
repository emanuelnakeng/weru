import Block from '../ui/Block';

function Update({ id }) {
	return (
		<div id={id} className='section-container'>
			<h2>Update</h2>
			<p>
				This section guides you through updating your current version to
				newer releases.
			</p>
			<Block>
				Before you begin, ensure that you check the{' '}
				<strong>changelog</strong> of the product to understand and
				accept what the new update brings.
			</Block>
			<h4>Step 1 : Create a backup</h4>
			<p>
				Before updating the source code, it's a good idea to ensure
				proper backups are in place.
			</p>
			<ul>
				<li>Backup your files</li>
				<li>Backup any customizations</li>
			</ul>
			<h4>Step 2 : Update files</h4>
			<ul>
				<li>Download & unzip the latest source code</li>
				<li>
					Navigate to the `source code` folder, copy the update files
					and folders, and upload them to your development project.
				</li>
				<li>
					Follow any special version update instructions - open and
					read README.md
				</li>
			</ul>
		</div>
	);
}
export default Update;
