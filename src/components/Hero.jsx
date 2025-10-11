export default function Hero() {
  return (
	<div className="relative w-full h-full overflow-hidden rounded-lg my-8">
		<img src="/hero.jpg" alt="Hero Image" className="mix-blend-color-dodge" />
		<div className="absolute inset-0 flex flex-col items-center justify-center text-white  ">
			<div className="px-10 py-12 bg-neutral-500/10 backdrop-blur-xs rounded-lg text-center">
				<div className="text-7xl font-black uppercase  tracking-[10px] text-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">One Life. No Regrets.</div>
				<div className="text-2xl font-light mt-8 tracking-[10px] text-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">Make the best of it</div>
				<div className="mt-8 flex items-center justify-center">
					<input type="email" placeholder="Your email" className="bg-white text-black pl-6 p-4 min-w-96 rounded-l-full"/>
					<button className="p-4 bg-black hover:bg-neutral-900 transition-all duration-100 text-white font-semibold rounded-r-full">Subscribe</button>
				</div>
			</div>
		</div>
	</div>
  )
}
