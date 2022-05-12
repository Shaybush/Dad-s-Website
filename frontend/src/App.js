import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import ImageGallery from './components/ImageGallery';
import './App.css';
function App() {
	return (
		<Router>
			<a>
				<img className="img" src="home-page.png" />
			</a>
			<Navbar />
			<Routes>
				<Route path="/" element={<ImageGallery />} />
				<Route path="/CreatingGarden" element={'CreatingGarden'} />
				<Route path="/About" element={'About'} />
				<Route path="/Galery" element={'Galery'} />
				<Route path="/Contact" element={'Contact'} />
			</Routes>
		</Router>
	);
}

export default App;
