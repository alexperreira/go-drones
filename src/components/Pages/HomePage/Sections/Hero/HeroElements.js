import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { devices } from '../../../../../device';

export const HeroContainer = styled.div`
	background: #fff;
	display: flex;
	justify-content: left;
	align-items: center;
	// min-width: 100%;
	height: 50rem;
	margin: 0;
	width: 100vw;
	max-width: 2000px;
	position: relative;
	z-index: 2;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
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
	align-self: center;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	// min-width: 1024px;
	width: 100vw;
	min-height: 100%;
	overflow: hidden;
`;

export const VideoBg = styled.video`
	// min-width: 1024px;
	// width: 100%;
	max-width: 100%;
	min-height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232342;
	position: relative;
	overflow: hidden;

	@media (max-width: 1024px) {
		// left: 50%;
		// margin-left: -512px;
	}
`;

export const Font = css`
	color: #fff;
	font-size: 10rem;
	font-family: 'Avenir Next Heavy';
	text-align: left;
	text-transform: uppercase;
	line-height: 10.5rem;
	margin: 0;
`;

export const HeroContent = styled.div`
	z-index: 3;
	max-width: 1200px;
	width: 100vw;
	position: absolute;
	padding: 0.5rem 1.5rem;
	margin-left: 1.5rem;
	overflow: hidden;

	h1 {
		${Font}
	}

	h2 {
		${Font}
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 2px #fff;
	}

	@media ${devices.tablet} {
		h1 {
			font-size: 6rem;
			line-height: 6.5rem;
		}

		h2 {
			font-size: 6rem;
			line-height: 6.5rem;
		}
	}

	@media ${devices.mobileL} {
		max-width: 90%;
		line-height: 4.5rem;
		h1 {
			font-size: 4rem;
			line-height: 4.5rem;
		}

		h2 {
			font-size: 4rem;
			line-height: 4.5rem;
		}
		p {
			font-size: 1.2rem;
		}
	}
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

	@media ${devices.mobileL} {
		h2 {
			font-size: 1rem;
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
