import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Mail from './components/Mail';

function App() {
	return (
		<div className="bg-custom-first-blue overflow-hidden">
			<Header />
			<Router>
				<Routes>
					<Route
						path="/"
						className="flex-grow"
						element={<About />}
					/>
					<Route
						path="/mail"
						element={<Mail />}
					/>
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
