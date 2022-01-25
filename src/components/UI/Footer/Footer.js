import React from 'react';
import { Section, Logo, IconGroup, Copyright } from './FooterElements';
import { FaFacebookF as Facebook } from 'react-icons/fa';
import { FaInstagram as Instagram } from 'react-icons/fa';
import { ImYoutube2 as Youtube } from 'react-icons/im';

const Footer = () => {
	return (
		<Section>
			<Logo />
			<IconGroup>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.facebook.com/GO-Drones-102153468981541'
				>
					<Facebook />
				</a>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.instagram.com/godroneshows/'
				>
					<Instagram />
				</a>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.youtube.com/channel/UCeGORppuLG9fSvj-VYLIAFw'
				>
					<Youtube />
				</a>
			</IconGroup>
			<Copyright>
				Copyright &copy; 2022 The Go Agency | All rights reserved
			</Copyright>
		</Section>
	);
};

export default Footer;
