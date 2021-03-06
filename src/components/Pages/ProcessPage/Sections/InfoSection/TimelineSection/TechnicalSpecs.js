import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, TextGroup, Div, TextBlurb } from './TimelineElements';

const center = { margin: '0 auto', textAlign: 'center' };
// const bottom = { margin: '2rem 0', padding: '4rem 0' };

const fadeRight = {
	hidden: { opacity: 0, x: 100 },
	visible: { opacity: 1, x: 0 },
};
const fadeLeft = {
	hidden: { opacity: 0, x: -100 },
	visible: { opacity: 1, x: 0 },
};

const TechnicalSpecs = () => {
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
				<TextGroup>
					<Div>
						<motion.h1
							ref={ref}
							variants={fadeRight}
							initial='hidden'
							animate={controls}
							transition={{ duration: 1, delay: 0.2 }}
						>
							For the techies
						</motion.h1>
						<motion.h2
							ref={ref}
							variants={fadeLeft}
							initial='hidden'
							animate={controls}
							transition={{ duration: 1, delay: 0.2 }}
						>
							technical specs
						</motion.h2>
					</Div>
					<TextBlurb style={center}>
						<motion.p
							ref={ref}
							variants={fadeRight}
							initial='hidden'
							animate={controls}
							transition={{ duration: 1, delay: 0.5 }}
						>
							Up to <span>12 minutes</span> of lighted fligh time
						</motion.p>
						<motion.p
							ref={ref}
							variants={fadeLeft}
							initial='hidden'
							animate={controls}
							transition={{ duration: 1, delay: 0.7 }}
						>
							<span>400-foot </span> flight ceiling
						</motion.p>
						<motion.p
							ref={ref}
							variants={fadeRight}
							initial='hidden'
							animate={controls}
							transition={{ duration: 1, delay: 0.9 }}
						>
							<span>26 mph</span> wind threshold
						</motion.p>
						<motion.p
							ref={ref}
							variants={fadeLeft}
							initial='hidden'
							animate={controls}
							transition={{ duration: 1, delay: 1.1 }}
						>
							<span>FAA Approved</span>
						</motion.p>
						<motion.p
							ref={ref}
							variants={fadeRight}
							initial='hidden'
							animate={controls}
							transition={{ duration: 1, delay: 1.3 }}
						>
							<span>Pinpoint accuracy</span> using GPS coordinates
						</motion.p>
					</TextBlurb>
				</TextGroup>
			</Div>
		</Section>
	);
};

export default TechnicalSpecs;
