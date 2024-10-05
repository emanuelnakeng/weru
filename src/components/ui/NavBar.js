import { Link } from 'react-router-dom';
import Button from './Button';
const logo = require('../../assets/logo1.png');

function NavBar() {
	return (
		<header className='flex flex-col items-center justify-center h-[16vh] w-full z-50 '>
			<nav className='flex justify-between items-center w-full sm:w-4/6 px-5'>
				<Link to='/'>
					<img
						src={logo}
						alt='logo'
						className='h-auto w-16 sm:w-20 object-contain'
					/>
				</Link>
				<Button>Purchase</Button>
			</nav>
		</header>
	);
}
export default NavBar;
