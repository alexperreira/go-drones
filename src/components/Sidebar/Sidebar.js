import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarItem from './SidebarItem';
// import Logo from '../../assets/images/gologo.png';
import styles from './Sidebar.module.css';
import MenuIcon from './MenuIcon';
import goLogo from '../assets/images/gologo.png';

const menuData = [
	{
		title: 'Home',
		path: '/',
	},
	{
		title: 'Our Process',
		path: '/our-process',
	},
	{
		title: 'Our Shows',
		path: '/our-shows',
	},
	{
		title: 'Contact',
		path: '/contact',
	},
];

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<nav className={styles.nav}>
				<Link className={styles.navIcon} to='#' onClick={toggle}>
					<MenuIcon isOpen={isOpen} toggle={toggle} />
				</Link>
			</nav>
			{/* <SidebarNav isOpen={isOpen} onClick={toggle}> */}
			<Link
				to='/'
				onClick={() => {
					window.scrollTo({ top: 0, behavior: 'smooth' });
				}}
			>
				<img
					src={goLogo}
					alt=''
					className={`${styles.logo} ${isOpen ? styles.active : ''}`}
				/>
			</Link>
			<motion.aside
				className={`${styles.sidebar} ${isOpen ? styles.active : ''}`}
				animate={isOpen ? 'open' : 'closed'}
				isopen={isOpen.toString()}
				onClick={toggle}
			>
				<div className={styles.wrapper}>
					<Link className={styles.navIcon} to='#' onClick={toggle}>
						<AiIcons.AiOutlineClose className={styles.icon} />
					</Link>
					<motion.ul variants={variants}>
						{menuData.map((item, index) => {
							return <SidebarItem item={item} key={index} />;
						})}
					</motion.ul>
				</div>
			</motion.aside>
		</>
	);
};

export default Sidebar;
