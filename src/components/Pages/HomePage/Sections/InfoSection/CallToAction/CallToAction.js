import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section, BgOverlay, TextGroup, Button } from './CallToActionElements';
import ContactButton from '../../../../../UI/ContactButton';

const fadeIn = {
	hidden: { opacity: 0, scale: 1 },
	visible: { opacity: 1, scale: [1, 1.5, 1] },
};

const fadeUp = {
	hidden: { opacity: 0, y: 100 },
	visible: { opacity: 1, y: 0 },
};

const CallToAction = () => {
	// const controls = useAnimation();
	// const { ref1, inView } = useInView();
	const navigate = useNavigate();

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
						variants={fadeIn}
						initial='hidden'
						animate='visible'
						transition={{ duration: 1, delay: 0.2 }}
					>
						Ready to
					</motion.h1>
					<motion.h2
						variants={fadeIn}
						initial='hidden'
						animate='visible'
						transition={{ duration: 1, delay: 0.4 }}
					>
						Elevate your brand?
					</motion.h2>
					<TextGroup>
						<Button
							variants={fadeUp}
							initial='hidden'
							animate='visible'
							whileHover={{ scale: 1.05 }}
							onClick={() => navigate('/our-process')}
						>
							Need more convincing?
						</Button>
					</TextGroup>
					<ContactButton />
				</TextGroup>
			</BgOverlay>
		</Section>
	);
};

export default CallToAction;
