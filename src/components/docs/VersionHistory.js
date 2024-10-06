import DocsSection from '../ui/DocsSection';

function VersionHistory({ id }) {
	return (
		<DocsSection id={id}>
			<h2 className='text-3xl font-bold text-bg-clr'>Version History</h2>
			<p>Initial release - October 2024</p>
			<p>Version 1.0.0</p>
		</DocsSection>
	);
}
export default VersionHistory;
