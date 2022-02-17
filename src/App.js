// import dependencies
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// import pages
import Home from './components/Pages/HomePage/Home';
import Process from './components/Pages/ProcessPage/Process';
import Shows from './components/Pages/Shows/Shows';
import Contact from './components/Pages/Contact/Contact';

// import components
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/UI/Footer/Footer';
import ScrollToTop from './components/UI/ScrollToTop';

function App() {
	const TRACKING_ID = 'G-VGQSMQFFFS';

	useEffect(() => {
		ReactGA.initialize(TRACKING_ID, {
			testMode: true,
		});
		ReactGA.pageview('Init page view');
	});
	ReactGA.pageview(window.location.pathname);
	return (
		<div>
			<Sidebar />
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='our-process' element={<Process />} />
				<Route path='our-shows' element={<Shows />} />
				<Route path='contact' element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
