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
					<White>Experience the night sky</White>
					<InfoH2>Like never before</InfoH2>
				</TextGroup>

				<TextGroup>
					<InfoP>
						Our <Span>cutting-edge technology </Span>
						allows us to
						<Span> make dreams a reality</Span> &mdash; from text to logos to
						3-D shapes.
					</InfoP>
				</TextGroup>
			</BgOverlay>
		</Section>
	);
};

export default SectionOne;
