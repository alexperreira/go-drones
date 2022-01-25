import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const SidebarLink = styled(Link)`
	display: block;
	color: #e1e9fc;
	text-decoration: none;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	list-style: none;
	height: 60px;
	text-decoration: none;
	font-size: 18px;

	&:hover {
		background: #252831;
		border-left: 4px solid #2b93d1;
		cursor: pointer;
	}

	div {
		font-family: 'Avenir Next Heavy';
	}
`;

const SidebarItem = ({ item }) => {
	return (
		<motion.li variants={variants}>
			<SidebarLink to={item.path}>
				<div>
					{/* {item.icon} */}
					<span>{item.title}</span>
				</div>
			</SidebarLink>
		</motion.li>
	);
};

export default SidebarItem;
