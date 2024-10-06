import DocsSection from '../ui/DocsSection';

function Customization({ id }) {
	return (
		<DocsSection id={id}>
			<h2 className='text-3xl font-bold text-bg-clr'>Customization</h2>
			<p>
				We provide affordable, high-quality customization services for
				those who prefer a hassle-free experience.
			</p>
			<h4 className='font-semibold'>
				Minor customization - starting at $25
			</h4>
			<ul className='ml-10 list-disc'>
				<li>Component</li>
				<li>Layout</li>
				<li>Logic</li>
				<li>Navigation</li>
				<li>Animations</li>
			</ul>
			<h4 className='font-semibold'>
				Major Custom requests - starting at $59
			</h4>
			<ul className='ml-10 list-disc'>
				<li>
					We will customize the template according to your
					requirements.
				</li>
				<li>Hire the same team for bug free customization</li>
			</ul>
			<p>
				For customization requests please use the{' '}
				<strong>email form</strong> or <strong>support</strong> section
				on the{' '}
				<a
					href='https://codecanyon.net'
					className='text-accent-clr font-bold'
				>
					{' '}
					Codecanyon
				</a>{' '}
				product page.
			</p>
		</DocsSection>
	);
}
export default Customization;
