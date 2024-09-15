import { Link } from 'react-router-dom';
const logo = require('../../assets/logo1.png');

function NavBar() {
	return (
		<header>
			<nav>
				<div className='logo-container'>
					<Link to='/'>
						<img src={logo} alt='' className='logo' />
						<p className='logo-weru'>Weru</p>
					</Link>
				</div>
				<div className='action-container'>
					<button>Purchase</button>
				</div>
			</nav>
		</header>
	);
}
export default NavBar;
