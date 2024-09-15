import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Demo from './pages/Demo';
import NavBar from './components/ui/NavBar';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
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
