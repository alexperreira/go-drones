import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
import SidebarItem from './SidebarItem';

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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	font-size: calc(10px + 2vmin);
	color: white;
	margin: 0 2.5rem;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size:  2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)

	return (
        <>
            <Nav>
                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to='#'>
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </NavIcon>
                    {menuData.map((item, index) => {
                        return <SidebarItem item={item} key={index} />
                    })}
                </SidebarWrap>
            </SidebarNav>

        </>
    );
};

export default Sidebar;
