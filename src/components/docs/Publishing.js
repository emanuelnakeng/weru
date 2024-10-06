import Block from '../ui/Block';
import CodeBlock from '../ui/CodeBlock';
import DocsSection from '../ui/DocsSection';

function Publishing({ id }) {
	return (
		<DocsSection id={id}>
			<h2 className='text-3xl font-bold text-bg-clr'>Publishing</h2>
			<p>
				By following these steps, you can effectively publish your own
				app and make it available to users on both Android and iOS
				platforms. If you encounter any issues or need more specific
				instructions, feel free to us on our{' '}
				<a href='https://www.codecanyon.com'>Codecanyon</a> support.
			</p>
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
				<h4 className='font-semibold'>Step 1 : Test Your App</h4>
				<ul className='ml-10 list-disc'>
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
				<h4 className='font-semibold'>Step 2 : Build Your App</h4>
				<ul className='ml-10 list-disc'>
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
				<h4 className='font-semibold'>Step 4 : Submit to store</h4>
				<ul className='ml-10 list-disc'>
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
		</DocsSection>
	);
}
export default Publishing;
