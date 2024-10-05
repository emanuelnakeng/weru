import ScreenWrap from '../components/ui/ScreenWrap';
import NavBar from '../components/ui/NavBar';
import AppStores from '../components/ui/AppStores';
import Footer from '../components/ui/Footer';
import { reviews } from '../data';
import { AiFillStar } from 'react-icons/ai';

function Demo() {
	return (
		<ScreenWrap classProps='bg-bg-light-clr'>
			<NavBar>
				<h1 className='text-2xl font-semibold'>Weru</h1>
			</NavBar>
			<main className='flex flex-col w-full items-center pt-10 px-5'>
				<div className='flex flex-col items-center pt-8 gap-5 '>
					<img
						src={require('../assets/logo.png')}
						alt='logo'
						className='h-auto w-24 sm:w-36 object-contain '
					/>
					<div className='py-20 w-full '>
						<h1 className='text-5xl sm:text-6xl font-extrabold text-center leading-tight pb-4'>
							Your loyalty made simple
						</h1>
						<p className='text-base font-normal  leading-normal text-center'>
							With Weru, all your loyalty cards are convenience
							stored in one place, earn points and enjoy exclusive{' '}
							<br className='hidden sm:block' />
							offers - Offering both convenience and ease of use.
						</p>
					</div>
					<AppStores />
				</div>
				<div>
					<div>
						<h2 className='text-3xl font-bold py-10'>
							Unlimited cards
						</h2>
					</div>
					<div className='flex justify-center sm:justify-end w-full sm:w-1/3  '>
						<img
							src={require('../assets/iPhone-13-Pro-Front.png')}
							alt=''
							className='w-4/5 sm:w-3/4 h-auto'
						/>
					</div>
				</div>
				<div>
					<div className='flex justify-center sm:justify-end w-full sm:w-1/3  '>
						<img
							src={require('../assets/iPhone-13-Pro-Front (5).png')}
							alt=''
							className='w-4/5 sm:w-3/4 h-auto'
						/>
					</div>
					<div>
						<h2 className='text-3xl font-bold py-10'>
							Dark and light mode
						</h2>
					</div>
				</div>
				<div className='py-20 flex flex-col items-center w-full sm:w-4/6'>
					<h2 className='text-3xl font-bold py-10'>Reviews</h2>
					<div className='flex flex-col gap-12 items-center'>
						{reviews.map((review, index) => {
							return (
								<article className='bg-gray-100 rounded-2xl px-10 py-10 sm:w-3/6'>
									<div className='flex gap-2 pb-5'>
										<AiFillStar size={22} color='orange' />
										<AiFillStar size={22} color='orange' />
										<AiFillStar size={22} color='orange' />
										<AiFillStar size={22} color='orange' />
										<AiFillStar size={22} color='orange' />
									</div>
									<h3 className='text-base'>
										{review.review}
									</h3>
									<p className='font-medium '>
										— {review.reviewer}
									</p>
								</article>
							);
						})}
					</div>
				</div>
			</main>
			<Footer />
		</ScreenWrap>
		// <ScreenWrap>
		// 	<NavBarDemo />
		// 	<main className='flex flex-col w-full items-center pt-16 px-5 '>
		// 		<div className='h-screen'>
		// 			<div >
		// 				<img src='' alt='' />
		// 			</div>
		// 			<div>
		// 				<h1 className='text-white font-bold text-5xl'>
		// 					All your loyalty cards in one app
		// 				</h1>
		// 			</div>
		// 			<div></div>
		// 		</div>
		// 	</main>
		// </ScreenWrap>
	);
}
export default Demo;
