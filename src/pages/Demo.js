import ScreenWrap from '../components/ui/ScreenWrap';
import NavBar from '../components/ui/NavBar';
import AppStores from '../components/ui/AppStores';
import Footer from '../components/ui/Footer';
import { reviews } from '../data';
import { AiFillStar } from 'react-icons/ai';
import FeaturedImage from '../components/ui/FeaturedImage';

function Demo() {
	return (
		<ScreenWrap classProps='bg-bg-light-clr'>
			<NavBar
				darkLogo
				borderColor='border-bg-clr'
				textColor='white'
				background
			/>
			<main className='flex flex-col w-full items-center pt-10 px-5 gap-10'>
				<div className='flex flex-col items-center pt-5 h-[65vh] gap-5'>
					<p className='bg-boarding-clr rounded-full px-4 py-2 text-sm font-medium mb-5'>
						Over 10 million customers use <strong>Weru!</strong>
					</p>
					<div className=' w-full '>
						<h1 className='text-5xl sm:text-6xl font-extrabold text-center leading-normal pb-5 sm:pb-10'>
							Your loyalty made simple
						</h1>
						<p className='text-base font-medium leading-relaxed text-center text-bg-clr px-10 pb-10'>
							With Weru, you can conveniently store all your
							loyalty cards in one place, making it easy{' '}
							<br className='hidden sm:block ' />
							to earn points and access exclusive offers.
						</p>
					</div>
					<AppStores />
				</div>
				<div className='w-full sm:w-3/6 h-[45vh] pt-15 sm:pt:0'>
					<FeaturedImage />
				</div>
				<div className='flex flex-col items-center pt-20 sm:flex-row sm:w-3/6 sm:items-start sm:justify-center sm:space-x-20'>
					<div className='flex justify-center w-full sm:w-2/4 sm:justify-end'>
						<img
							src={require('../assets/iPhone-13-Pro-Front.png')}
							alt='Cards'
							className='w-52 sm:w-3/5 h-auto object-contain'
						/>
					</div>
					<div className='flex flex-col items-center sm:items-start sm:w-2/4 mt-5 '>
						<h2 className='text-3xl font-bold py-5 text-bg-clr'>
							Unlimited cards
						</h2>
						<p className='text-base font-normal leading-relaxed text-gray-700 px-5 pb-10 w-3/4 text-center sm:px-0 sm:text-left'>
							Supports multiple cards such as loyalty points,
							membership cards, coupons, gift cards, tickets,
							boarding passes, and credit cards. You can also add
							your own custom cards.
						</p>
						<a
							href='/'
							className='text-base font-normal leading-relaxed text-gray-600 underline hover:text-accent-clr underline-offset-2'
						>
							Learn more
						</a>
					</div>
				</div>
				<div className='flex flex-col items-center pt-10 sm:flex-row sm:w-3/6 sm:items-start sm:justify-center sm:space-x-20'>
					<div className='flex flex-col items-center sm:items-end sm:w-2/4 mt-5 '>
						<h2 className='text-3xl font-bold pb-5 text-bg-clr sm:text-left'>
							Dark and light mode
						</h2>
						<p className='text-base font-normal leading-relaxed text-gray-700 px-5 pb-10 w-3/4 text-center sm:px-0 sm:text-left'>
							Offers both dark and light modes for you to choose
							based on your preference or lighting conditions -
							Experience the convenience of managing all your
							cards in one place. Download Weru today and simplify
							your life
						</p>
						<a
							href='/'
							className='text-base font-normal leading-relaxed text-gray-600 underline hover:text-accent-clr underline-offset-2'
						>
							Learn more
						</a>
					</div>
					<div className='flex justify-center w-full sm:w-2/4 sm:justify-start '>
						<img
							src={require('../assets/iPhone-13-Pro-Front (5).png')}
							alt='dark and light'
							className='w-52 sm:w-3/5 h-auto object-contain pt-5'
						/>
					</div>
				</div>
				<div className='flex flex-col items-center w-full sm:w-4/6'>
					<h2 className='text-3xl font-bold py-10 w-4/5 text-center leading-relaxed text-bg-clr '>
						Used by more than 10 million customers
					</h2>
					<div className='flex flex-col gap-12 items-center'>
						{reviews.map((review, index) => {
							return (
								<article className='bg-white rounded-2xl px-10 py-10 sm:w-4/6'>
									<div className='flex gap-2 pb-5'>
										<AiFillStar size={22} color='orange' />
										<AiFillStar size={22} color='orange' />
										<AiFillStar size={22} color='orange' />
										<AiFillStar size={22} color='orange' />
										<AiFillStar size={22} color='orange' />
									</div>
									<h3 className='text-base text-bg-clr'>
										{review.review}
									</h3>
									<p className='font-semibold text-bg-clr py-2'>
										— {review.reviewer}
									</p>
								</article>
							);
						})}
					</div>
				</div>
				<div className='py-5 pb-10 flex flex-col items-center w-full sm:w-4/6'>
					<h2 className='text-3xl font-bold py-14 w-4/5 text-center leading-tight'>
						Our partners
					</h2>
					<div className='flex gap-10 py-5 w-full justify-center sm:gap-20'>
						<img
							src={require('../assets/nike.png')}
							alt='nike logo'
							className='w-20 h-20 object-contain'
						/>
						<img
							src={require('../assets/dominos-logo.png')}
							alt='dominos logo'
							className='w-20 h-20 object-contain'
						/>
						<img
							src={require('../assets/target 2.png')}
							alt='target logo'
							className='w-20 h-20 object-contain'
						/>
					</div>
				</div>
			</main>
			<Footer />
		</ScreenWrap>
	);
}
export default Demo;
