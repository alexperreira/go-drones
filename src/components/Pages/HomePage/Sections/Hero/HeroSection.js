import React from 'react';
import { motion } from 'framer-motion';

import {
	HeroContainer,
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

	const fadeIn = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	const pop = {
		hidden: { opacity: 0, scale: 1 },
		visible: { opacity: 1, scale: [1, 1.5, 1] },
	};

	return (
		<HeroContainer>
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
					<motion.h2
						variants={fadeIn}
						initial='hidden'
						animate='visible'
						transition={{ duration: 0.2, delay: 1.4 }}
					>
						Elevate
					</motion.h2>
					<Slash
						variants={pop}
						initial='hidden'
						animate='visible'
						transition={{ duration: 0.5, delay: 1.6 }}
					>
						/
					</Slash>
					<motion.h2
						variants={fadeIn}
						initial='hidden'
						animate='visible'
						transition={{ duration: 0.2, delay: 1.5 }}
					>
						your
					</motion.h2>
					<Slash
						variants={pop}
						initial='hidden'
						animate='visible'
						transition={{ duration: 0.5, delay: 1.7 }}
					>
						/
					</Slash>
					<motion.h2
						variants={fadeIn}
						initial='hidden'
						animate='visible'
						transition={{ duration: 0.2, delay: 1.6 }}
					>
						brand
					</motion.h2>
				</H2Wrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
