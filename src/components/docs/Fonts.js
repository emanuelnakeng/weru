import Block from '../ui/Block';
const image = require('../../assets/fonts.png');
function Fonts({ id }) {
	return (
		<div id={id} className='section-container'>
			<h2>Font</h2>
			<p>
				The default font family name “inter” is used for this template.
				If you want to change it or use a custom font, you’ll need the
				.ttf files for all supported styles (regular, semi bold, bold,
				extra bold).
			</p>
			<h4>Steps:</h4>
			<ul>
				<li>Add font family in folder ./assets/fonts/...</li>
				<li>Open the main entry file ./App.js</li>
				<li>Reference the new font files in the "require()" method</li>
			</ul>
			<img src={image} alt='fonts' />
			<Block>
				It is essential that you do not replace the font names, as doing
				so will break the font logic across the application.
			</Block>
		</div>
	);
}
export default Fonts;
