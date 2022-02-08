import styled from 'styled-components';
import { devices } from '../../../../../../device';

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	/* height: 100%; */
	background: #000;
	z-index: 1;
`;

export const Div = styled.div`
	position: relative;
	align-self: center;
	width: 90%;
	max-width: 1000px;
	display: block;
	margin: 4rem;
	color: #fff;
	text-align: center;

	h3 {
		font-family: 'Avenir Next Heavy';
		font-size: 2.5rem;
		text-transform: uppercase;
		margin-bottom: 2rem;
	}

	p {
		font-size: 1.8rem;
		margin: 0;
	}

	span {
		font-family: 'Avenir Next Heavy';
		font-size: inherit;
	}

	@media ${devices.mobileL} {
		width: 90%;

		p {
			font-size: 1.4rem;
		}
	}
`;
