import { createContext, useReducer } from 'react';
import { useRef } from 'react';
import trackList from '../data/trackList.js';

export const MusicPlayerContext = createContext({
	activeTrackID: 0,
	isPlaying: false,
	audio: null,
	isShuffle: false,
	handlePlayPause: () => {},
	handleNextTrack: () => {},
	handlePrevTrack: () => {},
	handleReplay: () => {},
	handleTrackChange: () => {},
	handleShuffle: () => {},
});

function musicPlayerReducer(state, action) {
	switch (action.type) {
		case 'PLAY_PAUSE_TRACK': {
			const { audio } = action.payload;
			if (state.isPlaying) {
				audio.current.pause();
			} else {
				audio.current.play();
			}
			return {
				...state,
				isPlaying: !state.isPlaying,
			};
		}
		case 'NEXT_TRACK': {
			const { audio } = action.payload;
			audio.current.pause();

			// takes under considaration isShuffle
			const newID = state.isShuffle
				? Math.floor(Math.random() * trackList.length) // Random track for shuffle
				: (state.activeTrackID + 1) % trackList.length;

			audio.current.src = trackList[newID].audioSrc;

			audio.current.oncanplay = () => {
				if (state.isPlaying) {
					audio.current.play();
				}
				audio.current.oncanplay = null; // Remove listener after it's used
			};
			audio.current.load();

			return {
				...state,
				activeTrackID: newID,
			};
		}
		case 'PREV_TRACK': {
			const { audio } = action.payload;
			audio.current.pause();

			const newID =
				(state.activeTrackID - 1 + trackList.length) % trackList.length;
			audio.current.src = trackList[newID].audioSrc;

			audio.current.oncanplay = () => {
				if (state.isPlaying) {
					audio.current.play();
				}
				audio.current.oncanplay = null; // Remove listener after it's used
			};
			audio.current.load();

			return {
				...state,
				activeTrackID: newID,
			};
		}
		case 'REPLAY_TRACK': {
			const audio = action.payload.audio.current;
			audio.load();

			// Add an event listener to play the audio once it can play
			audio.oncanplay = () => {
				audio.play();
				audio.oncanplay = null; // Clean up the event listener after it's triggered
			};
			return {
				...state,
				isPlaying: true,
			};
		}
		case 'CHANGE_TRACK': {
			const { audio, trackID } = action.payload;
			audio.current.pause(); // Stop any current playback
			audio.current.src = trackList[trackID].audioSrc; // Update the audio source

			// Use oncanplay to wait for the audio to be ready
			audio.current.oncanplay = () => {
				if (state.isPlaying) {
					audio.current.play(); // Play only when audio is ready
				}
				audio.current.oncanplay = null; // Remove listener after it's called
			};

			audio.current.load(); // Start loading the new track

			return {
				...state,
				activeTrackID: trackID,
			};
		}
		case 'TOGGLE_SHUFFLE': {
			return {
				...state,
				isShuffle: !state.isShuffle, // Toggle shuffle state
			};
		}

		default:
			return state;
	}
}

export default function CartContextProvider({ children }) {
	const audioRef = useRef();
	const [musicPlayerState, musicPlayerDispatch] = useReducer(
		musicPlayerReducer,
		{ activeTrackID: 0, isPlaying: false, audio: audioRef }
	);

	const handlePlayPause = () => {
		musicPlayerDispatch({
			type: 'PLAY_PAUSE_TRACK',
			payload: {
				audio: audioRef,
			},
		});
	};

	const handleTrackChange = trackID => {
		musicPlayerDispatch({
			type: 'CHANGE_TRACK',
			payload: {
				trackID,
				audio: audioRef,
			},
		});
	};

	const handleNextTrack = () => {
		musicPlayerDispatch({
			type: 'NEXT_TRACK',
			payload: {
				audio: audioRef,
			},
		});
	};

	const handlePrevTrack = () => {
		musicPlayerDispatch({
			type: 'PREV_TRACK',
			payload: {
				audio: audioRef,
			},
		});
	};

	const handleReplay = () => {
		musicPlayerDispatch({
			type: 'REPLAY_TRACK',
			payload: {
				audio: audioRef,
			},
		});
	};

	const handleShuffle = () => {
		musicPlayerDispatch({ type: 'TOGGLE_SHUFFLE' });
	};

	const ctxValue = {
		activeTrackID: musicPlayerState.activeTrackID,
		isPlaying: musicPlayerState.isPlaying,
		audio: audioRef,
		isShuffle: musicPlayerState.isShuffle,
		handlePlayPause: handlePlayPause,
		handleNextTrack: handleNextTrack,
		handlePrevTrack: handlePrevTrack,
		handleReplay: handleReplay,
		handleShuffle: handleShuffle,
		handleTrackChange: handleTrackChange,
	};

	return (
		<MusicPlayerContext.Provider value={ctxValue}>
			{children}
		</MusicPlayerContext.Provider>
	);
}
