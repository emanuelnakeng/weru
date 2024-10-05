import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className=' h-[25vh] sm:h-[40vh] border-t-[0.5px] border-boarding-clr/70  px-5 w-full bg-boarding-clr/70 flex flex-col items-center pt-10 '>
			<ul className='flex gap-5 pb-5 text-normal  sm:gap-20 text-black'>
				<li className=' hover:text-white transition ease-in-out delay-150 underline underline-offset-2'>
					<Link target='_blank' to='https://codecanyon.net'>
						Support
					</Link>
				</li>
				<li className='hover:text-white transition ease-in-out delay-150 underline underline-offset-2'>
					<Link to='/docs'>Documentation</Link>
				</li>
				<li className='hover:text-white transition ease-in-out delay-150 underline underline-offset-2'>
					<Link to='/demo'>Demo</Link>
				</li>
			</ul>
			<p className='font-normal text-black'>
				Copyright © 2024{' '}
				<Link to='/'>
					<strong className='font-semibold'>Weru.</strong>
				</Link>{' '}
				All Rights Reserved.
			</p>
		</footer>
	);
}
export default Footer;
