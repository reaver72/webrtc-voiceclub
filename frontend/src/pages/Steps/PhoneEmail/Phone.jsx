import React, { useState } from "react";
import Card from "../../../components/shared/Card/Card";
import { FcPhoneAndroid } from "react-icons/fc";
import Button from "../../../components/shared/Button/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import * as axios from "axios";
import { useDispatch } from "react-redux";
import { setOtp } from "../../../store/authSlice";

const Phone = ({ onNext }) => {
	const [phone, setPhone] = useState("9864461540");
	const dispatch = useDispatch();

	const sendOtp = async () => {
		const {data} = await axios.post(
			"http://localhost:5000/api/otp/send-otp-sms",
			{
				phone: phone,
			},
			{
				withCredentials: true,
			}
		);
		console.log(data);
		dispatch(setOtp({ phone: data.phone, hash: data.hash }))
		
	};
	return (
		<Card
			title="Enter your phone number"
			logo={<FcPhoneAndroid className="mr-3 text-3xl" />}
		>
			<form className="flex justify-center items-center mt-8 mb-8" action="">
				<img
					src="https://icons.iconarchive.com/icons/wikipedia/flags/1024/NP-Nepal-Flag-icon.png"
					alt=""
					width="50"
					height="50"
				/>
				<input
					className="bg-gray-700 border-none rounded-lg"
					type="text"
					name=""
					id=""
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					placeholder="+977 9841234567"
					required={true}
				/>
			</form>
			<div className="flex justify-center mt-5 mb-5">
				{
					<Button
						text={"Next"}
						onClick={() => {
						
							sendOtp();
								onNext();
						}}
					>
						<AiOutlineArrowRight className="ml-2" />
					</Button>
				}
			</div>
			<p className="text-center text-gray-400 text-sm font-medium mb-10">
				By entering your number, you're agreeing to our Terms of Service and
				Privacy Policy. Thanks!
			</p>
		</Card>
	);
};

export default Phone;
