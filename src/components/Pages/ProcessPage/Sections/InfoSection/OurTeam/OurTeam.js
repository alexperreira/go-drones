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
					The <span>Go Drones team</span> has worked at some of the biggest
					shows <span>across the globe</span>. Our partnerships with other
					companies allows us to have the <span>best talent</span> as well as
					access to up to <span>1000 drones</span> to use in our shows.
				</motion.p>
			</Div>
		</Section>
	);
};

export default OurTeam;
