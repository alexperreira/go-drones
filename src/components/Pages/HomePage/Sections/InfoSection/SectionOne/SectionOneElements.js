import styled from 'styled-components';
import bg from '../../../../../assets/images/section1-bg.png';

export const Section = styled.div`
	width: 100%;
	height: 800px;
	background: url(${bg});
	background-position: bottom center;
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
			rgba(0, 0, 0, 0) 0%,
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
`;

export const White = styled.h2`
	color: #fff;
	font-family: 'Avenir Next Heavy';
	font-size: 4rem;
	text-align: right;
	text-transform: uppercase;
	margin: 0;
	word-wrap: nowrap;
`;

export const InfoH2 = styled.h2`
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
`;

export const InfoP = styled.p`
	font-family: 'Avenir Next Regular';
	font-size: 3.5rem;
	color: #fff;
`;

export const Span = styled.span`
	font-family: 'Avenir Next Heavy';
	font-size: inherit;
	color: #fff;
`;
