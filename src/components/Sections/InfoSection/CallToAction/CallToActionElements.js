import styled from 'styled-components';

import bg from '../../../../assets/images/section6-bg.png';

export const Section = styled.div`
	width: 100%;
	height: 100%;
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
	text-align: center;
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

export const Button = styled.button`
	background: #2b93d1;
	color: #fff;
	text-transform: uppercase;
	font-family: 'Avenir Next Heavy';
	font-size: 2rem;
	padding: 20px 40px;
	margin: 2rem;
	border: none;
`;
