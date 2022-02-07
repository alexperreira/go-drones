import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const fadeUp = {
	hidden: { opacity: 0, y: 100 },
	visible: { opacity: 1, y: [100, -20, 0] },
};

const Button = styled(motion.button)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #2b93d1;
	color: #fff;
	text-transform: uppercase;
	font-family: 'Avenir Next Heavy';
	font-size: 2rem;
	padding: 20px 40px;
	margin: 4rem 0;
	border: none;
	width: 20rem;
	align-self: center;
	cursor: pointer;
`;

const ContactButton = () => {
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
	});

	return (
		<Button
			ref={ref}
			variants={fadeUp}
			initial='hidden'
			animate={controls}
			whileHover={{ scale: 1.05 }}
			onClick={() => navigate('/contact')}
		>
			Contact us
		</Button>
	);
};

export default ContactButton;
