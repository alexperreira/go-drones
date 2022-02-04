import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HeroContainer, HeroContent, Div, Section } from './ContactElements';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView();
	const { ref1, inView1 } = useInView();
	const { ref2, inView2 } = useInView();
	const { ref3, inView3 } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	useEffect(() => {
		if (inView1) {
			controls.start('visible');
		}
		// if (!inView1) {
		// 	controls.start('hidden');
		// }
	}, [controls, inView1]);

	useEffect(() => {
		if (inView2) {
			controls.start('visible');
		}
		// if (inView2) {
		// 	controls.start('hidden');
		// }
	}, [controls, inView2]);

	useEffect(() => {
		if (inView3) {
			controls.start('visible');
		}
		// if (!inView3) {
		// 	controls.start('hidden');
		// }
	}, [controls, inView3]);

	const fadeLeft = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0 },
	};

	const fadeRight = {
		hidden: { opacity: 0, x: 100 },
		visible: { opacity: 1, x: 0 },
	};

	const fadeUp = {
		hidden: {
			opacity: 0,
			y: 100,
		},
		visible: { opacity: 1, y: 0 },
	};

	return (
		<>
			<HeroContainer>
				<HeroContent>
					<motion.h1
						ref={ref}
						variants={fadeLeft}
						initial='hidden'
						animate={controls}
						transition={{ duration: 0.2, delay: 0.5 }}
					>
						Bring your
					</motion.h1>
					<motion.h2
						ref={ref}
						variants={fadeRight}
						initial='hidden'
						animate={controls}
						transition={{ duration: 0.2, delay: 0.5 }}
					>
						vision to life
					</motion.h2>
				</HeroContent>
			</HeroContainer>
			<Section>
				<Div ref={ref1}>
					<motion.h1
						// ref={ref1}
						variants={fadeRight}
						initial='hidden'
						animate={controls}
						transition={{ duration: 0.2, delay: 0.5 }}
					>
						Elevate your brand
					</motion.h1>
					<motion.h2
						// ref={ref1}
						variants={fadeLeft}
						initial='hidden'
						animate={controls}
						transition={{ duration: 0.2, delay: 0.5 }}
					>
						Like never before
					</motion.h2>
				</Div>
				<Div ref={ref2}>
					<motion.p
						// ref={ref2}
						variants={fadeUp}
						initial='hidden'
						animate={controls}
						transition={{ duration: 0.2, delay: 1 }}
					>
						Ready to <span>raise the bar</span> on what you thought was
						possible?
					</motion.p>
					<motion.p
						// ref={ref2}
						variants={fadeUp}
						initial='hidden'
						animate={controls}
						transition={{ duration: 0.2, delay: 1.2 }}
					>
						Use the form below to get in touch!
					</motion.p>
					<motion.p
						// ref={ref2}
						variants={fadeUp}
						initial='hidden'
						animate={controls}
						transition={{ duration: 0.2, delay: 1.4 }}
					>
						Our <span>expert team</span> of pilots, animators, and production
						crew is waiting to bring your <span>dream to life</span>.
					</motion.p>

					<motion.h1
						ref={ref3}
						variants={fadeLeft}
						initial='hidden'
						animate={controls}
						transition={{ duration: 0.2, delay: 1.6 }}
					>
						We can't wait
					</motion.h1>
					<motion.h2
						ref={ref3}
						variants={fadeRight}
						initial='hidden'
						animate={controls}
						transition={{ duration: 0.2, delay: 1.8 }}
					>
						to fly together!
					</motion.h2>
				</Div>
			</Section>
			<Section>
				{/* <div id='form' style={{}}></div> */}
				<ContactForm id='form' />
			</Section>
		</>
	);
};

export default Contact;
