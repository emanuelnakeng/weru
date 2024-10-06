import Block from '../ui/Block';
import DocsSection from '../ui/DocsSection';

function Update({ id }) {
	return (
		<DocsSection id={id}>
			<h2 className='text-3xl font-bold text-bg-clr'>Update</h2>
			<p>
				This section guides you through updating your current version to
				newer releases.
			</p>
			<Block>
				Before you begin, ensure that you check the{' '}
				<strong>changelog</strong> of the product to understand and
				accept what the new update brings.
			</Block>
			<h4 className='font-semibold'>Step 1 : Create a backup</h4>
			<p>
				Before updating the source code, it's a good idea to ensure
				proper backups are in place.
			</p>
			<ul className='list-disc ml-10'>
				<li>Backup your files</li>
				<li>Backup custom code</li>
			</ul>
			<h4 className='font-semibold'>Step 2 : Update files</h4>
			<ul className='list-disc ml-10'>
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
		</DocsSection>
	);
}
export default Update;
