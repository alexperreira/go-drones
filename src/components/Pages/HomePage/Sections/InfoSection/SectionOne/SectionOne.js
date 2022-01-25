import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
	Section,
	BgOverlay,
	TextGroup,
	White,
	InfoH2,
	InfoP,
	Span,
} from './SectionOneElements';

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

	const pop = {
		unscaled: { scale: 5 },
		scaled: { scale: 1 },
	};
	return (
		<Section>
			<BgOverlay>
				<TextGroup>
					<motion.h1
						ref={ref}
						variants={fadeRight}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 1 }}
					>
						Experience the night sky
					</motion.h1>
					<motion.h2
						ref={ref}
						variants={fadeLeft}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 1.2 }}
					>
						Like never before
					</motion.h2>
				</TextGroup>

				<TextGroup>
					<motion.p
						ref={ref}
						variants={fadeUp}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 1.4 }}
					>
						Our <Span>cutting-edge technology </Span>
						allows us to
						<Span> make dreams a reality</Span> &mdash; from text to logos to
						3-D shapes.
					</motion.p>
				</TextGroup>
			</BgOverlay>
		</Section>
	);
};

export default SectionOne;
