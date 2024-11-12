import { useContext, useEffect, useState } from 'react';
import { MusicPlayerContext } from '../context/music-player-context.jsx';

import trackList from '../data/trackList.js';
import ControlButton from './ControlButton.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlay,
	faPause,
	faShuffle,
	faStepBackward,
	faStepForward,
	faRotateRight,
} from '@fortawesome/free-solid-svg-icons';

export default function PlayerControls() {
	const {
		activeTrackID,
		isPlaying,
		isShuffle,
		audio,
		handlePlayPause,
		handleNextTrack,
		handlePrevTrack,
		handleReplay,
		handleShuffle,
	} = useContext(MusicPlayerContext);

	const [audioRef, setAudioRef] = useState();

	useEffect(() => {
		setAudioRef(audio);
	}, [activeTrackID, audio]);

	const btnStyles =
		'p-2 mx-2 text-gray-800 focus:outline-none hover:text-gray-600 transition-all hover:scale-110';

	const clickedStyles =
		'p-2 mx-2 focus:outline-none text-blue-600 transition-all hover:scale-110';

	const playIcon = <FontAwesomeIcon icon={faPlay} />;
	const pauseIcon = <FontAwesomeIcon icon={faPause} />;

	return (
		<section className='my-6'>
			<audio
				ref={audioRef}
				src={trackList[activeTrackID].audioSrc}
				onEnded={handleNextTrack}
			></audio>
			<menu className='text-xl flex justify-center'>
				<ControlButton
					icon={<FontAwesomeIcon icon={faShuffle} />}
					onClick={handleShuffle}
					title={isShuffle ? 'Shuffle: Off' : 'Shuffle: On'}
					styles={isShuffle ? clickedStyles : btnStyles}
				/>
				<ControlButton
					icon={<FontAwesomeIcon icon={faStepBackward} />}
					onClick={handlePrevTrack}
					title='Previous Track'
					styles={btnStyles}
				/>
				<ControlButton
					icon={isPlaying ? pauseIcon : playIcon}
					title={isPlaying ? 'Pause' : 'Play'}
					onClick={handlePlayPause}
					styles={btnStyles}
				/>
				<ControlButton
					icon={<FontAwesomeIcon icon={faStepForward} />}
					onClick={handleNextTrack}
					title='Next Track'
					styles={btnStyles}
				/>
				<ControlButton
					icon={<FontAwesomeIcon icon={faRotateRight} />}
					onClick={handleReplay}
					title='Replay track'
					styles={btnStyles}
				/>
			</menu>
		</section>
	);
}
