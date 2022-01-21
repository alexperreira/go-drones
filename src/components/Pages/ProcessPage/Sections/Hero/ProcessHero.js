import React from 'react';

import {
	HeroContainer,
	Logo,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	Go,
} from './ProcessHeroElements';

import Video from '../../../../assets/videos/drone-process-reel.mp4';

const ProcessHero = () => {
	return (
		<HeroContainer id='home'>
			<Logo />
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>
			<HeroContent>
				<Go>How</Go>
				<HeroH1>We do it</HeroH1>
			</HeroContent>
		</HeroContainer>
	);
};

export default ProcessHero;
