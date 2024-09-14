import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Demo from './pages/Demo';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path='/docs' element={<Docs />} />
				<Route path='demo' element={<Demo />} />
				<Route path='*' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
