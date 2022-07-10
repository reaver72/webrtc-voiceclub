import React, { useState } from "react";
import Card from "../../../components/shared/Card/Card";
import { MdOutlineEmail } from "react-icons/md";
import Button from "../../../components/shared/Button/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
const Email = ({onNext}) => {
  const [email,setEmail] = useState("")
	return (
		<Card
			title="Enter your email address"
			logo={<MdOutlineEmail className="mr-3 text-3xl" />}
		>
			<form className="flex justify-center items-center mt-8 mb-8" action="">
			
				<input
					className="bg-gray-700 border-none rounded-lg"
					type="text"
					name=""
          id=""
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="example@gmail.com"
          required={true}
				/>
			</form>
			<div className="flex justify-center mt-5 mb-5">
				{(email.length>6 && email.includes("@") && email.includes(".")) && <Button text={"Next"} onClick={onNext}>
					<AiOutlineArrowRight className="ml-2" />
				</Button>}
			</div>
			<p className="text-center text-gray-400 text-sm font-medium mb-10">
				By entering your email id, you're agreeing to our Terms of Service and
				Privacy Policy. Thanks!
			</p>
		</Card>
	);
};

export default Email;
