import trackList from '../data/trackList.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { MusicPlayerContext } from '../context/music-player-context.jsx';

export default function SideBar({ handleToggleSideBar }) {
	const { handleTrackChange, activeTrackID } = useContext(MusicPlayerContext);

	let btnStyles = 'hover:bg-gray-700 p-2 rounded cursor-pointer';
	let asideStyles =
		'relative w-1/3 max-w-64 h-screen px-4 py-12 bg-gray-800 text-white transition-all duration-500';
	let closeBtnStyles =
		btnStyles + ' w-10 absolute right-2 top-2 text-l font-bold';

	return (
		<aside className={asideStyles}>
			<h2 className='text-xl font-semibold uppercase mb-4 border-b border-gray-700 pb-2'>
				Playlist
			</h2>
			<ul className='space-y-2'>
                {trackList.map(track => {
                    let btnStyles = 'hover:bg-gray-700 p-2 rounded cursor-pointer';
                    if (track.id === activeTrackID) {
                        btnStyles += ' bg-gray-700';
                    }
                    return (
                        <li
                            key={track.id}
                            className={btnStyles}
                            onClick={() => {
                                handleTrackChange(track.id);
                            }}
                        >
                            <p>{track.title}</p>
                            <p className='text-xs text-stone-400'>{track.artist}</p>
                        </li>
                    );
                })}
            </ul>
			<button className={closeBtnStyles} onClick={handleToggleSideBar}>
				<FontAwesomeIcon icon={faX} />
			</button>
		</aside>
	);
}
