import { Link } from 'react-router-dom';

function Button({ children, textColor }) {
	return (
		<Link
			className={`border-2 border-accent-clr py-3 px-6 rounded-full text-${textColor} font-medium text-base ' target='_blank' to='https://www.codecanyon.net`}
		>
			{children}
		</Link>
	);
}
export default Button;
