import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RoomCard = () => {
	const [rooms, setRooms] = React.useState([]);
const naivagate = useNavigate();
	useEffect(() => {
		const fetchRooms = async () => {
			const { data } = await axios.get("http://localhost:5000/api/v1/rooms");
			setRooms(data);
		};
		fetchRooms();
	}, []);
	const enterRoom = () => {
		const roomId = localStorage.getItem("roomId")
		naivagate(`/rooms/${roomId}`)
	}
	return (
		<>
			{rooms.map((room) => {
				return (
					<div className="bg-gray-800 rounded-lg p-3">
						<h3>{room.topic}</h3>
						<div className="flex justify-between mt-3 mb-4">
							<img
								src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
								alt=""
								height={35}
								width={45}
							/>
							<div>
								<p>Virat Kholi</p>
								<p>Anuska Shetti</p>
							</div>
						</div>
						<div className="flex justify-end">
							<p>8</p>

							<p>:)</p>
						</div>
						<div>
							
							<button
								onClick={() => {localStorage.setItem("roomId", room.id); enterRoom()}}
								className="px-4 py-1 bg-blue-500 font-semibold hover:bg-blue-600 transition ease 500 rounded-2xl active:bg-blue-500"
							>
								Join Room
							</button>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default RoomCard;
