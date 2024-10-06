import { Link } from 'react-router-dom';
import Button from './Button';

function NavBar({ darkLogo, textColor, borderColor, background }) {
	return (
		<header className='flex flex-col items-center justify-center h-[16vh] w-full z-50 '>
			<nav className='flex justify-between items-center w-full sm:w-4/6 px-5'>
				<Link to='/'>
					<img
						src={
							darkLogo
								? require('../../assets/logo.png')
								: require('../../assets/logo1.png')
						}
						alt='logo'
						className='h-auto w-16 sm:w-20 object-contain'
					/>
				</Link>
				<Button
					textColor={textColor}
					to='https://www.codecanyon.net'
					borderColor={borderColor}
					background={background}
				>
					Purchase
				</Button>
			</nav>
		</header>
	);
}
export default NavBar;
