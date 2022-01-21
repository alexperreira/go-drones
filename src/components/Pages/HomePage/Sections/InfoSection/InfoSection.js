import React from 'react';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import LogoSection from './LogoSection/LogoSection';
import CallToAction from './CallToAction/CallToAction';

import { InfoContainer } from './InfoElements';

const InfoSection = () => {
	return (
		<InfoContainer>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<LogoSection />
			<CallToAction />
		</InfoContainer>
	);
};

export default InfoSection;
