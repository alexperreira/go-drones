import styled, { css } from 'styled-components';

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	/* height: 100%; */
	background: #000;
	z-index: 1;
`;

export const Container = css`
	position: relative;
	align-self: center;
	width: 100%;
	max-width: 1200px;
	margin: 4rem;
`;

export const Grid = styled.div`
	${Container}
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

export const Div = styled.div`
	${Container}
`;

export const Image = css`
	width: 100%;
	max-width: 400px;
`;

export const ImageRight = styled.div`
	margin: 0 0 0 auto;
	img {
		${Image}
	}
`;

export const ImageLeft = styled.div`
	margin: 0 auto 0 0;
	img {
		${Image}
	}
`;

export const TextGroup = styled.div`
	align-self: center;

	// width: 1000px;

	h1 {
		color: #fff;
		font-family: 'Avenir Next Heavy';
		font-size: 4rem;
		text-align: left;
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
	}
`;

export const TextBlurb = styled.div`
	width: 600px;
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;

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
`;
