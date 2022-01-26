import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, BgOverlay, TextGroup, Button } from './CallToActionElements';
import ContactButton from '../../../../../UI/ContactButton';

const fadeIn = {
	hidden: { opacity: 0, scale: 1 },
	visible: { opacity: 1, scale: [1, 1.5, 1] },
};

const CallToAction = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView();
	const navigate = useNavigate();

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
					<ContactButton />
					<TextGroup>
						<Button
							whileHover={{ scale: 1.05 }}
							onClick={() => navigate('/our-process')}
						>
							Need more convincing?
						</Button>
					</TextGroup>
				</TextGroup>
			</BgOverlay>
		</Section>
	);
};

export default CallToAction;
