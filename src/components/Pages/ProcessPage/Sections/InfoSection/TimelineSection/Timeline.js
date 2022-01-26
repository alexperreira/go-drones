import React from 'react';

import Initiate from './Initiate';
import Animate from './Animate';
import Prepare from './Prepare';
import Perform from './Perform';
import TechnicalSpecs from './TechnicalSpecs';

const SectionOne = () => {
	return (
		<>
			<TechnicalSpecs />
			<Initiate />
			<Animate />
			<Prepare />
			<Perform />
		</>
	);
};

export default SectionOne;
