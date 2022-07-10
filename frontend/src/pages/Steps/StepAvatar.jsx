import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../../components/shared/Button/Button";
import { IoHappyOutline } from "react-icons/io5";
import Card from "../../components/shared/Card/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../../store/authSlice";
const StepAvatar = ({ onNext }) => {
	const [avatar, setAvatar] = useState(
		"https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
	);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const name = useSelector((state) => state.auth.name);
	const id = useSelector((state) => state.auth.user.id);

	const changeAvatar = (e) => {
		const file = e.target.files[0];
		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.onloadend = () => {
			setAvatar(fileReader.result);
		};
	};
	const activate = async () => {
		const res = await axios.patch(`http://localhost:5000/user/${id}`, {
			name,
		});
		if (res.status === 200) {
			dispatch(setAuth(res.data));
			navigate("/rooms");
		}
	};
	return (
		<Card
			title={`Okay, ${name}!`}
			logo={<IoHappyOutline className="text-2xl mr-3 text-yellow-500" />}
		>
			<p className="text-center text-gray-400 text-sm font-medium mb-4">
				How's the photo?
			</p>
			<div className="flex align-center justify-center">
				<img
					className="rounded-full w-5/12 ring-4 ring-blue-500"
					src={avatar}
					alt=""
				/>
			</div>
			<div className="flex align-center justify-center mt-5">
				<input
					className="d-none"
					type="file"
					name=""
					id="uploadAvatar"
					onChange={changeAvatar}
				/>
				<label
					htmlFor="uploadAvatar"
					className="text-sm text-blue-500 c-pointer"
				>
					choose different photo
				</label>
			</div>
			<div className="flex justify-center mt-5 mb-5">
				<Button onClick={activate} text="Next">
					<AiOutlineArrowRight className="ml-2" />
				</Button>
			</div>
		</Card>
	);
};

export default StepAvatar;
