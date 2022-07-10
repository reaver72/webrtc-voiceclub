import React from "react";
import { Link } from "react-router-dom";
import { RiChatVoiceFill, RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
const Navigation = () => {
	const home = "/";
	const isAuth = useSelector((state) => state.auth.isAuth);
	const isActivated = useSelector((state) => state.auth.user.isActivated);

	return (
		<nav className="py-5">
			<Link to={isAuth && isActivated ? "/rooms" : "/"}>
				<div className="flex items-center ">
					<RiChatVoiceFill className="inline mr-3 text-2xl text-yellow-400" />
					<span className="font-semibold text-2xl text-blue-400">
						Voice Club
					</span>
				</div>
			</Link>
			<div className="flex justify-end">
				<h3>{"user name"}</h3>{" "}
				<img
					src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
					width={40}
					height={40}
					alt="profile img"
				/>
				{isActivated && <Link to="/">
					<RiLogoutBoxLine className="text-blue-500 text-3xl "/>
						
				</Link>}
			</div>
		</nav>
	);
};

export default Navigation;
