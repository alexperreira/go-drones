import styled from 'styled-components';
import bg from '../../../../../assets/images/section2-bg.png';
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

	@media ${devices.tablet} {
		height: 100vh;
	}
`;

export const BgOverlay = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.6) 0%,
			rgba(0, 0, 0, 0.6) 100%
		),
		linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
	width: 100%;
	height: 100%;
	z-index: 2;

	@media ${devices.tablet} {
		justify-content: center;
	}
`;

export const TextGroup = styled.div`
	align-self: center;
	width: 1000px;

	h1 {
		color: #fff;
		font-family: 'Avenir Next Heavy';
		font-size: 4rem;
		text-transform: uppercase;
		margin: 0;
		word-wrap: nowrap;
	}

	h2 {
		font-size: 4rem;
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
`;
