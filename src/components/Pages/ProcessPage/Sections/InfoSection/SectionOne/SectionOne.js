import React from 'react';
import {
	Section,
	BgOverlay,
	TextGroup,
	White,
	InfoH2,
	InfoP,
	Span,
} from './SectionOneElements';

const SectionOne = () => {
	return (
		<Section>
			<BgOverlay>
				<TextGroup>
					<White>Elevate your brand</White>
					<InfoH2>to new heights</InfoH2>
				</TextGroup>

				<TextGroup>
					<InfoP>
						<Span>Push the boundaries </Span> with endless creativity and{' '}
						<Span> shine the spotlight </Span> on your brand with{' '}
						<Span> Go Drones</Span>.
					</InfoP>
				</TextGroup>
			</BgOverlay>
		</Section>
	);
};

export default SectionOne;
