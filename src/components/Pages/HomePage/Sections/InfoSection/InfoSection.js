import React from 'react';
import styled from 'styled-components';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import LogoSection from './LogoSection/LogoSection';
import CallToAction from './CallToAction/CallToAction';

const InfoContainer = styled.section`
	height: 100%;
`;

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
