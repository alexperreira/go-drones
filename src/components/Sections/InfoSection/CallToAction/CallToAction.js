import React from 'react';
import {
	Section,
	BgOverlay,
	TextGroup,
	WhiteH1,
	InfoH1,
	Button,
} from './CallToActionElements';

const CallToAction = () => {
	return (
		<Section>
			<BgOverlay>
				<TextGroup>
					<WhiteH1>Ready to</WhiteH1>
					<InfoH1>Elevate your brand?</InfoH1>
					<Button>Contact us</Button>
				</TextGroup>
			</BgOverlay>
		</Section>
	);
};

export default CallToAction;
