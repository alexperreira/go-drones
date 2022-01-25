import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/gologo.png';

const Header = () => {
	return (
		<div className='header'>
			{/* <img src={logo} className='logo' alt='' /> */}
			<nav className='headerNav'>
				<ul>
					<li>
						<Link to='/' className='navLink'>
							Home
						</Link>
					</li>
					<li>
						<Link to='/our-process' className='navLink'>
							Our Process
						</Link>
					</li>
					<li>
						<Link to='/our-shows' className='navLink'>
							Our Shows
						</Link>
					</li>
					<li>
						<Link to='/contact' className='navLink'>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
