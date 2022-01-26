import React from 'react';
import ProcessHero from './Sections/Hero/ProcessHero';
import SectionOne from './Sections/InfoSection/SectionOne/SectionOne';
import Timeline from './Sections/InfoSection/TimelineSection/Timeline';
import OurTeam from './Sections/InfoSection/OurTeam/OurTeam';
import OurMission from './Sections/InfoSection/OurMission/OurMission';

const Process = () => {
	return (
		<>
			<ProcessHero />
			<SectionOne />
			<Timeline />
			<OurTeam />
			<OurMission />
		</>
	);
};

export default Process;
