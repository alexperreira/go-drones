import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, Div } from './OurTeamElements';

const fadeUp = {
	hidden: { opacity: 0, y: 100 },
	visible: { opacity: 1, y: 0 },
};

const OurTeam = () => {
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
					our team
				</motion.h3>
				<motion.p
					ref={ref}
					variants={fadeUp}
					initial='hidden'
					animate={controls}
					transition={{ duration: 1, delay: 0.4 }}
				>
					Our experienced pilots, professional in-house design team, and
					production crew has worked with some of the{' '}
					<span>biggest shows across the globe.</span> We are constantly
					upgrading and improving our proprietary software to make the best even
					better, allowing us to set ourselves apart from everyone else in the
					industry by scaling your one-of-a-kind drone show from one&mdash;to thousands.
					<br />
					<br />
					Every <span>Go Drones</span> show is programmed and rendered with our indsutry-leading fligh-planning software, and then tested prior to the official launch to verify content, movement, location, and safety perimeters to keep all clients, staff, and spectators safe. 
				</motion.p>
			</Div>
		</Section>
	);
};

export default OurTeam;
