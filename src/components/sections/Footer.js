import '../../index.css';
import { FaXTwitter, FaFacebookF, FaGithub } from 'react-icons/fa6';

function Footer(props) {
	return (
		<footer>
			<div className='footerHeadingContainer'>
				<h2>
					Build a great wallet for loyalty
					<br /> members with Weru!
				</h2>
				<a className='footerBtn' href={props.buylink}>
					Purchase now
				</a>
			</div>
			<div className='footerCreditsContainer'>
				<a href={props.x} className='creditItem'>
					<FaXTwitter size={38} color='#cacaca' />
					<h3>Follow us on X</h3>
				</a>

				<a href={props.facebook} className='creditItem'>
					<FaFacebookF size={38} color='#cacaca' />
					<h3>Like us on Facebook</h3>
				</a>

				<a href={props.github} className='creditItem'>
					<FaGithub size={38} color='#cacaca' />
					<h3>Follow us on Github</h3>
				</a>
			</div>
			<div className='footerCopyrightContainer'>
				<p>&copy;Weru — All rights reserved</p>
			</div>
		</footer>
	);
}

export default Footer;
