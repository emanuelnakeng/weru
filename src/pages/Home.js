import { features } from '../data';
import NavBar from '../components/ui/NavBar';
import Footer from '../components/ui/Footer';
import ScreenWrap from '../components/ui/ScreenWrap';
import { HiBadgeCheck } from 'react-icons/hi';
import { HiArrowUpRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<ScreenWrap>
			<NavBar />
			<main className='flex flex-col w-full items-center pt-16 px-5 '>
				<div className='flex flex-row flex-wrap w-full sm:w-4/6 '>
					<div className='w-full flex flex-col items-center  sm:w-2/3 sm:items-start '>
						<p className='bg-gray-100 rounded-full px-4 py-2 text-sm font-normal mb-5'>
							Featured on{' '}
							<Link
								target='_blank'
								href='https://www.codecanyon.net'
							>
								<span className='hover:underline font-bold hover:text-accent-clr underline-offset-2'>
									Codecanyon
								</span>
							</Link>
							🔥
						</p>
						<h1 className='text-5xl sm:text-7xl font-extrabold text-center text-white sm:text-start leading-tight pb-2'>
							Build a wallet for loyalty store card members
						</h1>
						<p className='text-base font-normal text-center text-white leading-normal w-3/4 sm:w-full sm:text-start'>
							From supermarkets to superstores, your users can
							effortlessly add their loyalty card on the app.
						</p>
						<div className='py-10 flex flex-col gap-5 sm:flex-row'>
							<Link
								to='/demo'
								className='flex flex-row justify-center items-center gap-1 bg-boarding-clr/90 rounded-full py-2 px-6 font-medium text-base  hover:bg-accent-clr  transition ease-in-out delay-150 '
							>
								<p>Try Demo</p>
								<HiArrowUpRight size={20} />
							</Link>
							<Link
								to='/docs'
								className='border-2 rounded-full border-gray-100 py-2 px-6 font-medium text-base text-white hover:bg-gray-300 hover:border-gray-100 hover:bg-gray-100 hover:text-bg-clr transition ease-in-out delay-150 '
							>
								Documentation
							</Link>
						</div>
					</div>
					<div className='flex justify-center sm:justify-end w-full sm:w-1/3  '>
						<img
							src={require('../assets/iPhone-13-Pro-Front (1).png')}
							alt='hero screen'
							className='w-2/4 sm:w-3/4 h-auto'
						/>
					</div>
				</div>
				<div className='w-full sm:w-4/6 py-32 flex flex-col gap-5 pl-10 sm:flex-row sm:flex-wrap sm:gap-10 sm:pl-0 '>
					{features.map(feature => {
						return (
							<div className='flex flex-row items-center gap-5 sm:basis-1/4'>
								<HiBadgeCheck size={26} color='#46bd61' />
								<p className='font-medium text-base text-gray-100'>
									{feature}.
								</p>
							</div>
						);
					})}
				</div>
			</main>
			<Footer />
		</ScreenWrap>
	);
}
export default Home;
