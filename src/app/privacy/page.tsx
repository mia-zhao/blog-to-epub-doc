import Link from 'next/link';
import { Icon } from '@/components/Icon';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center overflow-hidden">
                <Icon className="p-1.5" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Blog to EPUB</span>
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Your privacy matters to us. Here&apos;s how we protect it.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400">🔒</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                  Complete Privacy Guarantee
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  The Blog to EPUB extension processes everything locally in your browser. No data
                  is ever sent to external servers, ensuring complete privacy and security.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Information Collection and Usage
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The Blog to EPUB Chrome extension does not collect any personally identifiable
              information (PII) from its users. When you use the extension on a web page, it may
              temporarily save the links you choose within your browser session. These links are
              solely used to generate EPUB files locally on your device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Data Storage and Security
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The extension does not store any information regarding the links selected by the user.
              All processing of web content and EPUB generation is conducted entirely within your
              browser - no data is sent to external servers. The extension processes content locally
              using your browser&apos;s capabilities, ensuring complete privacy and security of your
              data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Information Sharing
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The extension does not share any user information with third parties. Since all
              processing occurs locally in your browser, no data is transmitted to external servers.
              Your selected content and generated EPUB files remain completely private on your
              device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              User Control and Preferences
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You have full control over which web pages you convert to EPUB format using the
              extension. You can close the extension or opt not to convert any pages at any time. We
              do not collect or retain any user preferences or settings on external servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Changes to this Privacy Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may update this Privacy Policy to ensure compliance with regulations or align with
              new features of the extension. Any changes will be reflected here.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contacting Us</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please reach out to us via our{' '}
              <Link
                href="https://forms.gle/afLBU9DkpkEPf1ZYA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                contact form
              </Link>
              .
            </p>
          </section>

          <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 mt-12">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              This Privacy Policy was last updated on{' '}
              <span className="font-semibold">August 12, 2025</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
