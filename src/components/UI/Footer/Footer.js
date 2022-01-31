import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section, Logo, IconGroup, Copyright } from './FooterElements';
import { FaFacebookF as Facebook } from 'react-icons/fa';
import { FaInstagram as Instagram } from 'react-icons/fa';
import { ImYoutube2 as Youtube } from 'react-icons/im';

const Footer = () => {
	return (
		<Section>
			<Link
				to='/'
				onClick={() => {
					window.scrollTo({ top: 0, behavior: 'smooth' });
				}}
			>
				<Logo />
			</Link>
			<IconGroup>
				<motion.a
					whileHover={{ scale: 1.25 }}
					target='_blank'
					rel='noreferrer'
					href='https://www.facebook.com/GO-Drones-102153468981541'
				>
					<Facebook />
				</motion.a>
				<motion.a
					whileHover={{ scale: 1.25 }}
					target='_blank'
					rel='noreferrer'
					href='https://www.instagram.com/godroneshows/'
				>
					<Instagram />
				</motion.a>
				<motion.a
					whileHover={{ scale: 1.25 }}
					target='_blank'
					rel='noreferrer'
					href='https://www.youtube.com/channel/UCeGORppuLG9fSvj-VYLIAFw'
				>
					<Youtube />
				</motion.a>
			</IconGroup>
			<Copyright>
				Copyright &copy; 2022 The Go Agency | All rights reserved
			</Copyright>
		</Section>
	);
};

export default Footer;
