import { FaRegEye, FaRegQuestionCircle, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer>
			<section className='footer-main-container'>
				<div className='actions'>
					<Link className='action' to='/demo'>
						<FaRegEye />
						<h3>Demo</h3>
					</Link>
					<Link className='action' to='https://www.codecanyon.com'>
						<FaRegQuestionCircle />
						<h3>Support</h3>
					</Link>
					<Link className='action' to='/docs'>
						<FaBook />
						<h3>Docs</h3>
					</Link>
				</div>
				<div className='credits-container'>
					<p>Copyright © 2024 Weru. All Rights Reserved.</p>
				</div>
			</section>
		</footer>
	);
}
export default Footer;
