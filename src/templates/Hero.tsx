import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://www.buymeacoffee.com/epsilone" target="_blank">
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              style={{ height: '60px', width: '217px' }}
            />
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Convert blog posts to EPUB\n'}
            in seconds
          </>
        }
        description=""
        button={
          <Link
            target="_blank"
            href="https://chromewebstore.google.com/detail/ffolllebnagcedlagopfobpaohndjbmb"
          >
            <Button xl>Install on Chrome</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
