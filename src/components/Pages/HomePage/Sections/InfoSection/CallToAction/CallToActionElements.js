import styled from 'styled-components';
import { motion } from 'framer-motion';

import bg from '../../../../../assets/images/section6-bg.png';
import { devices } from '../../../../../../device';

export const Section = styled.div`
	min-width: 100%;
	width: 100%;
	height: 800px;
	background: url(${bg});
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	z-index: 1;
	overflow: hidden;
`;

export const BgOverlay = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 0.6) 100%
		),
		linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
	width: 100%;
	height: 100%;
	z-index: 2;
`;

export const TextGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	width: 1000px;
	text-align: center;
	overflow: hidden;

	h1 {
		color: #fff;
		font-family: 'Avenir Next Heavy';
		font-size: 5rem;
		text-transform: uppercase;
		margin: 0;
		word-wrap: nowrap;
	}

	h2 {
		font-family: 'Avenir Next Heavy';
		font-size: 5rem;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 2px #fff;
		text-transform: uppercase;
		margin: 0;
	}

	@media ${devices.laptopL} {
		max-width: 900px;

		h1 {
			font-size: 4.2rem;
		}

		h2 {
			font-size: 4.2rem;
		}
	}

	@media ${devices.laptop} {
		max-width: 800px;

		h1 {
			font-size: 3.6rem;
		}

		h2 {
			font-size: 3.6rem;
		}
	}

	@media ${devices.tablet} {
		max-width: 640px;

		h1 {
			font-size: 2.8rem;
		}

		h2 {
			font-size: 2.8rem;
		}
	}

	@media ${devices.tabletS} {
		max-width: 400px;

		h1 {
			font-size: 2rem;
		}

		h2 {
			font-size: 2rem;
		}
	}

	@media ${devices.mobileL} {
		max-width: 370px;

		h1 {
			font-size: 1.6rem;
		}

		h2 {
			font-size: 1.6rem;
		}
	}
`;

export const Button = styled(motion.button)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	align-self: center;
	background: #2b93d1;
	color: #fff;
	text-transform: uppercase;
	font-family: 'Avenir Next Heavy';
	font-size: 2rem;
	padding: 20px 40px;
	margin: 4rem 2rem 0 2rem;
	border: none;
	width: 35rem;
	overflow: hidden;

	@media ${devices.laptop} {
		font-size: 1.5rem;
	}

	@media ${devices.tablet} {
		font-size: 1rem;
		width: 20rem;
	}

	// @media ${devices.tabletS} {
	// 	font-size: 0.8rem;
	// }

	@media ${devices.mobileL} {
		width: 18rem;
		h1 {
			font-size: 1.8rem;
		}

		h2 {
			font-size: 1.8rem;
		}
	}
`;
