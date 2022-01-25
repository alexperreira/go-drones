// import dependencies
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

// import pages
import Home from './components/Pages/HomePage/Home';
import Process from './components/Pages/ProcessPage/Process';
import Shows from './components/Pages/Shows';
import Contact from './components/Pages/Contact';

// import components
// import Header from './components/UI/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/UI/Footer/Footer';

// const routes = [
// 	{ path: '/', name: 'Home', Component: Home },
// 	{ path: '/our-process', name: 'Our Process', Component: Process },
// 	{ path: '/our-shows', name: 'Our Shows', Component: Shows },
// 	{ path: '/contact', name: 'Contact', Component: Contact },
// ];

function App() {
	// const [isOpen, setIsOpen] = useState(false);
	// const toggle = () => {
	// 	setIsOpen(!isOpen);
	// };
	return (
		<div className='App'>
			{/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
			<Sidebar />
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
