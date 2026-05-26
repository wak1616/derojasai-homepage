import Image from "next/image";
import VideoModal from "./video-modal";

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

function XIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen">
      {/* Background layers */}
      <div className="hero-gradient fixed inset-0 -z-10" />
      <div className="dot-grid fixed inset-0 -z-10 opacity-40" />

      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-gray-950/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="text-lg font-bold tracking-tight text-white cursor-pointer">
            derojas<span className="text-cyan-400">.ai</span>
          </a>
          <nav className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#projects" className="transition-colors hover:text-white">
              Projects
            </a>
            <a href="#iris" className="transition-colors hover:text-white">
              Connect
            </a>
            <a
              href="https://www.linkedin.com/in/joaquin-de-rojas-md-598830268"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://x.com/JdeRojasMD"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              <XIcon />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center">
        <div className="animate-fade-in-up max-w-3xl">
          <div className="mb-6">
            <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/20">
              <Image
                src="/headshot.png"
                alt="Dr. Joaquin De Rojas"
                width={128}
                height={128}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Dr. Joaquin De Rojas
          </h1>
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Ophthalmologist &middot; Medical Director &middot; Builder of AI for Clinical Augmentation and Automation
          </p>
          <p className="animate-fade-in-up animate-delay-100 mx-auto max-w-xl text-lg leading-relaxed text-gray-400">
            Building modern, AI-first infrastructure for healthcare and ophthalmology: tools that augment clinicians, streamline workflows, and ultimately serve patients.
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

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* SightFlow Card */}
            <VideoModal videoSrc="/sightflow-demo.mp4">
              <div className="glass card-glow group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all">
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-violet-950/40 to-gray-900/40 p-6">
                  <Image
                    src="/sightflow-preview.png"
                    alt="SightFlow"
                    width={160}
                    height={160}
                    className="object-contain drop-shadow-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                      Pilot
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">SightFlow</h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-400">
                    AI-powered scribe that integrates directly into the Nextech
                    EMR. Clinicians dictate encounters naturally; the system
                    transcribes, structures, and auto-populates the entire
                    chart — from exam findings to diagnoses to plan. Currently
                    used by multiple ophthalmologists and optometrists across
                    several clinics.
                  </p>
                  <div className="mt-auto flex items-center gap-4">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors group-hover:text-violet-300">
                      View demo <ArrowIcon />
                    </span>
                  </div>
                  <a
                    href="/privacy/sightflow"
                    className="mt-3 inline-block text-xs text-gray-600 transition-colors hover:text-violet-400"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </VideoModal>

            {/* PAC Guide Card */}
            <VideoModal videoSrc="/pac-guide-demo.mp4">
              <div className="glass card-glow-amber group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all">
                <div className="flex h-48 flex-col items-center justify-center gap-3 bg-gradient-to-br from-amber-950/40 to-gray-900/40 p-6">
                  <Image
                    src="/us-eye-logo.png"
                    alt="US Eye"
                    width={140}
                    height={40}
                    className="object-contain drop-shadow-lg"
                  />
                  <Image
                    src="/pac-guide-preview.jpg"
                    alt="PAC Guide"
                    width={160}
                    height={60}
                    className="object-contain drop-shadow-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                      Live
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">PAC Guide</h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-400">
                    AI-powered knowledge base and agent system for US Eye
                    Florida&apos;s patient access center (PAC). Helps call center staff
                    schedule appointments, triage ER calls, verify insurance, and
                    route patients across 50+ providers, using AI agents that
                    answer questions in real time. Initiated by De Rojas and
                    co-developed with{" "}
                    <a
                      href="https://www.raiaai.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 text-amber-400 underline underline-offset-2 hover:text-amber-300"
                    >
                      raia
                    </a>
                    .
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-amber-400 transition-colors group-hover:text-amber-300">
                    View demo <ArrowIcon />
                  </span>
                </div>
              </div>
            </VideoModal>

            {/* AI Calc Card */}
            <a
              href="https://aicalc.derojas.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="glass card-glow group relative flex flex-col overflow-hidden rounded-2xl transition-all"
            >
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-cyan-950/40 to-gray-900/40 p-6">
                <Image
                  src="/aicalc-preview.png"
                  alt="De Rojas AI Calc"
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                    Live
                  </span>
                  <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
                    Best Paper of Session, ASCRS 2025
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  AI Calc
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  An ML-powered arcuate incision calculator for cataract surgery.
                  Uses machine learning to predict astigmatism correction outcomes
                  for femtosecond laser-assisted procedures, helping surgeons plan
                  more precise treatments.
                </p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors group-hover:text-cyan-300">
                  Open app <ArrowIcon />
                </span>
              </div>
            </a>

            {/* MDConsult Card */}
            <div className="glass card-glow-emerald group relative flex flex-col overflow-hidden rounded-2xl transition-all">
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-emerald-950/40 to-gray-900/40 p-6">
                <svg className="h-20 w-20 text-emerald-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                    Live
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">MDConsult</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  A streamlined lens selection platform for cataract surgery.
                  Sends personalized lifestyle surveys to patients before their
                  consultation, then surfaces AI-driven recommendations so
                  surgeons and patients can make more informed IOL decisions
                  together. Co-developed with{" "}
                  <a
                    href="https://www.linkedin.com/in/garywortz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300"
                  >
                    Gary Wortz, MD
                  </a>
                  .
                </p>
                <a
                  href="https://mdconsult.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  Open app <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="relative py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-emerald-400">
              In Development
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What&apos;s next
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {/* Visari Card */}
            <div className="glass card-glow-indigo group relative overflow-hidden rounded-2xl transition-all">
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-indigo-950/40 to-gray-900/40 p-6">
                <Image
                  src="/visari-preview.png"
                  alt="Visari logo"
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
                    Coming Soon
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Visari</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  The AI-native clinical operating system for eye care. Legacy
                  EMRs force physicians to adapt to software — Visari flips
                  that. Built around natural language, multimodal imaging, and
                  a fluid interface that adapts to the physician, replacing
                  the most painful parts of the EMR: documentation, chart
                  navigation, image review, and coding.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400">
                  Details coming soon
                </span>
              </div>
            </div>

            {/* Outbound Call Agent Card */}
            <div className="glass card-glow-rose group relative overflow-hidden rounded-2xl transition-all">
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-rose-950/40 to-gray-900/40 p-6">
                <svg className="h-20 w-20 text-rose-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-400">
                    Coming Soon
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Outbound Call Agent</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  An AI-powered voice agent for our ambulatory surgical center
                  that proactively calls patients before their procedures to
                  educate them on preoperative instructions, answer questions,
                  and ensure they&apos;re fully prepared, reducing no-shows and
                  improving the patient experience. Co-developing with{" "}
                  <a
                    href="https://www.raiaai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-400 underline underline-offset-2 hover:text-rose-300"
                  >
                    raia
                  </a>
                  .
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-rose-400">
                  Details coming soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Iris Section */}
      <section id="iris" className="relative py-32 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-16">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-violet-400">
              Collaborate
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Meet Iris
            </h2>
          </div>

          <div className="glass iris-glow relative mx-auto max-w-xl rounded-3xl p-10 pt-20 transition-all">
            {/* Iris avatar */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-violet-500/30 shadow-lg shadow-violet-500/20">
                <Image
                  src="/iris-avatar.jpg"
                  alt="Iris, AI Assistant"
                  fill
                  className="object-cover object-top scale-110"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold text-white">
                Hi, I&apos;m Iris!
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                I&apos;m Dr. De Rojas&apos;s personal AI assistant, running
                24/7 on secure cloud infrastructure. I help manage his email,
                calendar, research, and professional communications across
                multiple channels.
              </p>
              <p className="mb-6 text-sm leading-relaxed text-gray-400">
                Dr. De Rojas is always looking to collaborate with health tech
                developers on new and existing projects, whether you&apos;re
                building in healthcare AI, exploring automation for your
                organization, or have an idea worth pursuing.
              </p>
              <a
                href="mailto:iris@derojas.ai"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <MailIcon />
                iris@derojas.ai
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
          <Image
            src="/logo.png"
            alt="derojas.ai logo"
            width={48}
            height={48}
            className="opacity-60"
          />
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/joaquin-de-rojas-md-598830268"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-white"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://x.com/JdeRojasMD"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-white"
            >
              <XIcon />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} derojas.ai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
