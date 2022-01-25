import styled from 'styled-components';

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	/* align-items: center; */
	width: 100%;
	/* height: 100%; */
	background: #000;
	z-index: 1;
`;

export const Div = styled.div`
	position: relative;
	align-self: center;
	width: 1000px;
	display: block;
	margin: 2rem;
`;

export const TextGroup = styled.div`
	align-self: center;
	width: 1000px;

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
