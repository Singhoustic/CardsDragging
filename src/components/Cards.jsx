import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoAlertCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
const Cards = ({ data, reference }) => {
	return (
		<>
			<motion.div
				drag
				dragConstraints={reference}
				className="cardBody w-52 fixed rounded-2xl bg-black text-slate-300 px-4 py-6 overflow-hidden  "
			>
				<div className="cardIcon text-3xl py-1 flex align-middle">
					{/* Importing file icon */}
					<IoDocumentTextOutline />
				</div>
				<div className="para h-40 overflow-y-scroll text-slate-600 ">
					<p>{data.desc}</p>
				</div>
				<div className="text-slate-400 flex justify-between	items-center text-xl text-center mb-6">
					<h3>{data.fileISze}</h3>
					<span>
						{data.details ? (
							<MdOutlineFileDownload />
						) : (
							<IoAlertCircleOutline />
						)}
					</span>
				</div>
				{data.downloadNow.available ? (
					<div
						className={`footer py-2 bg-indigo-700 w-full absolute bottom-0 left-0 flex justify-center items-center hover:bg-purple-500`}
					>
						<h1>{data.downloadNow.message}</h1>
					</div>
				) : (
					<div
						className={`footer py-2 bg-pink-500 w-full absolute bottom-0 left-0 flex justify-center items-center hover:bg-zinc-800	`}
					>
						<h1>Not Available</h1>
					</div>
				)}
			</motion.div>
		</>
	);
};

export default Cards;
