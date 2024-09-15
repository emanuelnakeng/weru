import Block from '../ui/Block';
import CodeBlock from '../ui/CodeBlock';

function Publishing({ id }) {
	return (
		<div id={id} className='section-container'>
			<h2>Publishing</h2>
			<p>
				By following these steps, you can effectively publish your own
				app and make it available to users on both Android and iOS
				platforms. If you encounter any issues or need more specific
				instructions, feel free to us on our{' '}
				<a href='https://www.codecanyon.com'>Codecanyon</a> support.
			</p>
			<iframe
				width='560'
				height='315'
				src='https://www.youtube.com/embed/-KZjr576tuE?si=_guQfotw1YP0FjYb'
				title='YouTube video player'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				referrerpolicy='strict-origin-when-cross-origin'
				allowfullscreen
			></iframe>
			<p>
				A paid developer account is required to publish your app-{' '}
				<a href='https://play.google.com/apps/publish/signup/'>
					Google Play Console
				</a>{' '}
				and{' '}
				<a href='https://developer.apple.com/account/'>
					Apple Developer
				</a>
			</p>
			<Block>
				Publishing an your app involves several steps, depending on
				whether you're using Expo's managed workflow or if you've
				ejected to a bare workflow
			</Block>
			<div className='sectionInner'>
				<h4>Step 1 : Test Your App</h4>
				<ul>
					<li>
						<strong>Run on Device:</strong> Use Expo Go to test your
						app on a physical device. You can scan the QR code from
						the Expo Go app.
					</li>
					<li>
						<strong>Build for Test:</strong> Generate a standalone
						build to test on a physical device or emulator.
					</li>
				</ul>
			</div>
			<div className='sectionInner'>
				<h4>Step 2 : Build Your App</h4>
				<ul>
					<li>Initialize the EAS Build configuration:</li>
				</ul>
				<CodeBlock code='eas build:configure' />
				<p>Build for Android</p>
				<CodeBlock code='eas build --platform android' />
				<p>Build for iOS</p>
				<CodeBlock code='eas build --platform ios' />
				<p>
					Alternatively, you can use --platform all option to build
					for Android and iOS at the same time
				</p>
				<CodeBlock code='eas build --platform all' />
				<p>
					You will receive links to download your build artifacts or
					see build progress in the{' '}
					<a href='https://expo.dev/'>EAS dashboard</a>
				</p>
			</div>
			<div className='sectionInner'>
				<h4>Step 4 : Submit to store</h4>
				<ul>
					<li>Submitting your app using CI</li>
				</ul>
				<p>
					The eas submit command is able to perform submissions from a
					CI environment. All you have to do is ensure that all
					required information is provided with eas.json and
					environment variables.
				</p>
				<CodeBlock code='eas submit -p ios --latest --profile example' />
				<CodeBlock code='eas submit -p android --profile example' />
			</div>
		</div>
	);
}
export default Publishing;
