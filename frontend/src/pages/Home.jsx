import React from "react";
import { RiChatVoiceFill } from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Card from "../components/shared/Card/Card";
import Button from "../components/shared/Button/Button";


const Home = () => {
	const navigate = useNavigate();
	const startRegister = () => {
		navigate("/authenticate");
	};
	return (
			<Card
				title={"Welcome to Voice Club"}
				logo={<RiChatVoiceFill className="mr-3 text-2xl text-yellow-400" />}
			>
				<p>
					We're working to get Voice Club ready for everyone! While we wrap up
					the finishing touches, we're adding people gradually to make sure
					nothing breaks!
				</p>
				<div className="flex justify-center mt-5 mb-5">
					<Button onClick={startRegister} text="Let's Go!">
						<AiOutlineArrowRight className="ml-2" />
					</Button>
				</div>

				<div className="flex items-center justify-center mb-4">
					<p className="text-blue-500">Have an invite link?</p>
					
				</div>
			</Card>
	);
};

export default Home;
