import styled from 'styled-components';

import goLogo from '../../assets/images/gologo-grey.png';

export const Section = styled.div`
	background: #000;
	height: 400px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`;

export const Logo = styled.img.attrs({
	src: `${goLogo}`,
})`
	height: 80px;
	width: auto;
`;

export const IconGroup = styled.div`
	display: flex;
	width: 400px;
	justify-content: space-around;

	a {
		color: #404040;
		font-size: 1.5rem;
		width: 50px;
	}

	svg {
		height: 50px;
		width: auto;
	}
`;

export const Copyright = styled.p`
	font-family: 'Avenir Next Thin';
	font-size: 1rem;
	color: #5f5f5f;
`;
