import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FcLock } from "react-icons/fc";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

const StepOtp = ({ onNext }) => {
	const [otp, setOtp] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const phone = useSelector((state) => state.auth.otp.phone);
	console.log(phone);
	const hashedOtp = useSelector((state) => state.auth.otp.hash);
	const verifyOtp = async () => {
		const res = await axios.post(
			"http://localhost:5000/api/otp/verify-otp",
			{
				otp: otp,
				phone: phone,
				hashedOtp,
			},
			{
				withCredentials: true,
			}
		);
		if (res.status == 200) {
			const res = await axios.post("http://localhost:5000/user/create-user", {
				phone,
			});
			console.log(res.data);
			dispatch(setAuth(res.data));

			navigate("/activate");
		}
	};

	return (
		<Card
			title={"Enter the six digit otp code"}
			logo={<FcLock className="text-2xl mr-3" />}
		>
			<form action="">
				<input
					className="bg-gray-700 border-none rounded-lg"
					type="text"
					name=""
					id=""
					value={otp}
					onChange={(e) => setOtp(e.target.value)}
					placeholder=""
				/>
			</form>
			<div className="flex justify-center mt-5 mb-5">
				{otp.length === 6 && (
					<Button onClick={verifyOtp} text="Next">
						<AiOutlineArrowRight className="ml-2" />
					</Button>
				)}
			</div>
			<p className="text-center text-gray-400 text-sm font-medium mb-10">
				By entering your number, you're agreeing to our Terms of Service and
				Privacy Policy. Thanks!
			</p>
		</Card>
	);
};

export default StepOtp;
