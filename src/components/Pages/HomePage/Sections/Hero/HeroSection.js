import React from 'react';
import { motion } from 'framer-motion';

import {
	HeroContainer,
	Logo,
	HeroBg,
	VideoBg,
	HeroContent,
	H2Wrapper,
	Slash,
} from './HeroElements';

import Video from '../../../../assets/videos/drone-reel.mp4';

const HeroSection = () => {
	const fadeLeft = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0 },
	};

	const fadeRight = {
		hidden: { opacity: 0, x: 100 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<HeroContainer id='home'>
			<Logo />
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>
			<HeroContent>
				<motion.h1
					variants={fadeLeft}
					initial='hidden'
					animate='visible'
					transition={{ duration: 0.2, delay: 1 }}
				>
					Go
				</motion.h1>
				<motion.h2
					variants={fadeRight}
					initial='hidden'
					animate='visible'
					transition={{ duration: 0.2, delay: 1.2 }}
				>
					Drones
				</motion.h2>
				<H2Wrapper>
					<h2>
						Elevate <Slash>/</Slash> your <Slash>/</Slash> brand
					</h2>
				</H2Wrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
