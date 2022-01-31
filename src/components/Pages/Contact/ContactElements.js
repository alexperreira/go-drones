import styled from 'styled-components';
import { motion } from 'framer-motion';
import bg from '../../assets/images/section2-bg.png';

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

export const HeroContainer = styled.div`
	background: url(${bg});
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	justify-content: left;
	align-items: center;
	/* padding: 0 30px; */
	height: 100vh;
	width: 100%;
	position: relative;
	z-index: 2;
	top: 0;

	:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0) 0%,
				rgba(0, 0, 0, 0.6) 100%
			),
			linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
		z-index: 3;
	}
`;

export const HeroContent = styled.div`
	z-index: 3;
	max-width: 1200px;
	display: flex;
	flex-direction: column;
	padding: 0.5rem 1.5rem;
	margin-left: 1.5rem;
	align-content: center;
	justify-content: center;

	h1 {
		color: #fff;
		font-size: 8rem;
		font-family: 'Avenir Next Heavy';
		text-align: left;
		text-transform: uppercase;
		line-height: 8.5rem;
		margin: 0;
	}

	h2 {
		color: #fff;
		font-size: 8rem;
		font-family: 'Avenir Next Heavy';
		text-align: left;
		text-transform: uppercase;
		line-height: 8.5rem;
		margin: 0;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 2px #fff;
	}
`;

export const Div = styled(motion.div)`
	align-self: center;
	width: 1000px;
	z-index: 5;

	h1 {
		color: #fff;
		font-family: 'Avenir Next Heavy';
		font-size: 3.5rem;
		text-transform: uppercase;
		margin: 0;
		word-wrap: nowrap;
	}

	h2 {
		font-size: 3.5rem;
		font-family: 'Avenir Next Heavy';
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 2px #fff;
		text-transform: uppercase;
		margin: 0;
		text-align: right;
	}

	p {
		font-family: 'Avenir Next Regular';
		font-size: 2.5rem;
		color: #fff;
	}

	span {
		font-family: 'Avenir Next Heavy';
		font-size: inherit;
		color: #fff;
	}
`;
