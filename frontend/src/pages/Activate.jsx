import React, { useState } from "react";
import StepName from "../pages/Steps/StepName";
import StepAvatar from "../pages/Steps/StepAvatar";

const steps = {
	1: StepName,
	2: StepAvatar,
};

const Activate = () => {
	const [step, setStep] = useState(1);
	const Step = steps[step];

	const onNext = () => {
		setStep((step) => step + 1);
	};

	return <Step onNext={onNext} />;
};

export default Activate;
