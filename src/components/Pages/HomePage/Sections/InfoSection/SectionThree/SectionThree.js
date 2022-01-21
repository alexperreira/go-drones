import React from 'react';
import {
	Section,
	BgOverlay,
	TextGroup,
	InfoP,
	Span,
} from './SectionThreeElements';

const SectionThree = () => {
	return (
		<Section>
			<BgOverlay>
				<TextGroup>
					<InfoP>
						When you work with <Span> Go Drones</Span>, our expert pilots,
						animators, and production crew will help you create and run your own{' '}
						<Span> one-of-a-kind experience</Span>.
					</InfoP>
				</TextGroup>
			</BgOverlay>
		</Section>
	);
};

export default SectionThree;
