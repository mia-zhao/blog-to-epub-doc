import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="With just a few steps, you can take your blog content and transform it into a polished, portable EPUB ebook."
      subtitle="Start Today!"
      button={
        <Link href="/">
          <Button>Start</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
