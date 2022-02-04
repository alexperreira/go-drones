import styled from 'styled-components';
import { motion } from 'framer-motion';

import EDC from '../../../../../assets/images/EDC.png';
// import LV from '../../../../../assets/images/LV.png';
// import Ralph from '../../../../../assets/images/RALPH.png';
// import Basel from '../../../../../assets/images/ART BASEL.png';
import ICCU from '../../../../../assets/images/ICCU.png';

import bg from '../../../../../assets/images/section4-bg.png';
import { devices } from '../../../../../../device';

export const Section = styled.div`
	min-width: 100%;
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
	align-items: center;
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

	h1 {
		color: #fff;
		font-family: 'Avenir Next Heavy';
		font-size: 5rem;
		text-transform: uppercase;
		margin: 0;
		word-wrap: nowrap;
		text-align: left;
	}

	h2 {
		font-family: 'Avenir Next Heavy';
		font-size: 5rem;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 2px #fff;
		text-transform: uppercase;
		margin: 0;
		text-align: right;
	}

	@media ${devices.laptopL} {
		width: 900px;

		h1 {
			font-size: 4.2rem;
		}

		h2 {
			font-size: 4.2rem;
		}
	}

	@media ${devices.laptop} {
		width: 700px;

		h1 {
			font-size: 3.8rem;
		}

		h2 {
			font-size: 3.8rem;
		}
	}

	@media ${devices.tablet} {
		max-width: 580px;

		h1 {
			font-size: 3.2rem;
		}

		h2 {
			font-size: 3.2rem;
		}
	}

	@media ${devices.tabletS} {
		width: 400px;

		h1 {
			font-size: 2.2rem;
		}

		h2 {
			font-size: 2.2rem;
		}
	}

	@media ${devices.mobileL} {
		width: 370px;

		h1 {
			font-size: 1.8rem;
		}

		h2 {
			font-size: 1.8rem;
		}
	}
`;

export const LogoGroup = styled(motion.div)`
	display: flex;

	@media ${devices.mobileL} {
		flex-direction: column;
		align-items: center;
	}
`;

export const Logo1 = styled.img.attrs({
	src: `${EDC}`,
})`
	width: auto;
	height: 200px;
	margin: 2rem;

	@media ${devices.laptop} {
		height: 150px;
	}

	@media ${devices.tablet} {
		height: 120px;
	}

	@media ${devices.tabletS} {
		height: 90px;
	}

	@media ${devices.mobileL} {
		height: 120px;
	}
`;

export const Logo5 = styled.img.attrs({
	src: `${ICCU}`,
})`
	width: auto;
	height: 200px;
	margin: 2rem;

	@media ${devices.laptop} {
		height: 150px;
	}

	@media ${devices.tablet} {
		height: 120px;
	}

	@media ${devices.tabletS} {
		height: 90px;
	}

	@media ${devices.mobileL} {
		height: 120px;
	}
`;

// export const Logo2 = styled.img.attrs({
// 	src: `${Ralph}`,
// })`
// 	width: auto;
// 	height: 200px;
// 	margin: 2rem;

// 	@media ${devices.laptop} {
// 		height: 70px;
// 		width: auto;
// 	}
// `;

// export const Logo3 = styled.img.attrs({
// 	src: `${LV}`,
// })`
// 	width: auto;
// 	height: 200px;
// 	margin: 2rem;

// 	@media ${devices.laptop} {
// 		height: 70px;
// 		width: auto;
// 	}
// `;

// export const Logo4 = styled.img.attrs({
// 	src: `${Basel}`,
// })`
// 	width: auto;
// 	height: 200px;
// 	margin: 2rem;

// 	@media ${devices.laptop} {
// 		height: 70px;
// 		width: auto;
// 	}
// `;
