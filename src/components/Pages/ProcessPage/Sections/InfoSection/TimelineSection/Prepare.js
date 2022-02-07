import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, TextBlurb, ImageRight, Grid } from './TimelineElements';
import prepare from '../../../../../assets/images/PREPARE.png';

const left = { float: 'left', textAlign: 'left' };

const fadeRight = {
	hidden: { opacity: 0, x: 100 },
	visible: { opacity: 1, x: 0 },
};
const fadeLeft = {
	hidden: { opacity: 0, x: -100 },
	visible: { opacity: 1, x: 0 },
};

const Prepare = () => {
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
			<Grid>
				<TextBlurb style={left}>
					<motion.h3
						ref={ref}
						variants={fadeRight}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.2 }}
					>
						Prepare
					</motion.h3>
					<motion.p
						ref={ref}
						variants={fadeLeft}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.2 }}
					>
						Our drone experts handle all insurance and permitting, and perform
						extensive on-site testing to ensure{' '}
						<span>your show will be flawlessly executed</span>
					</motion.p>
				</TextBlurb>
				<ImageRight>
					<motion.img
						ref={ref}
						variants={fadeRight}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.2 }}
						src={prepare}
						alt=''
					/>
				</ImageRight>
			</Grid>
		</Section>
	);
};

export default Prepare;
