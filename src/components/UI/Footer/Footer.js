import React from 'react';
import { Section, Logo, IconGroup, Copyright } from './FooterElements';
import { FaFacebookF as Facebook } from 'react-icons/fa';
import { FaInstagram as Instagram } from 'react-icons/fa';
import { ImYoutube2 as Youtube } from 'react-icons/im';

const style = { color: '#404040', fontSize: '2rem' };

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
					<Facebook style={style}></Facebook>
				</a>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.instagram.com/godroneshows/'
				>
					<Instagram style={style} />
				</a>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.youtube.com/channel/UCeGORppuLG9fSvj-VYLIAFw'
				>
					<Youtube style={style} />
				</a>
			</IconGroup>
			<Copyright>
				Copyright &copy; 2022 The Go Agency | All rights reserved
			</Copyright>
		</Section>
	);
};

export default Footer;
