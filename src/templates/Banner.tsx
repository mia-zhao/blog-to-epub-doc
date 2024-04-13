import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title={
        <span>
          With just a few steps, you can take your blog content
          <br /> and transform it into a polished, portable EPUB ebook.
        </span>
      }
      subtitle=""
      button={
        <Link
          target="_blank"
          href="https://chromewebstore.google.com/detail/ffolllebnagcedlagopfobpaohndjbmb"
        >
          <Button>Start Now</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
