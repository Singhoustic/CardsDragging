import React from "react";
import Nav from "./components/Nav";
import Foreground from "./components/Foreground";
import Background from "./components/Background";
const App = () => {
	return (
		<>
			<div className="main h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center relative">
				<Nav />
				<Background />
				<Foreground />
			</div>
		</>
	);
};

export default App;
