import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarItem from './SidebarItem';
// import Logo from '../../assets/images/gologo.png';
import styles from './Sidebar.module.css';

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

const Nav = styled.div`
	background-color: transparent;
	position: absolute;
	right: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;
	font-size: calc(10px + 2vmin);
	color: white;
	margin: 0 2.5rem;
	z-index: 10;
`;

const NavIcon = styled(Link)`
	margin-left: 2rem;
	font-size: 2rem;
	height: 80px;
	display: flex;
	/* justify-content: flex-start; */
	align-items: center;
`;

const iconStyle = {
	color: '#2b93d1',
};

const SidebarNav = styled.aside`
	position: fixed;
	z-index: 999;
	background: #15171c;
	width: 400px;
	height: 100vh;
	display: flex;
	justify-content: center;
	top: 0;
	left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
	transition: 350ms;
`;

const SidebarWrapper = styled.div`
	width: 100%;
`;

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const hide = () => setIsOpen(false);
	const show = () => setIsOpen(true);

	return (
		<>
			<Nav>
				<NavIcon to='#'>
					{/* <FaIcons.FaBars onClick={toggle} style={iconStyle} /> */}
					{/* <div class='plate plate2' onclick="this.classList.toggle('active')"> */}
					<div className={styles.plate}>
						<svg
							class='burger'
							version='1.1'
							height='100'
							width='100'
							viewBox='0 0 100 100'
						>
							<path
								class='line line1'
								d='M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475'
							/>
							<path
								class='line line2'
								d='M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034'
							/>
							<path
								class='line line3'
								d='M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254'
							/>
							<path
								class='line line4'
								d='M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525'
							/>
							<path
								class='line line5'
								d='M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441'
							/>
							<path
								class='line line6'
								d='M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695'
							/>
						</svg>
						<svg
							class='x'
							version='1.1'
							height='100'
							width='100'
							viewBox='0 0 100 100'
						>
							<path class='line' d='M 34,32 L 66,68' />
							<path class='line' d='M 66,32 L 34,68' />
						</svg>
					</div>
				</NavIcon>
			</Nav>
			<SidebarNav sidebar={isOpen} onClick={toggle}>
				<SidebarWrapper>
					<NavIcon to='#'>
						<AiIcons.AiOutlineClose onClick={toggle} style={iconStyle} />
					</NavIcon>
					{menuData.map((item, index) => {
						return (
							<SidebarItem
								item={item}
								key={index}
								// onClick={toggle}
								// onBlur={hide}
								// onFocus={show}
							/>
						);
					})}
				</SidebarWrapper>
			</SidebarNav>
		</>
	);
};

export default Sidebar;
