import '../index.css';
import { docNavigation } from '../data';
import GettingStarted from '../components/docs/GettingStarted';
import Requirements from '../components/docs/Requirements';
import Installation from '../components/docs/Installation';
import InstallationServices from '../components/docs/InstallationServices';
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

const logo = require('../assets/logo.png');
function Docs() {
	return (
		<div className='docs-container'>
			<header className='docs-header-container'>
				<a href='/'>
					<img src={logo} alt='logo' className='docs-image-logo' />
				</a>
				<div className='header-label-container'>
					<h1>Weru Documentation</h1>
					<p>A smart loyalty wallet by RNCode</p>
				</div>
			</header>
			<div className='main-container'>
				<div className='navigation-container'>
					<ul>
						{docNavigation.map((navItem, index) => {
							return (
								<li className='nav-item-container'>
									<a href={`#${navItem}`.toLocaleLowerCase()}>
										{navItem}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='scrollable-container'>
					<GettingStarted id='get-started' />
					<Requirements />
					<InstallationServices />
					<Installation />
					<Update />
					<SourceStructure />
					<Theme />
					<Fonts />
					<AppName />
					<AppIcon />
					<Splash />
					<Customization />
					<Publishing />
					<VersionHistory />
				</div>
			</div>
		</div>
	);
}
export default Docs;
