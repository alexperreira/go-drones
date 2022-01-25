import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, BgOverlay, TextGroup, Button } from './CallToActionElements';

const fadeIn = {
	hidden: { opacity: 0, scale: 1 },
	visible: { opacity: 1, scale: [1, 1.5, 1] },
};

const CallToAction = () => {
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
						variants={fadeIn}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.2 }}
					>
						Ready to
					</motion.h1>
					<motion.h2
						ref={ref}
						variants={fadeIn}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1, delay: 0.4 }}
					>
						Elevate your brand?
					</motion.h2>
					<Button whileHover={{ scale: 1.05 }}>Contact us</Button>
				</TextGroup>
			</BgOverlay>
		</Section>
	);
};

export default CallToAction;
