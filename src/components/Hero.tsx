import Link from 'next/link';
import { Icon } from './Icon';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gray-900 dark:bg-white flex items-center justify-center overflow-hidden">
            <Icon className="p-1.5" />
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">Blog to EPUB</span>
        </div>
        <Link
          href="/privacy"
          className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          Privacy Policy
        </Link>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight leading-[1.5] text-gray-900 dark:text-white sm:text-6xl lg:text-7xl animate-fade-in">
            Convert blog posts to EPUB
            <span className="block text-blue-600 dark:text-blue-400">with complete privacy</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-slide-up">
            Transform any blog into EPUB. All processing happens locally in your browser - no data
            sent to servers, ensuring complete privacy.
          </p>

          {/* Feature Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm animate-slide-up">
            <div className="flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>100% Private & Secure</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>No Server Processing</span>
            </div>
            <div className="flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Open Source</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 animate-slide-up">
            <Link
              href="https://chromewebstore.google.com/detail/ffolllebnagcedlagopfobpaohndjbmb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 hover:scale-105"
            >
              <span className="mr-2">🚀</span>
              Install Free Chrome Extension
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
