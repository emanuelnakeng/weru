import { features } from '../data';
import { HiBadgeCheck } from 'react-icons/hi';
import NavBar from '../components/ui/NavBar';
import Footer from '../components/ui/Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Home() {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};
	return (
		<div className='home-container'>
			<NavBar />
			<section className='hero-container'>
				<div className='hero-heading-container'>
					<h1>Build a wallet for loyalty store card members</h1>
					<h2>
						From supermarkets to superstores, users can effortlessly
						add their loyalty card to the app.
					</h2>
				</div>
				<div className='hero-heading-container'>
					<div className='features-container'>
						{features.map(feature => {
							return (
								<div className='feature'>
									<HiBadgeCheck
										size={28}
										className='feature-icon'
									/>
									<p>{feature}</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<section className='home-main-content'>
				<div className='home-inner-container'>
					<h3>Component Screens</h3>
					<h2>Splash, Cards, Settings, Preview and more...</h2>
					<Carousel
						swipeable={false}
						draggable={false}
						showDots={true}
						responsive={responsive}
						infinite={true}
						// autoPlay={
						// 	this.props.deviceType !== 'mobile' ? true : false
						// }
						autoPlaySpeed={1000}
						keyBoardControl={true}
						customTransition='all .5'
						transitionDuration={500}
						containerClass='carousel-container'
						removeArrowOnDeviceType={['tablet', 'mobile']}
						// deviceType={this.props.deviceType}
						dotListClass='custom-dot-list-style'
						itemClass='carousel-item-padding-40-px'
					>
						<img
							src={require('../assets/iPhone-13-Pro-Front (1).png')}
							alt=''
							className='slideImg'
						/>
						<img
							src={require('../assets/iPhone-13-Pro-Front (2).png')}
							alt=''
							className='slideImg'
						/>
						<img
							src={require('../assets/iPhone-13-Pro-Front (3).png')}
							alt=''
							className='slideImg'
						/>
						<img
							src={require('../assets/iPhone-13-Pro-Front (4).png')}
							alt=''
							className='slideImg'
						/>
						<img
							src={require('../assets/iPhone-13-Pro-Front (5).png')}
							alt=''
							className='slideImg'
						/>
					</Carousel>
				</div>
			</section>
			<Footer />
		</div>
	);
}
export default Home;
