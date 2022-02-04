import styled from 'styled-components';
import { motion } from 'framer-motion';
import { devices } from '../../../../../device';

export const HeroContainer = styled.div`
	background: #0c0c0c;
	display: flex;
	justify-content: left;
	align-items: center;
	/* padding: 0 30px; */
	// height: 800px;
	height: 50rem;
	margin: 0;
	width: 100%;
	position: relative;
	z-index: 2;
	top: 0;

	&::before {
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

export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232342;
`;

export const HeroContent = styled.div`
	z-index: 3;
	max-width: 1200px;
	position: absolute;
	padding: 0.5rem 1.5rem;
	margin-left: 1.5rem;

	h1 {
		color: #fff;
		font-size: 10rem;
		font-family: 'Avenir Next Heavy';
		text-align: left;
		text-transform: uppercase;
		line-height: 8.5rem;
		margin: 0;
	}

	h2 {
		color: #fff;
		font-size: 10rem;
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

	@media ${devices.tablet} {
		h1 {
			font-size: 8rem;
		}

		h2 {
			font-size: 8rem;
		}
	} ;
`;

export const H2Wrapper = styled.div`
	display: flex;
	/* width: 50%; */
	justify-content: space-around;
	float: left;

	h2 {
		color: #fff;
		text-transform: uppercase;
		font-family: 'Avenir Next Thin';
		font-size: 1.5rem;
		margin-left: 0.5rem;
	}

	@media ${devices.tablet} {
		h2 {
			font-size: 1.2rem;
		}
	}
`;

// export const HeroH2 = styled.h2`
// 	color: #fff;
// 	text-transform: uppercase;
// 	font-family: 'Avenir Next Thin';
// 	font-size: 1.5rem;
// `;

export const Slash = styled(motion.h3)`
	display: inline-block;
	color: #2b93d1;
	margin: auto 1rem;
	font-size: 1.5rem;
	font-family: 'Avenir Next Thin';

	@media ${devices.tablet} {
		h3 {
			font-size: 1.2rem;
		}
	}
`;
