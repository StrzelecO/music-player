import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlay,
	// faPause,
	faShuffle,
	faStepBackward,
	faStepForward,
	faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import ControlButton from './ControlButton.jsx';

export default function PlayerControls() {
	const btnStyles =
		'p-2 mx-2 text-gray-800 focus:outline-none hover:text-gray-600 transition-all hover:scale-110';

	const playIcon = <FontAwesomeIcon icon={faPlay} />;
	// const pauseIcon = <FontAwesomeIcon icon={faPause} />;

	return (
		<section className='my-6'>
			<audio></audio>
			<menu className='text-xl flex justify-center'>
				<ControlButton
					icon={<FontAwesomeIcon icon={faShuffle} />}
					title='Shuffle on/off'
					styles={btnStyles}
				/>
				<ControlButton
					icon={<FontAwesomeIcon icon={faStepBackward} />}
					title='Previous Track'
					styles={btnStyles}
				/>
				<ControlButton
					icon={playIcon}
					title='Play/Pause'
					styles={btnStyles}
				/>
				<ControlButton
					icon={<FontAwesomeIcon icon={faStepForward} />}
					title='Next Track'
					styles={btnStyles}
				/>
				<ControlButton
					icon={<FontAwesomeIcon icon={faRotateRight} />}
					title='Replay track'
					styles={btnStyles}
				/>
			</menu>
		</section>
	);
}
