import styled, { css } from 'styled-components';
import Twinfalls from '../../assets/images/section2-bg.png';
import EDC from '../../assets/images/edc-thumbnail.png';
import showsBg from '../../assets/images/shows-bg.jpg';
import { AiFillPlayCircle } from 'react-icons/ai';

const SectionStyles = css`
	width: 100%;
	background: #000;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const SectionOne = styled.section`
	${SectionStyles}
	height: 60rem;
`;

export const SectionTwo = styled.section`
	${SectionStyles}
	height: 100%;
`;

export const Container = styled.div`
	// display: flex;
	// flex-direction: column;
	// justify-content: space-evenly;
	align-items: center;
	width: 80%;
	height: 80%;
	margin: 2rem;

	@media (max-width: 1200px) {
		flex-direction: column;
	}
`;

export const Font = css`
	color: #fff;
	font-size: clamp(4rem, 8vw, 10rem);
	font-family: 'Avenir Next Heavy';
	text-transform: uppercase;
	line-height: clamp(4.5rem, 8vw, 8.5rem);
	margin: 0;
`;

export const Hero = styled.div`
	background: url(${showsBg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-width: 100%;
	height: 100%;
	margin: 0;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 60rem;
		background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0) 0%,
				rgba(0, 0, 0, 0.6) 100%
			),
			linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
		z-index: 3;
	}
`;

export const Headline = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	// min-width: 100%;
	height: 100%;
	margin: 0;
	max-width: 1500px;
	width: 80%;
	position: relative;
	z-index: 2;

	h1 {
		${Font}
		text-align: left;
	}
	h2 {
		${Font}
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 2px #fff;
		text-align: right;
	}
`;

export const PlayBtn = styled(AiFillPlayCircle)`
	width: 80px;
`;

export const Layout = styled.div`
	display: grid;
	grid-template-columns: 1.5fr 1fr;
	grid-template-rows: 600px;
`;

export const ColumnLeft = styled.div`
	// background: pink;
	display: block;
`;

export const ThumbnailContainer = styled.div`
	display: block;
	width: 100%;
	max-height: 575px;
	overflow: hidden;
	position: relative;
	border: 1px solid #fff;
	cursor: pointer;
`;

const Images = css`
	max-width: 100%;
	max-height: calc((600px / 2) - 25.6px);
	border: 1px solid #fff;
`;

export const ColumnRight = styled.div`
	margin-left: 1rem;
	// background: pink;
	display: flex;
	flex-direction: column;
	height: 100%;
	max-height: 575px;
	justify-content: space-between;

	img:nth-child(1) {
		${Images}
		margin-bottom: 0.8rem;
	}

	img:nth-child(2) {
		${Images}
		margin-top: 0.8rem;
	}
`;

export const Heading = styled.div`
	color: #fff;
	font-size: 2rem;

	h4 {
		font-family: 'Avenir Next Heavy';
	}

	h5 {
	}
`;

export const ThumbnailStyles = css`
	position: relative;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	width: 100%;
	height: 100%;
	// box-shadow: 0.2rem 0.2rem 1.5rem #808080;
	font-family: 'Avenir Next Heavy';
	font-size: 1.5rem;
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto auto;
	transition: all 1s;

	&:hover {
		transform: scale(1.2);
	}
`;

export const ThumbnailOne = styled.div`
	background: url(${EDC});
	${ThumbnailStyles};
`;

export const ThumbnailTwo = styled.div`
	background: url(${Twinfalls});
	${ThumbnailStyles};
`;
