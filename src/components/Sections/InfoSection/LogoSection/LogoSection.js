import React from 'react';
import {
	Section,
	BgOverlay,
	TextGroup,
	WhiteH1,
	InfoH1,
	LogoGroup,
	Logo1,
	Logo2,
	Logo3,
	Logo4,
	Logo5,
} from './LogoSectionElements';

const LogoSection = () => {
	return (
		<Section>
			<BgOverlay>
				<TextGroup>
					<WhiteH1>Where Go Drones</WhiteH1>
					<InfoH1>Have Been Spotted</InfoH1>
				</TextGroup>
				<LogoGroup>
					<Logo1 />
					<Logo2 />
					<Logo3 />
					<Logo4 />
					<Logo5 />
				</LogoGroup>
			</BgOverlay>
		</Section>
	);
};

export default LogoSection;
