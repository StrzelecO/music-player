import PlayerControls from './PlayerControls.jsx';
import TrackInfo from './TrackInfo.jsx';

export default function MusicPlayer() {
	return (
		<main className='w-2/3 max-w-xl m-auto p-8 md:shadow-2xl'>
			<TrackInfo />
			<PlayerControls  />
		</main>
	);
}
