import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background layers */}
      <div className="hero-gradient fixed inset-0 -z-10" />
      <div className="dot-grid fixed inset-0 -z-10 opacity-40" />

      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-gray-950/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="text-lg font-bold tracking-tight text-white">
            DeRojas<span className="text-cyan-400">.ai</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#projects" className="transition-colors hover:text-white">
              Projects
            </a>
            <a href="#iris" className="transition-colors hover:text-white">
              Iris
            </a>
            <a
              href="https://www.linkedin.com/in/joaquin-de-rojas"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              <LinkedInIcon />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center">
        <div className="animate-fade-in-up max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Ophthalmology &times; Artificial Intelligence
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building the future of
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              eye care with AI
            </span>
          </h1>
          <p className="animate-fade-in-up animate-delay-100 mx-auto max-w-xl text-lg leading-relaxed text-gray-400">
            Dr. Joaquin De Rojas is an ophthalmologist and developer creating
            open-source AI tools that bring machine learning to the clinic.
          </p>
          <div className="animate-fade-in-up animate-delay-200 mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-gray-950 transition-colors hover:bg-cyan-400"
            >
              View Projects
              <ArrowIcon />
            </a>
            <a
              href="#iris"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-gray-200 transition-colors hover:border-white/20 hover:text-white"
            >
              Meet Iris
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in-up animate-delay-400 absolute bottom-10 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-cyan-400">
              Projects
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              AI tools for the real world
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* AI Calc Card */}
            <a
              href="https://aicalc.derojas.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="glass card-glow group relative rounded-2xl p-8 transition-all"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                  </svg>
                </div>
                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                  Live
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                De Rojas AI Calc
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-400">
                An ML-powered arcuate incision calculator for cataract surgery.
                Uses machine learning to predict astigmatism correction outcomes
                for femtosecond laser-assisted procedures, helping surgeons plan
                more precise treatments.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors group-hover:text-cyan-300">
                Open app <ArrowIcon />
              </span>
            </a>

            {/* SightFlow Card */}
            <a
              href="https://github.com/wak1616/SightFlow"
              target="_blank"
              rel="noopener noreferrer"
              className="glass card-glow group relative rounded-2xl p-8 transition-all"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                  Open Source
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">SightFlow</h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-400">
                An AI-powered virtual scribe Chrome extension built for Nextech
                EMR. Listens to patient encounters and automatically generates
                structured clinical notes, saving ophthalmologists time on
                documentation.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors group-hover:text-violet-300">
                View on GitHub <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Iris Section */}
      <section id="iris" className="relative py-32 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-16">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-violet-400">
              AI Assistant
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Meet Iris
            </h2>
          </div>

          <div className="glass iris-glow relative mx-auto max-w-xl rounded-3xl p-10 transition-all">
            {/* Decorative glow orb */}
            <div className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg shadow-violet-500/30">
              <SparkleIcon />
            </div>

            <div className="mt-4">
              <h3 className="mb-3 text-xl font-bold text-white">
                Hi, I&apos;m Iris
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-400">
                I&apos;m Dr. De Rojas&apos;s AI assistant. Have a question about
                his projects, research, or just want to get in touch? Send me an
                email and I&apos;ll make sure it gets to him.
              </p>
              <a
                href="mailto:derojas.assistant@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <MailIcon />
                Email Iris
              </a>
              <p className="mt-4 text-xs text-gray-500">
                derojas.assistant@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} DeRojas.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/joaquin-de-rojas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-white"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
