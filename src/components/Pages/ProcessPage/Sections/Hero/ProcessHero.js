import React from 'react';

import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
} from './ProcessHeroElements';

import Video from '../../../../assets/videos/drone-process-reel.mp4';
import { motion } from 'framer-motion';

const ProcessHero = () => {
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
			<HeroBg>
				<VideoBg autoPlay loop muted playsInline src={Video} type='video/mp4' />
			</HeroBg>
			<HeroContent>
				<motion.h1
					variants={fadeLeft}
					initial='hidden'
					animate='visible'
					transition={{ duration: 0.2, delay: 1 }}
				>
					Why
				</motion.h1>
				<motion.h2
					variants={fadeRight}
					initial='hidden'
					animate='visible'
					transition={{ duration: 0.2, delay: 1.2 }}
				>
					Go drones?
				</motion.h2>
			</HeroContent>
		</HeroContainer>
	);
};

export default ProcessHero;
