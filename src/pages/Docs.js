import '../index.css';
import { docNavigation } from '../data';
import GettingStarted from '../components/docs/GettingStarted';
import Requirements from '../components/docs/Requirements';
import Installation from '../components/docs/Installation';
import Update from '../components/docs/Update';
import SourceStructure from '../components/docs/SourceStructure';
import Theme from '../components/docs/Theme';
import Fonts from '../components/docs/Fonts';
import AppName from '../components/docs/AppName';
import AppIcon from '../components/docs/AppIcon';
import Splash from '../components/docs/Splash';
import Customization from '../components/docs/Customization';
import Publishing from '../components/docs/Publishing';
import VersionHistory from '../components/docs/VersionHistory';
import { Link } from 'react-router-dom';
import ScreenWrap from '../components/ui/ScreenWrap';
import Footer from '../components/ui/Footer';
import NavBar from '../components/ui/NavBar';

function Docs() {
	return (
		<ScreenWrap classProps='bg-bg-light-clr'>
			<NavBar
				darkLogo
				borderColor='border-accent-clr'
				textColor='black'
			/>
			<main className='flex flex-col w-full sm:w-4/6 md:flex-row my-5 gap-5'>
				<div className='py-10 bg-white mx-3.5 rounded-xl px-5 mb-10 sm:px-10 sm:w-1/4 sm:sticky top-[2rem] sm:h-fit'>
					<ul>
						{docNavigation.map(navItem => {
							return (
								<li
									className='font-medium text-gray-500 mb-5 hover:text-accent-clr hover:underline underline-offset-2'
									key={navItem}
								>
									<Link
										onClick={() => {
											const element =
												document.getElementById(
													navItem
														.toLowerCase()
														.replaceAll(' ', '-')
												);
											element?.scrollIntoView({
												behavior: 'smooth',
											});
										}}
									>
										{navItem}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='px-5 sm:w-3/4'>
					<GettingStarted id='get-started' />
					<Requirements id='requirements' />
					<Installation id='installation' />
					<Update id='update' />
					<SourceStructure id='source-structure' />
					<Theme id='theme' />
					<Fonts id='fonts' />
					<AppName id='app-name' />
					<AppIcon id='app-icon' />
					<Splash id='splash' />
					<Customization id='customization' />
					<Publishing id='publishing' />
					<VersionHistory id='version-history' />
				</div>
			</main>
			<Footer />
		</ScreenWrap>
	);
}
export default Docs;
