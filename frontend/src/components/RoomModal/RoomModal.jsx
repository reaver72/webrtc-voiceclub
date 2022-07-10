import React from "react";
import { FcGlobe } from "react-icons/fc";
import { GrFormClose } from "react-icons/gr";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RoomModal = ({ closeModal }) => {
	const [topic, setTopic] = React.useState("");
	const [roomType, setRoomType] = React.useState("open");
	const selectRoom = (value) => {
		setRoomType(value);
	};
	const navigate = useNavigate();
	const createRoom = async () => {
		const {data} = await axios.post("http://localhost:5000/api/v1/rooms", {
			topic,
			roomType,
		});
		
		closeModal();
		navigate(`/rooms/${data.id}`);
	};
	return (
		<div className="flex bg-gray-800 bg-opacity-80 justify-center align-center p-40 fixed left-0 top-0 right-0 bottom-0">
			<div className="modal-card bg-gray-700 p-6 rounded-xl">
				<div className="float-right text-white text-xl">
					<GrFormClose
						onClick={closeModal}
						className="bg-white rounded-full cursor-pointer hover:bg-red-500 active:bg-red-600 -mt-2"
					/>
				</div>
				<h2 className="font-semibold">Enter the topic to be discussed</h2>
				<input
					type="text"
					className="bg-gray-700 rounded-lg w-full mt-3 mb-3 h-7 "
					value={topic}
					onChange={(e) => setTopic(e.target.value)}
				/>
				<h3 className="font-semibold mb-3">Room type</h3>
				<div className="flex justify-between mb-4 gap-4">
					<div
						className={`px-6 py-2 hover:bg-gray-600 hover:rounded-lg hover:transition ease 900 rounded-lg ${
							roomType === "open" ? "bg-gray-600" : ""
						}`}
						onClick={() => selectRoom("open")}
					>
						<FcGlobe className="text-4xl mb-1" />
						Open
					</div>
					<div
						onClick={() => selectRoom("social")}
						className={`px-6 py-2 hover:bg-gray-600 hover:rounded-lg hover:transition ease 900 rounded-lg  ${
							roomType === "social" ? "bg-gray-600" : ""
						}`}
					>
						<FcGlobe className="text-4xl mb-1" />
						Social
					</div>
					<div
						onClick={() => selectRoom("private")}
						className={`px-6 py-2 hover:bg-gray-600 hover:rounded-lg hover:transition ease 900 rounded-lg  ${
							roomType === "private" ? "bg-gray-600" : ""
						}`}
					>
						<FcGlobe className="text-4xl mb-1" />
						Private
					</div>
				</div>
				<p className="font-semibold">Start a room, open to everyone</p>
				<div className="flex justify-center mt-4">
					<button
						onClick={createRoom}
						className="rounded-2xl bg-green-500 px-4 py-1 font-semibold"
					>
						Let's Go
					</button>
				</div>
			</div>
		</div>
	);
};

export default RoomModal;
