import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navigation from "./components/shared/Navigation/Navigation";
import Home from "./pages/Home";
import Authenticate from "./pages/authenticate/Authenticate";
import GuestRoute from "./routes/GuestRoute";
import SemiProtectedRoute from "./routes/SemiProtectedRoute";
import Activate from "./pages/Activate";
import ProtectedRoute from "./routes/ProtectedRoute";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";

function App() {
	return (
		<div className="text-white container w-4/5 m-auto">
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/authenticate" element={
						<GuestRoute>
							<Authenticate/>
						</GuestRoute>
					} />
					<Route path="/activate" element={
						<SemiProtectedRoute>
							<Activate/>
						</SemiProtectedRoute>
					} />
					<Route path="/rooms" element={
						<ProtectedRoute>
							<Rooms/>
						</ProtectedRoute>
					} />
					<Route path="/rooms/:id" element={
						<ProtectedRoute>
							<SingleRoom/>
						</ProtectedRoute>
					} />
					
				</Routes>
			</BrowserRouter>
		</div>
	);
}


export default App;
