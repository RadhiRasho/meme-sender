import { useEffect, useState } from "react";
import { MemeResponse, MultipleMemeResponse } from "../types";

export default function App() {
	const [memes, setMemes] = useState<MemeResponse[]>();
	const [fetchNew, setFetchNew] = useState<boolean>(false);
	const [sendList, setSendList] = useState<MemeResponse[]>([]);

	useEffect(() => {
		async function getData() {
			const response = await fetch("https://meme-api.com/gimme/7");
			const data: MultipleMemeResponse = await response.json();
			setMemes(data.memes);
		}
		getData();
	}, [fetchNew]);

	function fetchNewMemes() {
		setFetchNew(!fetchNew);
	}

	function addToSendList(item: MemeResponse, index: number) {
		setSendList((curr) => [...curr, item]);
		setMemes((curr) => {
			const newMemes = [...curr];
			newMemes.splice(index, 1);
			return newMemes;
		});
	}

	return (
		<div className="flex flex-col items-center transition-all ease-linear duration-1000 my-2">
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
				onClick={fetchNewMemes}
			>
				Fetch New Memes
			</button>
			<h2 className="text-red-500 text-4xl mt-4">Possible Options</h2>
			<br />
			<div className="flex gap-4">
				{memes?.length === 0 && <h1 className="text-4xl">No more memes</h1>}
				{memes?.map((item, index) => {
					return (
						<div key={index}>
							<img
								className={`ease-in-out transition-all hover:duration-700 w-60 h-60 hover:scale-[2] ${
									index === 0
										? "hover:origin-top-left"
										: index === memes.length - 1
										? "hover:origin-top-right"
										: "hover:origin-top"
								}`}
								src={item.url}
								onClick={() => addToSendList(item, index)}
								alt="meme"
							/>
						</div>
					);
				})}
			</div>
			<h2 className="text-red-500 text-4xl mt-4">Will Be Sent</h2>
			<br />
			<div className="flex gap-4">
				{sendList?.map((item, index) => {
					return (
						<div key={index}>
							<img
								className="ease-in-out transition-all duration-700 w-60 h-60 hover:scale-[2] hover:origin-top"
								src={item.url}
								alt="meme"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
