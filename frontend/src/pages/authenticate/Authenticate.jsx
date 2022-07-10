import React, { useState } from "react";
import StepPhoneEmail from "../Steps/StepPhoneEmail";
import StepOtp from "../Steps/StepOtp";

const steps = {
	1: StepPhoneEmail,
	2: StepOtp,
};

const Authenticate = () => {
	const [step, setStep] = useState(1);
	const Step = steps[step];

	const onNext = () => {
		setStep((step) => step + 1);
	};
	return (
		<div>
			<Step onNext={onNext} />
		</div>
	);
};

export default Authenticate;
