import styled from 'styled-components';
import bg from '../../../../../assets/images/section2-bg.png';

export const Section = styled.div`
	width: 100%;
	height: 800px;
	background: url(${bg});
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	z-index: 1;
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
		font-size: 3rem;
		color: #fff;
	}

	span {
		font-family: 'Avenir Next Heavy';
		font-size: inherit;
		color: #fff;
	}
`;
