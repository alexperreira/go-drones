import styled from 'styled-components';
import bg from '../../../../../assets/images/section3-bg.png';

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
			rgba(0, 0, 0, 0.2) 0%,
			rgba(0, 0, 0, 0.6) 100%
		),
		linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, transparent 100%);
	width: 100%;
	height: 100%;
	z-index: 2;
`;

export const TextGroup = styled.div`
	align-self: center;
	width: 1000px;

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
`;

export const Span = styled.span`
	font-family: 'Avenir Next Heavy';
	font-size: inherit;
	color: #fff;
`;

export const InfoP = styled.p`
	font-family: 'Avenir Next Regular';
	font-size: 3.5rem;
	color: #fff;
`;
