import Block from '../ui/Block';
import DocsSection from '../ui/DocsSection';
const image = require('../../assets/fonts.png');
function Fonts({ id }) {
	return (
		<DocsSection id={id}>
			<h2 className='text-3xl font-bold text-bg-clr'>Font</h2>
			<p>
				The default font family name “inter” is used for this template.
				If you want to change it or use a custom font, you’ll need the
				.ttf files for all supported styles (regular, semi bold, bold,
				extra bold).
			</p>
			<h4 className='font-semibold'>Steps:</h4>
			<ul className='ml-10 list-disc ml-10'>
				<li>Add font family in folder ./assets/fonts/...</li>
				<li>Open the main entry file ./App.js</li>
				<li>Reference the new font files in the "require()" method</li>
			</ul>
			<img
				src={image}
				alt='fonts'
				className='sm:w-4/5 w-full rounded-lg'
			/>
			<Block>
				It is essential that you do not replace the font names, as doing
				so may break the font logic across the application.
			</Block>
		</DocsSection>
	);
}
export default Fonts;
