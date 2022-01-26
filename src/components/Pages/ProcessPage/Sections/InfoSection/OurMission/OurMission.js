import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, Div } from './OurMissionElements';
import ContactButton from '../../../../../UI/ContactButton';

const fadeUp = {
	hidden: { opacity: 0, y: 100 },
	visible: { opacity: 1, y: 0 },
};

const OurMission = () => {
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
				<motion.h3
					ref={ref}
					variants={fadeUp}
					initial='hidden'
					animate={controls}
					transition={{ duration: 1, delay: 0.2 }}
				>
					Our Mission
				</motion.h3>
				<motion.p
					ref={ref}
					variants={fadeUp}
					initial='hidden'
					animate={controls}
					transition={{ duration: 1, delay: 0.4 }}
				>
					Our <span>mission</span> is to ensure your vision, direction, and
					brand are represented in the most <span>unique, cutting edge</span>{' '}
					way through custom drone shows.
				</motion.p>
			</Div>
			<ContactButton style={{ margin: '4rem 0' }} />
		</Section>
	);
};

export default OurMission;
