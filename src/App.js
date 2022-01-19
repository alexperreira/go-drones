// import dependencies
import './App.css';
import { Route, Routes } from 'react-router-dom';

// import pages
import Home from './components/Pages/Home';
import Process from './components/Pages/Process';
import Shows from './components/Pages/Shows';
import Contact from './components/Pages/Contact';

// import components
// import Header from './components/UI/Header';
import Sidebar from './components/UI/Sidebar';
import Footer from './components/UI/Footer';

function App() {
	return (
		<div className='App'>
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
