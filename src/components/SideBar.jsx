import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

export default function SideBar({ handleToggleSideBar }) {
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
				<li>Song 1</li>
				<li>Song 2</li>
				<li>Song 3</li>
			</ul>
			<button className={closeBtnStyles} onClick={handleToggleSideBar}>
				<FontAwesomeIcon icon={faX} />
			</button>
		</aside>
	);
}
