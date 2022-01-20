import React from 'react';
// import { Transition } from 'react-transition-group';
import {
	InfoContainer,
	Section,
	TextGroup,
	White,
	WhiteH1,
	InfoH1,
	InfoH2,
	InfoP,
	InfoP2,
	Span,
} from './InfoElements';

const alignRight = { textAlign: 'right' };
const alignLeft = { textAlign: 'left' };

const InfoSection = () => {
	return (
		<>
			<InfoContainer>
				<Section>
					<TextGroup>
						<White style={{ ...alignRight }}>Experience the night sky</White>
						<InfoH2 style={{ ...alignRight }}>Like never before</InfoH2>
					</TextGroup>

					<TextGroup>
						<InfoP>
							Our <Span>cutting-edge technology </Span>
							allows us to
							<Span> make dreams a reality</Span> &mdash; from text to logos to
							3-D shapes.
						</InfoP>
					</TextGroup>
				</Section>
				<Section>
					<TextGroup>
						<White style={{ ...alignLeft }}>Bring your vision</White>
						<InfoH2 style={{ ...alignRight }}>To life</InfoH2>
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
				</Section>
				<Section>
					<TextGroup>
						<InfoP>
							When you work with <Span> Go Drones</Span>, our expert pilots,
							animators, and production crew will help you create and run your
							own <Span> one-of-a-kind experience</Span>.
						</InfoP>
					</TextGroup>
				</Section>
				<Section>
					<TextGroup>
						<WhiteH1 style={{ ...alignLeft }}>Where Go Drones</WhiteH1>
						<InfoH1 style={{ ...alignRight }}>Have Been Spotted</InfoH1>
					</TextGroup>
				</Section>
			</InfoContainer>
		</>
	);
};

export default InfoSection;
