import styled, { keyframes } from 'styled-components';

export const fadeInRight = keyframes`
	0% {
		opacity: 0;
		transform: translateX(50px);
	}
	100% {
		opacity: 1;
		transform: translateX(0px);
	}
`;

export const InfoContainer = styled.section`
	height: 800px;
	padding: 40px;
`;

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	/* margin: 40px 20px; */
`;

export const TextGroup = styled.div`
	align-self: center;
	width: 1000px;
	/* animation: ${fadeInRight} 350ms linear 1s; */
`;

export const White = styled.h2`
	color: #fff;
	font-family: 'Avenir Next Heavy';
	font-size: 4rem;
	text-transform: uppercase;
	margin: 0;
	word-wrap: nowrap;
`;

export const WhiteH1 = styled.h2`
	color: #fff;
	font-family: 'Avenir Next Heavy';
	font-size: 5rem;
	text-transform: uppercase;
	margin: 0;
	word-wrap: nowrap;
`;

export const InfoH1 = styled.h1`
	font-family: 'Avenir Next Heavy';
	font-size: 5rem;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-text-stroke: 2px #fff;
	text-transform: uppercase;
	margin: 0;
`;

export const InfoH2 = styled.h2`
	font-size: 4rem;
	font-family: 'Avenir Next Heavy';
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-text-stroke: 2px #fff;
	text-transform: uppercase;
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

export const InfoP2 = styled.p`
	font-family: 'Avenir Next Regular';
	font-size: 3rem;
	color: #fff;
`;

// export const Span2 = styled.span`
// 	font-family: 'Avenir Next Heavy';
// 	font-size: ;
// `;
