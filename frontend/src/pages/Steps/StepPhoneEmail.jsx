import React, { useState } from "react";
import Button from "../../components/shared/Button/Button";
import { MdPhoneIphone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import Phone from "./PhoneEmail/Phone";
import Email from "./PhoneEmail/Email";

const StepPhoneEmail = ({ onNext }) => {
	const [type, setType] = useState("phone");

	return (
		<div className="relative">
			<div className="absolute left-72 -top-12 focus:border-blue-500 flex gap-1 justify-center ml-96 items-center ">
				<button
					className={`text-3xl focus:bg-blue-600 rounded-md hover:bg-blue-700 active:bg-blue-600 py-2 px-2  ${
						type === "phone" ? "bg-blue-600" : ""
					}`}
					onClick={() => setType("phone")}
				>
					{<MdPhoneIphone />}
				</button>
				<button
					className="text-3xl focus:bg-blue-600 rounded-md hover:bg-blue-700 active:bg-blue-600 py-2 px-2"
					onClick={() => setType("email")}
				>
					{<AiOutlineMail />}
				</button>
			</div>
			{type === "phone" ? <Phone onNext={onNext} /> : <Email onNext={onNext} />}
		</div>
	);
};

export default StepPhoneEmail;
