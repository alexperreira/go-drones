import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, Div, TextBlurb } from './TimelineElements';

const right = { float: 'right', textAlign: 'right' };

const fadeRight = {
	hidden: { opacity: 0, x: 100 },
	visible: { opacity: 1, x: 0 },
};
const fadeLeft = {
	hidden: { opacity: 0, x: -100 },
	visible: { opacity: 1, x: 0 },
};

const Perform = () => {
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
			<Div>
				<TextBlurb style={right}>
					<motion.h3
						ref={ref}
						variants={fadeLeft}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.2 }}
					>
						Perform
					</motion.h3>
					<motion.p
						ref={ref}
						variants={fadeRight}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.2 }}
					>
						Our professional pilots and production crew handle every aspect of
						your show&mdash;from setup to tear down&mdash;allowing you to{' '}
						<span>sit back and relax</span> as we{' '}
						<span>raise your brand to new heights</span>
					</motion.p>
				</TextBlurb>
			</Div>
		</Section>
	);
};

export default Perform;
