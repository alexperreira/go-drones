import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Modal from './Modal';
import {
	Hero,
	Headline,
	Container,
	Heading,
	ThumbnailContainer,
	ThumbnailOne,
	ThumbnailTwo,
	ColumnRight,
	Layout,
	PlayBtn,
	SectionOne,
	SectionTwo,
} from './ShowsElements';
import EDCOne from '../../assets/images/edc-vegas.jpg';
import EDCTwo from '../../assets/images/gol-drones-hero.png';

import TwinOne from '../../assets/images/process-section1-bg.png';
import TwinTwo from '../../assets/images/twinfalls-thumbnail.png';

const Shows = () => {
	const [isOpenOne, setIsOpenOne] = useState(false);
	const [isOpenTwo, setIsOpenTwo] = useState(false);

	return (
		<>
			<SectionOne>
				<Hero>
					<Headline>
						<h1>Go Drones</h1>
						<h2>On the move</h2>
					</Headline>
				</Hero>
			</SectionOne>
			<SectionTwo>
				<Container>
					<Heading>
						<h4>EDC</h4>
						<h5>Las Vegas, NV - November 2021</h5>
					</Heading>
					<Layout>
						<ThumbnailContainer>
							<ThumbnailOne
								onClick={() => {
									setIsOpenOne(true);
								}}
							>
								<PlayBtn />
							</ThumbnailOne>
						</ThumbnailContainer>
						<ColumnRight>
							<img src={EDCOne} alt='' />
							<img src={EDCTwo} alt='' />
						</ColumnRight>
					</Layout>
				</Container>
				<Container>
					<Heading>
						<h4>Lights & Lasers</h4>
						<h5>Las Vegas, NV - October 2021</h5>
					</Heading>
					<Layout>
						<ThumbnailContainer>
							<ThumbnailTwo
								onClick={() => {
									setIsOpenTwo(true);
								}}
							>
								<PlayBtn />
							</ThumbnailTwo>
						</ThumbnailContainer>
						<ColumnRight>
							<img src={TwinOne} alt='' />
							<img src={TwinTwo} alt='' />
						</ColumnRight>
					</Layout>
				</Container>
				<Modal open={isOpenOne} onClose={() => setIsOpenOne(false)}>
					<ReactPlayer
						style={{ overflow: 'hidden' }}
						width='100%'
						height='100%'
						url='https://www.youtube.com/watch?v=lAfRNeHMZNU'
					/>
				</Modal>
				<Modal open={isOpenTwo} onClose={() => setIsOpenTwo(false)}>
					<ReactPlayer url='https://www.youtube.com/watch?v=g4jVz6m0oVw' />
				</Modal>
			</SectionTwo>
		</>
	);
};

export default Shows;
