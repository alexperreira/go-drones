import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ReactPlayer from 'react-player';
import Modal from './Modal';
import Twinfalls from '../../assets/images/twinfalls-thumbnail.png';
import EDC from '../../assets/images/edc-thumbnail.png';

const Section = styled.section`
	width: 100%;
	height: 60rem;
	background: #000;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 80%;
	height: 80%;

	@media (max-width: 1200px) {
		flex-direction: column;
	}
`;

const ThumbnailContainer = styled.div`
	width: 450px;
	height: 275px;
	overflow: hidden;
	position: relative;
`;

const ThumbnailStyles = css`
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	width: 100%;
	height: 100%;
	box-shadow: 0 0.2rem 1.5rem #808080;
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

const ThumbnailOne = styled.div`
	background: url(${Twinfalls});
	${ThumbnailStyles};
`;

const ThumbnailTwo = styled.div`
	background: url(${EDC});
	${ThumbnailStyles};
`;

const Shows = () => {
	const [isOpenOne, setIsOpenOne] = useState(false);
	const [isOpenTwo, setIsOpenTwo] = useState(false);

	return (
		<>
			<Section>
				<Container>
					<ThumbnailContainer>
						<ThumbnailOne
							onClick={() => {
								setIsOpenOne(true);
							}}
						>
							<h4>Twin Falls</h4>
						</ThumbnailOne>
					</ThumbnailContainer>
					<ThumbnailContainer>
						<ThumbnailTwo
							onClick={() => {
								setIsOpenTwo(true);
							}}
						>
							<h4>EDC</h4>
						</ThumbnailTwo>
					</ThumbnailContainer>
					<Modal open={isOpenOne} onClose={() => setIsOpenOne(false)}>
						<ReactPlayer
							width='100%'
							height='100%'
							url='https://www.youtube.com/watch?v=lAfRNeHMZNU'
						/>
					</Modal>
					<Modal open={isOpenTwo} onClose={() => setIsOpenTwo(false)}>
						<ReactPlayer url='https://www.youtube.com/watch?v=g4jVz6m0oVw' />
					</Modal>
				</Container>
			</Section>
		</>
	);
};

export default Shows;
