import styled from 'styled-components';

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	/* align-items: center; */
	width: 100%;
	height: 100%;
	background: #000;
	z-index: 1;
`;

// export const SubSection = styled.div`
// 	display: flex;
// 	width: 100%;
// 	background: #000;
// 	height: 600px;
// `;

// export const BgOverlay = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-around;
// 	background: linear-gradient(
// 			180deg,
// 			rgba(0, 0, 0, 0) 0%,
// 			rgba(0, 0, 0, 0.6) 100%
// 		),
// 		linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
// 	width: 100%;
// 	height: 100%;
// 	z-index: 2;
// `;

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
`;

export const White = styled.h2`
	color: #fff;
	font-family: 'Avenir Next Heavy';
	font-size: 4rem;
	text-align: left;
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

export const Span = styled.span`
	font-family: 'Avenir Next Heavy';
	font-size: inherit;
	color: #fff;
`;

export const TextBlurb = styled.div`
	width: 600px;
	color: #fff;
	/* align-self: left; */
`;

export const H3 = styled.h3`
	font-family: 'Avenir Next Heavy';
	font-size: 2.5rem;
	text-transform: uppercase;
`;

export const BlurbP = styled.p`
	font-size: 1.8rem;
	margin: 0;
`;
