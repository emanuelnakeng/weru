import DocsSection from '../ui/DocsSection';

function Requirements({ id }) {
	return (
		<DocsSection id={id}>
			<h2 className='text-3xl font-bold text-bg-clr'>Requirements</h2>
			<p>
				Please ensure that your environment meets the following
				requirements. This will help ensure a smooth installation and
				optimal performance of the app.
			</p>
			<div className='my-2.5'>
				<div className='flex flex-row items-center border-b-[1px] justify-between p-5'>
					<h4 className='font-semibold'>Nodejs</h4>
					<p>~v21 - v22</p>
				</div>
				<div className='flex flex-row items-center border-b-[1px] justify-between p-5'>
					<h4 className='font-semibold'>IDE/Text Editor</h4>
					<p>Visual Studio Code, Atom, or Sublime Text</p>
				</div>
				<div className='flex flex-row items-center border-b-[1px] justify-between p-5'>
					<h4 className='font-semibold'>Expo SDK</h4>
					<p>~51.0.0</p>
				</div>
				<div className='flex flex-row items-center border-b-[1px] justify-between p-5'>
					<h4 className='font-semibold'>Backend</h4>
					<p>Firebase</p>
				</div>
			</div>
		</DocsSection>
	);
}
export default Requirements;
