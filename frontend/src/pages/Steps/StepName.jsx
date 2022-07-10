import React, { useState } from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../../components/shared/Button/Button";
import Card from '../../components/shared/Card/Card';
import { VscSmiley } from "react-icons/vsc"
import { setUserName } from '../../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const StepName = ({ onNext }) => {
	const [name, setName] = useState("");
	const userName = useSelector((state) => state.auth.name)
	const dispatch = useDispatch()
	const saveName = () => {
		dispatch(setUserName({name}))
		onNext()
	}
	return (
		<Card
			title={"What's your full name?"}
			logo={<VscSmiley className="text-2xl mr-3 text-yellow-500" />}
		>
			<form action="">
				<input
					className="bg-gray-700 border-none rounded-lg"
					type="text"
					name=""
					id=""
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder=""
				/>
			</form>
			<div className="flex justify-center mt-5 mb-5">
				<Button onClick={saveName} text="Next">
					<AiOutlineArrowRight className="ml-2" />
				</Button>
			</div>
			<p className="text-center text-gray-400 text-sm font-medium mb-10">
				People use real names at Voice Club!
			</p>
		</Card>
	);
};

export default StepName