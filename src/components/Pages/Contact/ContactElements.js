import styled from 'styled-components';
import { motion } from 'framer-motion';
import bg from '../../assets/images/section2-bg.png';
import { devices } from '../../../device';

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	margin: 2rem 0;

	@media ${devices.tablet} {
		width: 90%;
		// align-self: center;
		margin: 0 auto;
	}
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
	height: 50rem;
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
		margin: 0;
	}

	h2 {
		color: #fff;
		font-size: 8rem;
		font-family: 'Avenir Next Heavy';
		text-align: left;
		text-transform: uppercase;
		margin: 0;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 2px #fff;
	}

	@media (max-width: 1200px) {
		h1 {
			font-size: 5rem;
		}

		h2 {
			font-size: 5rem;
		}
	}

	@media (max-width: 375px) {
		h1 {
			font-size: 4rem;
		}

		h2 {
			font-size: 4rem;
		}
	}
`;

export const Div = styled(motion.div)`
	align-self: center;
	width: 1000px;
	z-index: 5;
	// margin: 2rem;

	h1 {
		color: #fff;
		font-family: 'Avenir Next Heavy';
		font-size: 3.5rem;
		text-transform: uppercase;
		word-wrap: nowrap;
		margin: 2rem 0;
	}

	h2 {
		font-size: 3.5rem;
		font-family: 'Avenir Next Heavy';
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 2px #fff;
		text-transform: uppercase;
		margin: 2rem 0;
		text-align: right;
	}

	p {
		font-family: 'Avenir Next Regular';
		font-size: 2.5rem;
		color: #fff;
		margin: 2.5rem 0;
	}

	span {
		font-family: 'Avenir Next Heavy';
		font-size: inherit;
		color: #fff;
	}

	@media ${devices.laptop} {
		max-width: 700px;

		h1 {
			font-size: 3rem;
		}

		h2 {
			font-size: 3rem;
		}

		p {
			font-size: 2.5rem;
		}
	}

	@media ${devices.tablet} {
		max-width: 600px;
		margin: 1rem 0;

		h1 {
			font-size: 2rem;
		}

		h2 {
			font-size: 2rem;
		}

		p {
			font-size: 2rem;
		}
	}
	@media ${devices.tabletS} {
		max-width: 400px;

		h1 {
			font-size: 1.5rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		p {
			font-size: 1.5rem;
		}
	}

	@media ${devices.mobileL} {
		max-width: 90%;

		h1 {
			font-size: 1.2rem;
		}

		h2 {
			font-size: 1.2rem;
		}
		p {
			font-size: 1.2rem;
		}
	}

	@media (max-width: 1200px) {
		width: 750px;
		h1 {
			font-size: 2.5rem;
		}

		h2 {
			font-size: 2.5rem;
		}
		p {
			font-size: 2rem;
		}
	}

	@media (max-width: 768px) {
		width: 100%;
		h1 {
			font-size: 2rem;
		}

		h2 {
			font-size: 2rem;
		}
		p {
			font-size: 1.6rem;
		}
	}
`;
