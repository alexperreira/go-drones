import React from 'react';
import { motion } from 'framer-motion';
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
	// const controls = useAnimation();
	// const { ref, inView } = useInView();

	// useEffect(() => {
	// 	if (inView) {
	// 		controls.start('visible');
	// 	}
	// 	if (!inView) {
	// 		controls.start('hidden');
	// 	}
	// }, [controls, inView]);

	return (
		<Section>
			<BgOverlay>
				<TextGroup>
					<motion.h1
						variants={fadeRight}
						initial='hidden'
						animate='visible'
						transition={{ duration: 1, delay: 0.2 }}
					>
						Experience the night sky
					</motion.h1>
					<motion.h2
						variants={fadeLeft}
						initial='hidden'
						animate='visible'
						transition={{ duration: 1, delay: 0.4 }}
					>
						Like never before
					</motion.h2>
				</TextGroup>

				<TextGroup>
					<motion.p
						variants={fadeUp}
						initial='hidden'
						animate='visible'
						transition={{ duration: 1, delay: 0.6 }}
					>
						Our <span>cutting-edge technology </span>
						allows us to
						<span> make dreams a reality</span> &mdash; from text to logos to
						3-D shapes.
					</motion.p>
				</TextGroup>
			</BgOverlay>
		</Section>
	);
};

export default SectionOne;
