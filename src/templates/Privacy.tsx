import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

import { Background } from '@/background/Background';
import { Meta } from '@/layout/Meta';
import { Section } from '@/layout/Section';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';
import { AppConfig } from '@/utils/AppConfig';

import { Logo } from './Logo';

type HeaderProps = {
  children: ReactNode;
};

const Header = (props: HeaderProps) => (
  <h2 className="text-semibold mb-4 mt-6 text-2xl">{props.children}</h2>
);

type MyLinkProps = {
  text: string;
  link: string;
};

const MyLink = (props: MyLinkProps) => {
  const router = useRouter();
  const { text, link } = props;

  return (
    <Link
      href={link}
      className="text-semibold underline"
      onClick={() => {
        router.push(link);
      }}
    >
      <span>{text}</span>
    </Link>
  );
};

export const Privacy = () => {
  const router = useRouter();
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />

      <Background color="bg-gray-100">
        <Section yPadding="py-6">
          <NavbarTwoColumns logo={<Logo xl />}>
            <li>
              <Link
                href="/"
                onClick={() => {
                  router.push('/');
                }}
              >
                <span>Home</span>
              </Link>
            </li>
          </NavbarTwoColumns>
        </Section>
        <Section yPadding="py-8">
          <h1 className="text-semibold text-center text-4xl">Privacy Policy</h1>
        </Section>
      </Background>
      <Section yPadding="py-10">
        <p>
          The privacy matters to us. This Privacy Policy outlines what data we
          collect, why we collect it, how we handle it, and your rights when
          using the <MyLink text="Blog to EPUB" link="/" /> Chrome Extension. We
          will not share or sell your data to any third party.
        </p>
        <Header>Information Collection and Usage</Header>
        <p>
          The <MyLink text="Blog to EPUB" link="/" /> Chrome extension does not
          collect any personally identifiable information (PII) from its users.
          When you use the extension on a web page, it may temporarily save the
          links you choose within your browser session. These links are solely
          used to generate EPUB files.
        </p>
        <Header>Data Storage and Security</Header>
        <p>
          The extension does not store any information regarding the links
          selected by the user. All processing of URLs is conducted within your
          browser session. URLs chosen by users are sent to our server solely
          for the purpose of generation of EPUB files. No data is stored on any
          external servers operated by us. The data is encrypted in transit
          using SSL/TLS protocols.
        </p>
        <Header>Information Sharing</Header>
        <p>
          The extension does not share any user information with third parties.
          The links you choose are only transmitted to the extension&apos;s
          server to create the EPUB files. No user-specific information is
          included in this transmission.
        </p>
        <Header>User Control and Preferences</Header>
        <p>
          You have full control over which web pages you convert to EPUB format
          using the extension. You can close the extension or opt not to convert
          any pages at any time. We do not collect or retain any user
          preferences or settings.
        </p>
        <Header>Changes to this Privacy Policy</Header>
        <p>
          We may update this Privacy Policy to ensure compliance with
          regulations or align with new features of the extension. Any changes
          will be reflected here.
        </p>
        <Header>Contacting Us</Header>
        <p>
          If you have any questions about this Privacy Policy, please reach out
          to us via our contact form{' '}
          <MyLink text="here" link="https://forms.gle/afLBU9DkpkEPf1ZYA" />.
        </p>
        <p className="mt-4">
          This Privacy Policy was last updated on{' '}
          <span className="italic">April 18, 2024</span>.
        </p>
      </Section>
    </div>
  );
};
