import audioImg from '../assets/images/audio-default.png';
import trackList from '../data/trackList.js';
import { useContext } from 'react';
import { MusicPlayerContext } from '../context/music-player-context.jsx';

export default function TrackInfo() {
	const { activeTrackID } = useContext(MusicPlayerContext);
	
	return (
		<section className='text-center'>
			<img src={audioImg} alt='two notes' className='p-8 mx-auto' />
			<h3 className='text-3xl font-semibold tracking-wider'>
				{trackList[activeTrackID].title ?? 'Unknown Title'}
			</h3>
			<p className='text-md text-stone-500'>
				{trackList[activeTrackID].artist ?? 'Unknown Artist'}
			</p>
		</section>
	);
}
