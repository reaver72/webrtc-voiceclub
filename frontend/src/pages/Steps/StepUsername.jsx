import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../../components/shared/Button/Button";

const StepUsername = ({onNext}) => {
  return (
		<div>
			StepUsername
			<Button onClick={onNext} text="Next">
				<AiOutlineArrowRight className="ml-2" />
			</Button>
		</div>
	);
}

export default StepUsername