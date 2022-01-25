import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
	Section,
	BgOverlay,
	TextGroup,
} from './SectionTwoElements';

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

const SectionTwo = () => {
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
					<motion.h1 ref={ref} variants={fadeRight} initial='hidden' animate={controls} transition={{ duration: 1, delay: .2 }}>Bring your vision</motion.h1>
					<motion.h2 ref={ref} variants={fadeLeft} initial='hidden' animate={controls} transition={{ duration: 1, delay: .4 }}>To life</motion.h2>
				</TextGroup>

				<TextGroup>
					<motion.p ref={ref} variants={fadeUp} initial='hidden' animate={controls} transition={{ duration: 1, delay: .6 }}>
						Whether you're an advertising agency, event marketer, production
						company, or tourism association, we collaborate with you to{' '}
						<span> make your dream a reality</span>.
					<br />
					<br />
						From EDC to Burning Man to private events, our drone light shows
						have attracted <span> thousands of viewers</span> and received{' '}
						<span>millions of social media impressions</span>.
					</motion.p>
				</TextGroup>
			</BgOverlay>
		</Section>
	);
};

export default SectionTwo;
