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
        <p className="mb-12 text-sm text-gray-500">
          Effective March 1, 2026 &middot; Last updated March 1, 2026
        </p>

        <div className="space-y-10 text-sm leading-relaxed">
          <p>
            SightFlow is a product of Joaquin De Rojas Consulting LLC, d/b/a
            derojas.ai (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;). This policy describes how the SightFlow Chrome
            extension handles data.
          </p>

          <Section title="What SightFlow Does">
            <p>
              SightFlow is an AI-powered clinical documentation assistant that
              works inside the Nextech electronic medical record (EMR) system. It
              listens to provider dictation during patient encounters and
              generates structured clinical documentation.
            </p>
          </Section>

          <Section title="Data We Process">
            <p className="mb-3">
              During an encounter, SightFlow temporarily processes:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">Voice audio</strong> recorded
                through the browser microphone during active dictation
              </li>
              <li>
                <strong className="text-white">Clinical text</strong> visible in
                the open Nextech chart (e.g., patient history, exam findings,
                diagnoses)
              </li>
              <li>
                <strong className="text-white">Images or documents</strong>{" "}
                uploaded from the device&apos;s file system (e.g., photos of
                external clinical notes or referral documents submitted for AI
                interpretation)
              </li>
            </ul>
            <p className="mt-3">
              This data is used solely to generate structured clinical
              documentation for the current encounter.
            </p>
          </Section>

          <Section title="How Data Is Processed">
            <p className="mb-4">
              All data is transmitted over encrypted connections (HTTPS/TLS
              1.2+) to a secure backend hosted on Google Cloud Platform. AI
              processing is performed by Google Vertex AI, a HIPAA-compliant
              service covered under a signed Google Cloud Business Associate
              Agreement (BAA).
            </p>

            <h3 className="mb-2 text-sm font-semibold text-gray-200">
              Voice dictation
            </h3>
            <ol className="mb-6 list-decimal space-y-2 pl-5">
              <li>
                Audio is captured locally in the browser during dictation
              </li>
              <li>
                On finalization, audio is sent to our Cloud Function backend
                (hosted on Google Cloud Run)
              </li>
              <li>
                The Cloud Function forwards the request to Google Vertex AI for
                processing
              </li>
              <li>
                The AI response is streamed back to the extension and used to
                populate the Nextech chart
              </li>
              <li>
                Audio buffers are cleared from browser memory after each send
              </li>
            </ol>

            <h3 className="mb-2 text-sm font-semibold text-gray-200">
              Document upload (Upload External Note)
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                The user selects a file (JPG, PNG, or PDF) from their device
              </li>
              <li>
                The file is read into memory and transmitted over HTTPS to our
                Cloud Function backend
              </li>
              <li>
                The Cloud Function forwards the file to Google Vertex AI, which
                extracts clinical findings only &mdash; the AI is explicitly
                instructed to exclude patient-identifying information (name, date
                of birth, MRN, address, phone, SSN, insurance) from its output
              </li>
              <li>
                Structured clinical data is streamed back to the extension for
                chart entry
              </li>
              <li>
                The file data is not persisted on our servers or in browser
                storage &mdash; it exists only in memory during processing
              </li>
            </ol>
          </Section>

          <Section title="Data We Store">
            <p className="mb-3">
              <strong className="text-white">
                We do not store patient data.
              </strong>{" "}
              Specifically:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                No audio recordings are saved or persisted after processing
              </li>
              <li>
                No patient health information (PHI) is written to browser
                storage
              </li>
              <li>
                No clinical data is logged on our servers &mdash; backend logs
                contain only operational metadata (timestamps, token counts,
                organization ID)
              </li>
              <li>
                No patient-identifying information is included in AI processing
                logs
              </li>
            </ul>
          </Section>

          <Section title="Data We Do Not Collect">
            <ul className="list-disc space-y-2 pl-5">
              <li>Patient names, dates of birth, or medical record numbers</li>
              <li>Insurance or billing information</li>
              <li>Device identifiers or browser fingerprints</li>
              <li>Browsing history or activity outside of Nextech</li>
              <li>Location data</li>
            </ul>
          </Section>

          <Section title="Third-Party Services">
            <p className="mb-3">
              SightFlow uses the following third-party service for AI processing:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">
                  Google Cloud Platform (Vertex AI, Cloud Functions, Cloud Run)
                </strong>{" "}
                &mdash; HIPAA-compliant, covered under a signed Business
                Associate Agreement. Google&apos;s HIPAA compliance information
                is available at{" "}
                <a
                  href="https://cloud.google.com/security/compliance/hipaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 underline decoration-violet-400/30 transition-colors hover:text-violet-300"
                >
                  cloud.google.com/security/compliance/hipaa
                </a>
                .
              </li>
            </ul>
            <p className="mt-3">
              We do not share, sell, or transfer patient data to any other third
              party.
            </p>
          </Section>

          <Section title="HIPAA Compliance">
            <p className="mb-3">
              SightFlow is designed for use in healthcare environments subject to
              HIPAA. Our compliance measures include:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                All AI processing routed through BAA-covered Google Cloud
                infrastructure
              </li>
              <li>
                Encryption in transit for all data transmissions (TLS 1.2+)
              </li>
              <li>
                No persistent storage of PHI in the extension or on our servers
              </li>
              <li>
                Audit logging of operational metadata (no PHI) for
                accountability
              </li>
              <li>
                Tightly scoped browser permissions (only Nextech domains and our
                Cloud Function endpoints)
              </li>
              <li>
                Chrome Manifest V3 security model (strict Content Security
                Policy, no remote code execution)
              </li>
            </ul>
          </Section>

          <Section title="Data Retention">
            <p>
              We do not retain patient data. Operational logs (containing no PHI)
              are retained in Google Cloud Logging per our retention policy for
              audit and compliance purposes.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>
              If you have questions about how your data is handled or wish to
              exercise any rights regarding your information, contact us at the
              address below.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this policy from time to time. The &ldquo;Last
              Updated&rdquo; date at the top of this page reflects the most
              recent revision.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Joaquin De Rojas Consulting LLC
              <br />
              d/b/a derojas.ai
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:joaquin@derojas.ai"
                className="text-violet-400 underline decoration-violet-400/30 transition-colors hover:text-violet-300"
              >
                joaquin@derojas.ai
              </a>
            </p>
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
