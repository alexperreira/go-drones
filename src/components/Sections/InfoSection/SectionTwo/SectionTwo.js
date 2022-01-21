import React from 'react';
import {
	Section,
	BgOverlay,
	TextGroup,
	White,
	InfoH2,
	InfoP2,
	Span,
} from './SectionTwoElements';

const SectionTwo = () => {
	return (
		<Section>
			<BgOverlay>
				<TextGroup>
					<White>Bring your vision</White>
					<InfoH2>To life</InfoH2>
				</TextGroup>

				<TextGroup>
					<InfoP2>
						Whether you're an advertising agency, event marketer, production
						company, or tourism association, we collaborate with you to{' '}
						<Span> make your dream a reality</Span>.
					</InfoP2>
					<InfoP2>
						From EDC to Burning Man to private events, our drone light shows
						have attracted <Span> thousands of viewers</Span> and received{' '}
						<Span>millions of social media impressions</Span>.
					</InfoP2>
				</TextGroup>
			</BgOverlay>
		</Section>
	);
};

export default SectionTwo;
