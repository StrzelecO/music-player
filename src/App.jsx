import { useState } from 'react';
import MusicPlayer from './components/MusicPlayer.jsx';
import SideBar from './components/SideBar.jsx';
import MusicPlayerContextProvider from './context/music-player-context.jsx';

function App() {
	const [showSideBar, setShowSideBar] = useState(false);

	const toggleSideBar = () => {
		setShowSideBar(prevValue => !prevValue);
	};

	return (
		<MusicPlayerContextProvider>
			<div className='h-screen flex bg-gray-300 relative'>
				{showSideBar ? (
					<SideBar handleToggleSideBar={toggleSideBar} />
				) : (
					<button
						onClick={toggleSideBar}
						className='absolute left-0 h-10 p-2 m-4 bg-gray-800 text-white uppercase hover:bg-gray-700 rounded-md cursor-pointer transition-all'
					>
						Playlist
					</button>
				)}
				<MusicPlayer />
			</div>
		</MusicPlayerContextProvider>
	);

	// return (
	// 	<div className='h-screen flex bg-gray-300 relative'>
	// 		{showSideBar ? (
	// 			<SideBar
	// 				activeTrackID={activeTrackID}
	// 				handleToggleSideBar={toggleSideBar}
	// 				handleTrackChange={handleTrackChange}
	// 			/>
	// 		) : (
	// 			<button
	// 				onClick={toggleSideBar}
	// 				className='absolute left-0 h-10 p-2 m-4 bg-gray-800 text-white uppercase hover:bg-gray-700 rounded-sm cursor-pointer transition-all'
	// 			>
	// 				Playlist
	// 			</button>
	// 		)}
	// 		<MusicPlayer trackID={activeTrackID} />
	// 	</div>
	// );
}

export default App;
