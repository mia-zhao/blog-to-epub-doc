import Image from 'next/image';
import Link from 'next/link';

export function Steps() {
  const steps = [
    {
      number: '01',
      title: 'Install the Extension',
      description: 'Install the free Chrome extension from the Chrome Web Store.',
      details: ['No account required', 'Works locally in your browser'],
      image: '/images/step1.png',
    },
    {
      number: '02',
      title: 'Select Your Content',
      description:
        'Visit any blog and click the extension icon. Select the articles you want to convert to EPUB format.',
      details: [
        'Single click to select/deselect individual articles',
        'Double click to select/deselect multiple articles at once',
        'All processing happens locally - your selections stay private',
      ],
      image: '/images/step2.png',
    },
    {
      number: '03',
      title: 'Configure & Generate',
      description: 'Review your selection and customize the EPUB settings.',
      details: [
        'All content processed in your browser',
        'No data leaves your device',
        'Instant generation',
      ],
      image: '/images/step3.png',
    },
    {
      number: '04',
      title: 'Download Your EPUB',
      description:
        'Click the download button to save your perfectly formatted EPUB file. Ready to read on any e-reader, tablet, or phone.',
      details: ['Clean formatting', 'Preserved images and links'],
      image: '/images/step4.png',
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Follow these simple steps to get started:
          </p>
        </div>

        <div className="mt-20 space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300">{step.description}</p>

                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>

                {index === 0 && (
                  <div className="pt-4">
                    <Link
                      href="https://chromewebstore.google.com/detail/ffolllebnagcedlagopfobpaohndjbmb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
                    >
                      Install Extension
                    </Link>
                  </div>
                )}
              </div>

              <div className="flex-1 flex justify-center">
                <div className="relative max-w-[600px] h-auto rounded-xl overflow-hidden">
                  <Image
                    src={step.image}
                    alt={`Step ${step.number} Preview`}
                    width={600}
                    height={600}
                    className="rounded-xl object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="rounded-2xl bg-blue-600 px-8 py-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Convert Your First Blog?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Start converting blogs to EPUB today.
            </p>
            <Link
              href="https://chromewebstore.google.com/detail/ffolllebnagcedlagopfobpaohndjbmb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 hover:bg-gray-50 transition-colors"
            >
              Get Started Now - It&apos;s Free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
