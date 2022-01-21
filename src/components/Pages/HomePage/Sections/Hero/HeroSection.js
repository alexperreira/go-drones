import React from 'react';

import {
	HeroContainer,
	Logo,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	H2Wrapper,
	HeroH2,
	Go,
	Slash,
} from './HeroElements';

import Video from '../../../../assets/videos/drone-reel.mp4';

const HeroSection = () => {
	return (
		<HeroContainer id='home'>
			<Logo />
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>
			<HeroContent>
				<Go>Go</Go>
				<HeroH1>Drones</HeroH1>
				<H2Wrapper>
					<HeroH2>Elevate</HeroH2>
					<Slash>/</Slash>
					<HeroH2>Your</HeroH2>
					<Slash>/</Slash>
					<HeroH2>Brand</HeroH2>
				</H2Wrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
