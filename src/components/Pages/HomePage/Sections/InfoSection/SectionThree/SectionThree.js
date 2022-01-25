import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, BgOverlay, TextGroup } from './SectionThreeElements';

const fadeIn = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const SectionThree = () => {
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
					<motion.p
						ref={ref}
						variants={fadeIn}
						inital='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.5 }}
					>
						When you work with <span> Go Drones</span>, our expert pilots,
						animators, and production crew will help you create and run your own{' '}
						<span> one-of-a-kind experience</span>.
					</motion.p>
				</TextGroup>
			</BgOverlay>
		</Section>
	);
};

export default SectionThree;
