export default function ControlButton({ icon, styles, onClick, title }) {
	return (
		<li>
			<button className={styles} onClick={onClick} title={title}>
				{icon}
			</button>
		</li>
	);
}
