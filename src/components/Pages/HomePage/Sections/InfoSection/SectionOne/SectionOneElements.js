import styled from 'styled-components';
import bg from '../../../../../assets/images/section1-bg.png';
import { devices } from '../../../../../../device';

export const Section = styled.div`
	// min-width: 100%;
	position: relative;
	width: 100vw;
	height: 50rem;
	margin-top: -1.3rem;
	background: #000;
	background: url(${bg});
	background-position: bottom center;
	background-size: cover;
	background-repeat: no-repeat;
	z-index: 1;
	overflow: hidden;

	@media ${devices.tablet} {
		width: 100vw;
	}
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

	@media ${devices.tablet} {
		justify-content: center;
	}
`;

export const TextGroup = styled.div`
	align-self: center;
	width: 1000px;
	overflow: hidden;

	h1 {
		color: #fff;
		font-family: 'Avenir Next Heavy';
		font-size: 4rem;
		text-align: right;
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
		text-align: right;
		margin: 0;
		/* text-align: right; */
	}

	p {
		font-family: 'Avenir Next Regular';
		font-size: 3.5rem;
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

	@media ${devices.mobileL} {
		max-width: 90%;
		overflow: hidden;

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
`;

// export const Span = styled(motion.span)`
// 	font-family: 'Avenir Next Heavy';
// 	font-size: inherit;
// 	color: #fff;
// `;
