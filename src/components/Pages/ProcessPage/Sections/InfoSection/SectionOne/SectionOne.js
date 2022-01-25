import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, BgOverlay, TextGroup } from './SectionOneElements';

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
	visible: { opacity: 1, y: 0 },
};

const SectionOne = () => {
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
						Elevate your brand
					</motion.h1>
					<motion.h2
						ref={ref}
						variants={fadeLeft}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.4 }}
					>
						to new heights
					</motion.h2>
				</TextGroup>

				<TextGroup>
					<motion.p
						ref={ref}
						variants={fadeUp}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.5 }}
					>
						<span>Push the boundaries </span> with endless creativity and{' '}
						<span> shine the spotlight </span> on your brand with{' '}
						<span> Go Drones</span>.
					</motion.p>
				</TextGroup>
			</BgOverlay>
		</Section>
	);
};

export default SectionOne;
