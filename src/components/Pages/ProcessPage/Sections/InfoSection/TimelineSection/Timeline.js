import React from 'react';
import {
	Section,
	TextGroup,
	White,
	InfoH2,
	Div,
	TextBlurb,
	H3,
	BlurbP,
	Span,
} from './TimelineElements';

const left = { float: 'left', textAlign: 'left' };
const right = { float: 'right', textAlign: 'right' };
const center = { margin: '0 auto', textAlign: 'center' };
const bottom = { margin: '2rem 0', paddingTop: '4rem' };

const SectionOne = () => {
	return (
		<Section>
			<TextGroup>
				<White>Our process to bring</White>
				<InfoH2>your vision to life</InfoH2>
			</TextGroup>

			<Div>
				<TextBlurb style={left}>
					<H3>Initiate</H3>
					<BlurbP>
						Our <Span> world-class team</Span> collaborates with you to ensure{' '}
						<Span>we completely understand </Span> your vision
					</BlurbP>
				</TextBlurb>
			</Div>
			<Div>
				<TextBlurb style={right}>
					<H3>Animate</H3>
					<BlurbP>
						We <Span> handle every step of the process</Span>, from concept
						storyboarding to final rendering, guaranteeing an unforgettable,
						awe-inspiring show that <Span> brings your vision to life</Span>
					</BlurbP>
				</TextBlurb>
			</Div>
			<Div>
				<TextBlurb style={left}>
					<H3>Prepare</H3>
					<BlurbP>
						Our drone experts handle all insurance and permitting, and perform
						extensive on-site testing to ensure{' '}
						<Span>your show will be flawlessly executed</Span>
					</BlurbP>
				</TextBlurb>
			</Div>
			<Div>
				<TextBlurb style={right}>
					<H3>Perform</H3>
					<BlurbP>
						Our professional pilots and production crew and pilots handle every
						aspect of your show&mdash;from setup to tear down&mdash;allowing you
						to <Span>sit back and relax</Span> as we{' '}
						<Span>raise your brand to new heights</Span>
					</BlurbP>
				</TextBlurb>
			</Div>

			<Div>
				<TextGroup>
					<Div style={bottom}>
						<White>Go Drones</White>
						<InfoH2>technical specs</InfoH2>
					</Div>
					<TextBlurb style={center}>
						<BlurbP>
							Up to <Span>12 minutes</Span> of lighted fligh time
						</BlurbP>
						<BlurbP>
							<Span>400-foot </Span> flight ceiling
						</BlurbP>
						<BlurbP>
							<Span>26 mph</Span> wind threshold
						</BlurbP>
						<BlurbP>
							<Span>FAA Approved</Span>
						</BlurbP>
						<BlurbP>
							<Span>Pinpoint accuracy</Span> using GPS coordinates
						</BlurbP>
					</TextBlurb>
				</TextGroup>
			</Div>
		</Section>
	);
};

export default SectionOne;
