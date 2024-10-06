import DocsSection from '../ui/DocsSection';

const image = require('../../assets/theme.png');
function Theme({ id }) {
	return (
		<DocsSection id={id}>
			<h2 className='text-3xl font-bold text-bg-clr'>Theme</h2>
			<p>
				We have made it easy to customize Weru to your own
				specifications.
			</p>
			<img
				src={image}
				alt='Theme'
				className='sm:w-4/5 w-full rounded-lg'
			/>
			<p>
				You can change the theme dynamically and all the components will
				automatically update to reflect the new theme.
			</p>
		</DocsSection>
	);
}
export default Theme;
