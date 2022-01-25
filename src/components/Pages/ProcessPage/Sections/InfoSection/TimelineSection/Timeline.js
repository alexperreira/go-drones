import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, TextGroup, Div, TextBlurb } from './TimelineElements';

import Initiate from './Initiate';
import Animate from './Animate';
import Prepare from './Prepare';
import Perform from './Perform';
import TechnicalSpecs from './TechnicalSpecs';

const left = { float: 'left', textAlign: 'left' };
const right = { float: 'right', textAlign: 'right' };
const center = { margin: '0 auto', textAlign: 'center' };
const bottom = { margin: '2rem 0', paddingTop: '4rem' };

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
		<>
			<Initiate />

			<Animate />
			<Prepare />
			<Perform />

			<TechnicalSpecs />
		</>
	);
};

export default SectionOne;
