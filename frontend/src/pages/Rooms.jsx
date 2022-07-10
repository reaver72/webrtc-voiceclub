import React from 'react'
import RoomModal from '../components/RoomModal/RoomModal';
import RoomCard from '../components/shared/RoomCard/RoomCard';

const Rooms = () => {
	const [showModal, setShowModal] = React.useState(false);
	const triggerModal = () => {
		setShowModal(true);
	}
	const closeModal = () => {
		setShowModal(false);
	}
  return (
		<div className="container">
			<div className=" flex justify-between">
				<div className="flex">
					<p className="font-semibold ">All voice rooms</p>

					<div class="flex rounded rounded-2xl ml-5 bg-gray-800 h-8 text-white">
						<button className="flex items-center justify-center px-4">
							<svg
								className="w-4 h-4 text-gray-600"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
							</svg>
						</button>
						<input
							type="text"
							className="bg-gray-900 rounded-r-2xl border-none"
							placeholder="Search..."
						/>
					</div>
				</div>

				<div>
					<button onClick={triggerModal} className="rounded-2xl bg-green-500 px-4 py-1 font-semibold">
						Start a room
					</button>
				</div>
			</div>
			<div className="h-1 w-20 bg-blue-500 rounded-md"></div>

			<div className="room-cards grid grid-cols-4 gap-3 mt-10">
				<RoomCard />
			</div>
		  {showModal && <RoomModal closeModal={ closeModal} />}
		</div>
	);
}

export default Rooms