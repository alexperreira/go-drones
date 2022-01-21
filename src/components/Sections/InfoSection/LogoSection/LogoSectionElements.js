import styled from 'styled-components';

import EDC from '../../../../assets/images/EDC.png';
import LV from '../../../../assets/images/LV.png';
import Ralph from '../../../../assets/images/RALPH.png';
import Basel from '../../../../assets/images/ART BASEL.png';
import ICCU from '../../../../assets/images/ICCU.png';

import bg from '../../../../assets/images/section5-bg.png';

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
`;

export const WhiteH1 = styled.h2`
	color: #fff;
	font-family: 'Avenir Next Heavy';
	font-size: 5rem;
	text-transform: uppercase;
	margin: 0;
	word-wrap: nowrap;
	text-align: left;
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
	text-align: right;
`;

export const LogoGroup = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const Logo1 = styled.img.attrs({
	src: `${EDC}`,
})`
	width: auto;
	height: 120px;
`;

export const Logo2 = styled.img.attrs({
	src: `${Ralph}`,
})`
	width: auto;
	height: 120px;
`;

export const Logo3 = styled.img.attrs({
	src: `${LV}`,
})`
	width: auto;
	height: 120px;
`;

export const Logo4 = styled.img.attrs({
	src: `${Basel}`,
})`
	width: auto;
	height: 120px;
`;

export const Logo5 = styled.img.attrs({
	src: `${ICCU}`,
})`
	width: auto;
	height: 120px;
`;
