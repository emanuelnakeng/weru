const image = require('../../assets/theme.png');
function Theme({ id }) {
	return (
		<div id={id} className='section-container'>
			<h2>Theme</h2>
			<p>
				We have made it easy to customize Weru to your own
				specifications.
			</p>
			<img src={image} alt='Theme' />
			<p>
				You can change the theme dynamically and all the components will
				automatically update to reflect the new theme.
			</p>
		</div>
	);
}
export default Theme;
