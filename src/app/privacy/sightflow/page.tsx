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
          Effective March 1, 2026 &middot; Last updated March 7, 2026
        </p>

        <div className="space-y-10 text-sm leading-relaxed">
          <p>
            SightFlow is a product of Joaquin De Rojas Consulting LLC, d/b/a
            derojas.ai (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;). This privacy policy describes how the SightFlow
            Chrome extension (&ldquo;the Extension&rdquo;) collects, uses,
            stores, and shares user data.
          </p>

          <Section title="What SightFlow Does">
            <p>
              SightFlow is an AI-powered clinical documentation assistant that
              works inside the Nextech electronic medical record (EMR) system. It
              listens to provider dictation during patient encounters and
              generates structured clinical documentation.
            </p>
          </Section>

          <Section title="User Data We Collect">
            <p className="mb-3">
              The Extension collects and processes the following categories of
              user data:
            </p>

            <h3 className="mb-2 mt-4 text-sm font-semibold text-gray-200">
              1. Data collected during use (transient &mdash; not stored)
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">Voice audio</strong> &mdash;
                recorded through the browser microphone during active dictation.
                Audio is buffered locally in the browser, transmitted to our
                backend for AI processing, and immediately discarded after the
                response is returned. No audio is saved.
              </li>
              <li>
                <strong className="text-white">Clinical text</strong> &mdash;
                text visible in the open Nextech chart (e.g., patient history,
                exam findings, diagnoses). Read from the page DOM during
                processing, transmitted to our backend, and not stored.
              </li>
              <li>
                <strong className="text-white">Uploaded files</strong> &mdash;
                images or documents (JPG, PNG, PDF) that the user voluntarily
                selects from their device for AI interpretation. Files are read
                into memory, transmitted over HTTPS, processed, and immediately
                discarded. They are not saved on our servers or in browser
                storage.
              </li>
            </ul>

            <h3 className="mb-2 mt-4 text-sm font-semibold text-gray-200">
              2. Configuration data (stored locally)
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">Organization ID and API key</strong>{" "}
                &mdash; stored in Chrome&apos;s local storage (
                <code className="text-xs text-violet-300">chrome.storage.local</code>
                ) to authenticate requests to our backend. These are
                organization-level identifiers, not personal user credentials.
              </li>
              <li>
                <strong className="text-white">User preferences</strong>{" "}
                &mdash; settings configured through the Extension&apos;s options
                page are stored in{" "}
                <code className="text-xs text-violet-300">chrome.storage.local</code>.
                No personal information is included in these settings.
              </li>
            </ul>

            <h3 className="mb-2 mt-4 text-sm font-semibold text-gray-200">
              3. Operational metadata (logged server-side)
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">
                  Request metadata
                </strong>{" "}
                &mdash; when the Extension sends a request to our backend, we
                log operational metadata including: timestamp, organization ID,
                and AI token usage counts. These logs contain{" "}
                <strong className="text-white">
                  no patient data, no audio, no clinical text, and no
                  personally identifiable information
                </strong>
                .
              </li>
            </ul>
          </Section>

          <Section title="Data We Do Not Collect">
            <p className="mb-3">
              We do not collect any of the following:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Patient names, dates of birth, or medical record numbers</li>
              <li>Insurance, billing, or financial information</li>
              <li>Personal user account credentials or passwords</li>
              <li>Device identifiers, browser fingerprints, or IP addresses</li>
              <li>Browsing history or activity outside of Nextech</li>
              <li>Location or geolocation data</li>
              <li>Cookies or tracking technologies of any kind</li>
            </ul>
          </Section>

          <Section title="How We Use Your Data">
            <p className="mb-3">
              All collected data is used solely for the following purposes:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">Voice audio, clinical text, and uploaded files</strong>{" "}
                are used exclusively to generate structured clinical
                documentation for the current encounter. They are not used for
                any other purpose, including advertising, analytics, or
                profiling.
              </li>
              <li>
                <strong className="text-white">Configuration data</strong> is
                used to authenticate your requests and apply your preferences.
              </li>
              <li>
                <strong className="text-white">Operational metadata</strong> is
                used for usage metering, error diagnosis, and audit compliance.
              </li>
            </ul>
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
                The AI response is streamed back to the Extension and used to
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
                Structured clinical data is streamed back to the Extension for
                chart entry
              </li>
              <li>
                The file data is not persisted on our servers or in browser
                storage &mdash; it exists only in memory during processing
              </li>
            </ol>
          </Section>

          <Section title="Data Storage">
            <h3 className="mb-2 text-sm font-semibold text-gray-200">
              What we store
            </h3>
            <ul className="mb-4 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">Locally (in your browser)</strong>
                : Organization ID, API key, and user preferences are stored in{" "}
                <code className="text-xs text-violet-300">chrome.storage.local</code>.
                This data never leaves your device except as part of
                authenticated API requests to our backend.
              </li>
              <li>
                <strong className="text-white">On our servers</strong>:
                Operational metadata only (timestamps, organization ID, token
                counts). These logs contain no patient data or personally
                identifiable information.
              </li>
            </ul>

            <h3 className="mb-2 text-sm font-semibold text-gray-200">
              What we do not store
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                No audio recordings are saved or persisted after processing
              </li>
              <li>
                No patient health information (PHI) is written to browser
                storage or our servers
              </li>
              <li>
                No clinical text, uploaded files, or AI-generated content is
                retained on our servers
              </li>
              <li>
                No patient-identifying information is included in any logs
              </li>
            </ul>
          </Section>

          <Section title="Data Sharing">
            <p className="mb-3">
              We share user data only with the following third-party service,
              solely for the purpose of AI processing:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">
                  Google Cloud Platform (Vertex AI, Cloud Functions, Cloud Run)
                </strong>{" "}
                &mdash; HIPAA-compliant, covered under a signed Business
                Associate Agreement (BAA). Voice audio, clinical text, and
                uploaded files are transmitted to Vertex AI for processing and
                are not retained by Google beyond the immediate API call.
                Google&apos;s HIPAA compliance information is available at{" "}
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
              <strong className="text-white">
                We do not sell, rent, trade, or transfer user data to any other
                third party.
              </strong>{" "}
              We do not use user data for advertising, analytics, or any purpose
              unrelated to the Extension&apos;s core functionality.
            </p>
          </Section>

          <Section title="Browser Permissions">
            <p className="mb-3">
              The Extension requests the following Chrome permissions, each used
              for a specific purpose:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">audioCapture</strong> &mdash;
                access the browser microphone for voice dictation
              </li>
              <li>
                <strong className="text-white">storage</strong> &mdash; save
                configuration (organization ID, API key, preferences) locally in
                the browser
              </li>
              <li>
                <strong className="text-white">activeTab</strong> &mdash;
                interact with the current Nextech tab to read chart data and
                populate documentation
              </li>
              <li>
                <strong className="text-white">sidePanel</strong> &mdash;
                display the SightFlow assistant in Chrome&apos;s side panel
              </li>
              <li>
                <strong className="text-white">tabs</strong> &mdash; coordinate
                between Nextech chart and summary tabs for image selection
              </li>
              <li>
                <strong className="text-white">scripting</strong> &mdash; inject
                content scripts into Nextech pages to automate chart entry
              </li>
              <li>
                <strong className="text-white">Host permissions</strong> &mdash;
                limited to Nextech EMR domains (
                <code className="text-xs text-violet-300">app1.intellechart.net</code>
                ) and our Cloud Function endpoint. No other websites are
                accessed.
              </li>
            </ul>
          </Section>

          <Section title="Cookies and Tracking">
            <p>
              The Extension does not use cookies, web beacons, pixels, or any
              other tracking technologies. We do not track users across websites
              or build user profiles.
            </p>
          </Section>

          <Section title="Data Security">
            <p className="mb-3">
              We implement the following measures to protect user data:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                All data in transit is encrypted using TLS 1.2 or higher
              </li>
              <li>
                All AI processing is routed through BAA-covered Google Cloud
                infrastructure
              </li>
              <li>
                API keys are validated server-side on every request
              </li>
              <li>
                No persistent storage of PHI in the Extension or on our servers
              </li>
              <li>
                Operational audit logging (without PHI) for accountability
              </li>
              <li>
                Tightly scoped browser permissions (only Nextech domains and our
                Cloud Function endpoint)
              </li>
              <li>
                Chrome Manifest V3 security model (strict Content Security
                Policy, no remote code execution)
              </li>
            </ul>
          </Section>

          <Section title="Data Retention">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">Patient/clinical data</strong>:
                Not retained. Discarded immediately after processing.
              </li>
              <li>
                <strong className="text-white">Audio recordings</strong>: Not
                retained. Cleared from browser memory after each request.
              </li>
              <li>
                <strong className="text-white">Configuration data</strong>:
                Stored locally in your browser until you uninstall the Extension
                or clear it manually.
              </li>
              <li>
                <strong className="text-white">Operational logs</strong>:
                Retained in Google Cloud Logging per our retention policy (no
                PHI) for audit and compliance purposes.
              </li>
            </ul>
          </Section>

          <Section title="Your Rights">
            <p className="mb-3">
              You have the following rights regarding your data:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">Access</strong> &mdash; you may
                request details about what data we process and how
              </li>
              <li>
                <strong className="text-white">Deletion</strong> &mdash; you
                may request deletion of any data associated with your
                organization. Locally stored configuration can be cleared by
                uninstalling the Extension or using Chrome&apos;s &ldquo;Clear
                storage&rdquo; option for the Extension.
              </li>
              <li>
                <strong className="text-white">Opt-out</strong> &mdash; you may
                stop using the Extension at any time by disabling or
                uninstalling it. No data is collected when the Extension is not
                actively in use.
              </li>
              <li>
                <strong className="text-white">Portability</strong> &mdash;
                since we do not retain patient data, there is no stored data to
                export. We can provide operational log data associated with your
                organization upon request.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at the address below.
              We will respond to all requests within 30 days.
            </p>
          </Section>

          <Section title="Children&rsquo;s Privacy">
            <p>
              SightFlow is designed for use by licensed healthcare professionals
              in clinical settings. It is not intended for use by children under
              13, and we do not knowingly collect data from children.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this policy from time to time. The &ldquo;Last
              Updated&rdquo; date at the top of this page reflects the most
              recent revision. If we make material changes, we will notify users
              through the Extension or by email.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Joaquin De Rojas Consulting LLC
              <br />
              d/b/a derojas.ai
              <br />
              3319 Founders Club Dr, Sarasota, FL 34240
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
