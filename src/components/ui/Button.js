import { Link } from 'react-router-dom';

function Button({ children, textColor, to, borderColor, background }) {
	return (
		<Link
			to={to}
			target='_blank'
			className={`border-2 ${borderColor} py-3 px-6 rounded-full text-${textColor} font-medium text-base ${
				background ? 'bg-bg-clr' : ''
			} `}
		>
			{children}
		</Link>
	);
}
export default Button;
