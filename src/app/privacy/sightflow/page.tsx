import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SightFlow Privacy Policy | derojas.ai",
  description:
    "Privacy policy for SightFlow, an AI-powered clinical documentation assistant for ophthalmology.",
};

export default function SightFlowPrivacy() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-violet-400"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to derojas.ai
        </Link>

        <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
          SightFlow Privacy Policy
        </h1>
        <p className="mb-12 text-sm text-gray-500">Last updated: May 2026</p>

        <div className="space-y-10 text-sm leading-relaxed">
          <p>
            SightFlow is a Chrome extension that adds AI-assisted dictation and
            documentation to the Nextech EMR. This policy describes what data
            the extension processes, where it goes, and how it&apos;s handled.
          </p>

          <Section title="Data We Process">
            <p className="mb-3">
              When you use SightFlow, the following are processed during a
              session:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">Voice audio</strong> &mdash;
                captured during dictation, compressed to Opus/WebM, sent to our
                backend for transcription.
              </li>
              <li>
                <strong className="text-white">Chart context</strong> &mdash;
                the structured contents of the patient chart open in your active
                Nextech tab are read so the AI can produce a coherent,
                non-duplicate note. This may include Protected Health
                Information (PHI).
              </li>
              <li>
                <strong className="text-white">Local configuration</strong>{" "}
                &mdash; your SightFlow API key, organization ID, backend URL,
                and UI preferences. Stored only in{" "}
                <code className="text-xs text-violet-300">
                  chrome.storage.local
                </code>{" "}
                (or read from{" "}
                <code className="text-xs text-violet-300">
                  chrome.storage.managed
                </code>{" "}
                if your IT administrator provisions them). Not PHI.
              </li>
              <li>
                <strong className="text-white">Nextech user identifier</strong>{" "}
                &mdash; extracted from the Nextech footer for per-user usage
                attribution within your practice.
              </li>
            </ul>
            <p className="mt-3">
              We do not collect contact information, browsing history outside
              Nextech, location data, or data from any site other than{" "}
              <code className="text-xs text-violet-300">
                app1.intellechart.net
              </code>
              .
            </p>
          </Section>

          <Section title="How Data Is Used">
            <p>
              Voice and chart context are sent to SightFlow&apos;s backend Cloud
              Function, which forwards them to Google Cloud Vertex AI for
              transcription and structured output. Results are returned to your
              sidebar for review. Nothing is written to your Nextech chart until
              you click &ldquo;Execute.&rdquo;
            </p>
          </Section>

          <Section title="Storage and Retention">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">On your device</strong>: Only
                configuration values. No PHI, audio, or chart contents are ever
                written to{" "}
                <code className="text-xs text-violet-300">chrome.storage</code>.
              </li>
              <li>
                <strong className="text-white">Vertex AI</strong>: Prompt and
                response data are not retained by Google beyond request
                processing and are not used for model training, per Vertex
                AI&apos;s data-handling commitments.
              </li>
              <li>
                <strong className="text-white">SightFlow backend</strong>: Audio
                and chart context are not persisted after the response is
                returned. Operational metadata (timestamps, user ID, request
                type &mdash; no PHI content) is retained for billing and
                security monitoring.
              </li>
            </ul>
          </Section>

          <Section title="HIPAA">
            <p>
              All AI processing runs on Google Cloud Vertex AI under our
              standard Google Cloud Business Associate Agreement. PHI is never
              sent to consumer AI APIs.
            </p>
          </Section>

          <Section title="Third Parties">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">
                  Google Cloud Platform (Vertex AI + Cloud Functions)
                </strong>{" "}
                &mdash; covered by Google&apos;s BAA.
              </li>
              <li>
                <strong className="text-white">
                  Nextech (app1.intellechart.net)
                </strong>{" "}
                &mdash; your EMR; SightFlow reads and writes only on the chart
                you&apos;ve already authenticated to.
              </li>
            </ul>
          </Section>

          <Section title="Contact">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <a
                  href="mailto:joaquin@derojas.ai"
                  className="text-violet-400 underline decoration-violet-400/30 transition-colors hover:text-violet-300"
                >
                  joaquin@derojas.ai
                </a>
              </li>
              <li>
                <a
                  href="mailto:chirag@derojas.ai"
                  className="text-violet-400 underline decoration-violet-400/30 transition-colors hover:text-violet-300"
                >
                  chirag@derojas.ai
                </a>
              </li>
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-white">{title}</h2>
      {children}
    </section>
  );
}
