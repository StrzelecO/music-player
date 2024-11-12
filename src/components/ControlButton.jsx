export default function ControlButton({ icon, styles, ...props }) {
	return (
		<li>
			<button className={styles} {...props}>
				{icon}
			</button>
		</li>
	);
}
