import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
	Section,
	BgOverlay,
	TextGroup,
	LogoGroup,
	Logo1,
	Logo2,
	Logo3,
	Logo4,
	Logo5,
} from './LogoSectionElements';

const fadeRight = {
	hidden: { opacity: 0, x: 100 },
	visible: { opacity: 1, x: 0 },
};
const fadeLeft = {
	hidden: { opacity: 0, x: -100 },
	visible: { opacity: 1, x: 0 },
};
const fadeUp = {
	hidden: { opacity: 0, y: 100 },
	visible: { opacity: 1, y: [100, -50, 0] },
};

const LogoSection = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
		if (!inView) {
			controls.start('hidden');
		}
	}, [controls, inView]);
	return (
		<Section>
			<BgOverlay>
				<TextGroup>
					<motion.h1
						ref={ref}
						variants={fadeRight}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.2 }}
					>
						Where Go Drones
					</motion.h1>
					<motion.h2
						ref={ref}
						variants={fadeLeft}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.4 }}
					>
						Have Been Spotted
					</motion.h2>
				</TextGroup>
				<LogoGroup>
					<motion.div
						ref={ref}
						variants={fadeUp}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.5 }}
					>
						<Logo1 />
					</motion.div>
					<motion.div
						ref={ref}
						variants={fadeUp}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.6 }}
					>
						<Logo2 />
					</motion.div>
					<motion.div
						ref={ref}
						variants={fadeUp}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.7 }}
					>
						<Logo3 />
					</motion.div>
					<motion.div
						ref={ref}
						variants={fadeUp}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.8 }}
					>
						<Logo4 />
					</motion.div>
					<motion.div
						ref={ref}
						variants={fadeUp}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.9 }}
					>
						<Logo5 />
					</motion.div>
				</LogoGroup>
			</BgOverlay>
		</Section>
	);
};

export default LogoSection;
