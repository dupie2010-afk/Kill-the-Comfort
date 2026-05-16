export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-20 bg-black text-white">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-6">
          Founders Access Open
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-none uppercase mb-8">
          Comfort Is
          <span className="text-red-600 block">Destroying</span>
          Your Future.
        </h1>

        <p className="text-zinc-400 text-lg leading-relaxed mb-10">
          Every day you delay, your weaker self survives another day.
        </p>

        <a
          href="https://payhip.com/b/xQFv4"
          target="_blank"
          className="block w-full bg-red-600 hover:bg-red-700 transition-all duration-300 text-white font-black uppercase tracking-wide py-5 rounded-xl text-lg"
        >
          Get Founders Access — $12.50
        </a>
      </div>
    </section>
  )
}
