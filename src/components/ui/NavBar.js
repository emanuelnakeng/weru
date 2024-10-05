import { Link } from 'react-router-dom';
import Button from './Button';

function NavBar({ children, textColor }) {
	return (
		<header className='flex flex-col items-center justify-center h-[16vh] w-full z-50 '>
			<nav className='flex justify-between items-center w-full sm:w-4/6 px-5'>
				<Link to='/'>{children}</Link>
				<Button textColor={textColor}>Purchase</Button>
			</nav>
		</header>
	);
}
export default NavBar;
