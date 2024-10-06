import DocsSection from '../ui/DocsSection';

function GettingStarted({ id }) {
	return (
		<DocsSection id={id}>
			<h2 className='text-3xl font-bold text-bg-clr'>Getting Started</h2>
			<p>Thank you for purchasing our template. 🔥</p>
			<p>
				This documentation will walk you through the installation
				process and explore some of the available configuration options.
				Weru is designed to be straightforward and user-friendly. You
				don’t need any specialized technical skills — basic web
				knowledge will suffice.
			</p>
			<p>
				Support for Weru is available exclusively through Codecanyon. If
				you need assistance, please use the{' '}
				<strong className='font-bold'>email form</strong> or{' '}
				<strong className='font-bold'>comments</strong> section on the{' '}
				<a
					className='text-accent-clr font-bold'
					href='https://codecanyon.net'
				>
					{' '}
					Codecanyon
				</a>{' '}
				product page.
			</p>
			<p>
				We hope this documentation helps you get started and make the
				most of your new app!
			</p>
		</DocsSection>
	);
}
export default GettingStarted;
