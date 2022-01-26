import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, TextGroup, Div, TextBlurb } from './TimelineElements';

const left = { float: 'left', textAlign: 'left' };

const fadeRight = {
	hidden: { opacity: 0, x: 100 },
	visible: { opacity: 1, x: 0 },
};
const fadeLeft = {
	hidden: { opacity: 0, x: -100 },
	visible: { opacity: 1, x: 0 },
};

const Initiate = () => {
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
			<TextGroup>
				<motion.h1
					ref={ref}
					variants={fadeRight}
					initial='hidden'
					animate={controls}
					transition={{ duration: 1, delay: 0.2 }}
				>
					Our process to bring
				</motion.h1>
				<motion.h2
					ref={ref}
					variants={fadeLeft}
					initial='hidden'
					animate={controls}
					transition={{ duration: 1, delay: 0.4 }}
				>
					your vision to life
				</motion.h2>
			</TextGroup>
			<Div>
				<TextBlurb style={left}>
					<motion.h3
						ref={ref}
						variants={fadeRight}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.2 }}
					>
						Initiate
					</motion.h3>
					<motion.p
						ref={ref}
						variants={fadeLeft}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.2 }}
					>
						Our <span> world-class team</span> collaborates with you to ensure{' '}
						<span>we completely understand </span> your vision
					</motion.p>
				</TextBlurb>
			</Div>
		</Section>
	);
};

export default Initiate;