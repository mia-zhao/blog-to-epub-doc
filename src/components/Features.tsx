export function Features() {
  const features = [
    {
      icon: '🔒',
      title: '100% Private',
      description: 'All processing occurs in your browser. No data is sent to servers.',
      color: 'green',
    },
    {
      icon: '🌐',
      title: 'Multiple Sources',
      description: 'Convert content from multiple blogs, websites, and articles into EPUB files.',
      color: 'blue',
    },
    {
      icon: '📚',
      title: 'Perfect Format',
      description: 'Clean, readable EPUBs compatible with all e-readers.',
      color: 'purple',
    },
    {
      icon: '🎯',
      title: 'Smart Selection',
      description: 'Use our bulk selection tools to quickly select multiple articles.',
      color: 'pink',
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Why Choose Blog to EPUB?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            The EPUB converter that processes everything locally in your browser. No servers, no
            data collection, no privacy concerns.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-slate-800 p-8 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${getColorClasses(
                  feature.color
                )} text-xl`}
              >
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 group-hover:ring-gray-900/20 dark:group-hover:ring-white/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
