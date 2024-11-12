import audioImg from '../assets/images/audio-default.png';

export default function TrackInfo() {
	return (
		<section className='text-center'>
			{<img src={audioImg} alt='two notes' className='p-8 mx-auto' />}
			<h3 className='text-3xl font-semibold tracking-wider'>Unknown Title</h3>
			<p className='text-md text-stone-500'>Unknown Artist</p>
		</section>
	);
}
