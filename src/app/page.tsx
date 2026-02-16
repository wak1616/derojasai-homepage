import Image from "next/image";
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
            derojas<span className="text-cyan-400">.ai</span>
          </Link>
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
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center">
        <div className="animate-fade-in-up max-w-3xl">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Dr. Joaquin De Rojas
          </h1>
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Ophthalmologist &middot; Medical Director &middot; Builder of AI for Clinical Augmentation and Automation
          </p>
          <p className="animate-fade-in-up animate-delay-100 mx-auto max-w-xl text-lg leading-relaxed text-gray-400">
            ASCRS presenter. Built and shipped production AI tools used in real clinical workflows — and always looking to collaborate with health tech developers on new and existing projects.
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
            {/* AI Calc Card */}
            <a
              href="https://aicalc.derojas.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="glass card-glow group relative overflow-hidden rounded-2xl transition-all"
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
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                    Live
                  </span>
                  <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
                    Best Paper of Session — ASCRS 2025
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  derojas AI Calc
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
              </div>
            </a>

            {/* SightFlow Card */}
            <a
              href="https://github.com/wak1616/SightFlow"
              target="_blank"
              rel="noopener noreferrer"
              className="glass card-glow group relative overflow-hidden rounded-2xl transition-all"
            >
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-violet-950/40 to-gray-900/40 p-6">
                <Image
                  src="/sightflow-preview.png"
                  alt="SightFlow"
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                    GitHub
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">SightFlow</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  EMR-native structured AI automation for ophthalmology. Integrates
                  directly into Nextech to capture patient encounters and generate
                  structured clinical documentation — replacing manual scribing with
                  intelligent, workflow-aligned automation.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors group-hover:text-violet-300">
                  View on GitHub <ArrowIcon />
                </span>
              </div>
            </a>

            {/* PAC Guide Card */}
            <div className="glass card-glow-amber group relative overflow-hidden rounded-2xl transition-all">
              <div className="flex h-48 flex-col items-center justify-center bg-gradient-to-br from-amber-950/40 to-gray-900/40 p-6">
                <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 px-6 py-4 text-center">
                  <div className="text-3xl font-black tracking-tight text-amber-400/80">PAC</div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-400/40">Guide</div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                    Live
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">PAC Guide</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  AI-powered knowledge base and agent system for US Eye&apos;s
                  Patient Access Center in Florida. Helps call center staff
                  schedule appointments, triage ER calls, verify insurance, and
                  route patients across 50+ providers — using AI agents that
                  answer questions in real time. Initiated by De Rojas and
                  co-developed with{" "}
                  <a
                    href="https://www.raiaai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 underline underline-offset-2 hover:text-amber-300"
                  >
                    Raia
                  </a>
                  .
                </p>
                <a
                  href="https://us-eye-florida.gitbook.io/pac-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 transition-colors hover:text-amber-300"
                >
                  Explore guide <ArrowIcon />
                </a>
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
                  src="/iris-avatar.png"
                  alt="Iris — AI Assistant"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold text-white">
                Hi, I&apos;m Iris
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                I&apos;m Dr. De Rojas&apos;s AI assistant — a fully autonomous
                system he built and maintains, running 24/7 on secure cloud
                infrastructure. I handle his email, calendar, research, and
                professional communications in real time.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                This isn&apos;t a chatbot demo. It&apos;s production AI
                infrastructure — multi-model pipelines, real-time webhooks,
                automated workflows, and hardened security. Built by a surgeon
                who ships code.
              </p>
              <p className="mb-6 text-sm leading-relaxed text-gray-400">
                Dr. De Rojas is always looking to collaborate with health tech
                developers on new and existing projects — whether you&apos;re
                building in healthcare AI, exploring automation for your
                organization, or have an idea worth pursuing. Reach out and
                let&apos;s build something together.
              </p>
              <a
                href="mailto:derojas.assistant@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <MailIcon />
                derojas.assistant@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Joaquin De Rojas Consulting LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/joaquin-de-rojas-md-598830268"
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
