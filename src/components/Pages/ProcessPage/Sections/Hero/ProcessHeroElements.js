import styled from 'styled-components';
import { devices } from '../../../../../device';

import goLogo from '../../../../assets/images/gologo.png';

export const HeroContainer = styled.div`
	background: #0c0c0c;
	display: flex;
	justify-content: left;
	align-items: center;
	/* padding: 0 30px; */
	height: 800px;
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

export const Logo = styled.img.attrs({
	src: `${goLogo}`,
})`
	width: auto;
	height: 100px;
	position: absolute;
	top: 0;
	left: 0;
	margin: 2rem;
	z-index: 2;
`;

export const HeroContent = styled.div`
	z-index: 3;
	max-width: 1200px;
	position: absolute;
	padding: 8px 24px;
	margin-left: 24px;

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
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 2px white;
		text-transform: uppercase;
		line-height: 8.5rem;
		margin: 0;
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
