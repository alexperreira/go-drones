import styled, { css } from 'styled-components';
import { devices } from '../../../../../../device';

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	/* height: 100%; */
	background: #000;
	z-index: 1;
`;

export const Container = css`
	position: relative;
	align-self: center;
	width: 100%;
	max-width: 1400px;
	margin: 4rem 2rem;
`;

export const Grid = styled.div`
	${Container}
	display: grid;
	grid-template-columns: 1fr 1fr;

	@media ${devices.tablet} {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const Box = styled.div`
	${Container}
	display: flex;
	flex-direction: column-reverse;
`;

export const Div = styled.div`
	${Container}
	display: flex;
	flex-direction: column;
	// margin: 0;

	// @media ${devices.tablet} {
	// 	div:nth-child(1n) {
	// 		flex-direction: column-reverse;
	// 	}
	// }
`;

export const Image = css`
	width: 90%;
	max-width: 400px;
	min-width: 120px;

	@media ${devices.laptop} {
		width: 180px;
	}

	@media ${devices.tablet} {
		order: 1;
		margin: 20px;
	}
`;

export const ImageRight = styled.div`
	margin: 0 20px 0 auto;
	img {
		${Image}
	}

	@media ${devices.tablet} {
		margin: 20px;
	}
`;

export const ImageLeft = styled.div`
	margin: 0 auto 0 20px;
	img {
		${Image}
	}

	@media ${devices.tablet} {
		margin: 20px;
	}
`;

export const TextGroup = styled.div`
	align-self: center;
	margin-right: 0;
	width: 90%;
	display: flex;
	flex-direction: column;

	h1 {
		color: #fff;
		font-family: 'Avenir Next Heavy';
		font-size: 4rem;
		text-align: left;
		text-transform: uppercase;
		margin-left: 2rem;
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
		margin-right: 2rem;
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

export const TextBlurb = styled.div`
	width: 600px;
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	margin: 10px;

	h3 {
		font-family: 'Avenir Next Heavy';
		font-size: 2.5rem;
		text-transform: uppercase;
	}

	p {
		font-size: 1.8rem;
		margin: 0;
	}

	span {
		font-family: 'Avenir Next Heavy';
		font-size: inherit;
		color: #fff;
	}

	@media ${devices.laptop} {
		max-width: 90%;

		h3 {
			font-size: 2.3rem;
		}

		p {
			font-size: 1.5rem;
		}
	}

	@media ${devices.tablet} {
		max-width: 90%;
		order: 2;

		h3 {
			font-size: 2rem;
		}

		p {
			font-size: 1.4rem;
		}
	}
	@media ${devices.tabletS} {
		max-width: 90%;
		flex-direction: column;

		p {
			font-size: 1.6rem;
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
`;
