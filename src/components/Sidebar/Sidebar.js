import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarItem from './SidebarItem';
// import Logo from '../../assets/images/gologo.png';

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
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<Nav>
				<NavIcon to='#'>
					<FaIcons.FaBars onClick={showSidebar} style={iconStyle} />
				</NavIcon>
			</Nav>
			<SidebarNav sidebar={sidebar}>
				<SidebarWrapper>
					<NavIcon to='#'>
						<AiIcons.AiOutlineClose onClick={showSidebar} style={iconStyle} />
					</NavIcon>
					{menuData.map((item, index) => {
						return <SidebarItem item={item} key={index} />;
					})}
				</SidebarWrapper>
			</SidebarNav>
		</>
	);
};

export default Sidebar;
