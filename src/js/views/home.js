import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Personajes from "../component/personaje";
import DestinationCards from "../component/destinationCards";
import AdventureSections from "../component/adventureSection";

export const Home = () => (
	<div className="container m-1">
		<div className="text-center mt-5">
			<DestinationCards />
			<AdventureSections />
		</div>
	</div>
);
