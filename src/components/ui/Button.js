import { Link } from 'react-router-dom';

function Button({ children }) {
	return (
		<Link className='border-2 border-accent-clr py-3 px-6 rounded-full text-white font-medium text-base ' target='_blank' to='https://www.codecanyon.net'>
			{children}
		</Link>
	);
}
export default Button;
