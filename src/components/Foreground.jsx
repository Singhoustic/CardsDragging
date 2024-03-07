import React, { useRef } from "react";
import Cards from "./Cards";

const Foreground = () => {
	const constraintsRef = useRef(null);
	const data = [
		{
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Exercitationem, iusto. Lorem ipsum dolor sit amet.",
			fileISze: "4mb",
			details: true,
			downloadNow: {
				available: true,
				message: "Download Now",
				bgClr: "sky",
			},
		},
		{
			desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a corrupti minima beatae facilis? Iste enim eveniet sunt assumenda dolores voluptate odio voluptas dolorum alias reiciendis. Unde sunt perferendis eveniet. Exercitationem, iusto. Lorem ipsum dolor sit amet.",
			fileISze: "2mb",
			details: false,
			downloadNow: {
				available: false,
				message: "Upload",
				bgClr: "red",
			},
		},
		{
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Exercitationem, iusto. Lorem ipsum dolor sit amet.",
			fileISze: "4mb",
			details: true,
			downloadNow: {
				available: true,
				message: "Download Now",
				bgClr: "green",
			},
		},
	];
	return (
		<>
			<div
				ref={constraintsRef}
				className="foreground  h-full w-full p-5 flex gap-2 overflow-hidden  "
			>
				{data.map((item, i) => (
					<Cards data={item} key={i} reference={constraintsRef} />
				))}
			</div>
		</>
	);
};

export default Foreground;
