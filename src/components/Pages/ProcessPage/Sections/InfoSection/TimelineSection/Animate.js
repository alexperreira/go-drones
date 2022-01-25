import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, TextGroup, Div, TextBlurb } from './TimelineElements';

const left = { float: 'left', textAlign: 'left' };
const right = { float: 'right', textAlign: 'right' };
const center = { margin: '0 auto', textAlign: 'center' };
const bottom = { margin: '2rem 0', paddingTop: '4rem' };

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

const Animate = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
		if (!inView) {
			controls.start('hidden');
		}
	});
	return (
		<Section>
			<Div>
				<TextBlurb style={right}>
					<motion.h3
						ref={ref}
						variants={fadeLeft}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.2 }}
					>
						Animate
					</motion.h3>
					<motion.p
						ref={ref}
						variants={fadeRight}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.2 }}
					>
						We <span> handle every step of the process</span>, from concept
						storyboarding to final rendering, guaranteeing an unforgettable,
						awe-inspiring show that <span> brings your vision to life</span>
					</motion.p>
				</TextBlurb>
			</Div>
		</Section>
	);
};

export default Animate;
