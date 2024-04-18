import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList?: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => {
  const router = useRouter();

  return (
    <div className="text-center">
      {props.logo}

      <nav>
        <ul className="navbar mt-5 flex flex-row justify-center text-xl font-medium text-gray-800">
          {props.children}
        </ul>
      </nav>

      {props.iconList && (
        <div className="mt-8 flex justify-center">
          <FooterIconList>{props.iconList}</FooterIconList>
        </div>
      )}

      <div className="mt-4">
        <Link href="/privacy" onClick={() => router.push('/privacy')}>
          <span className=" text-gray-600 underline">Privacy Policy</span>
        </Link>
      </div>

      <div className="mt-4 text-sm">
        <FooterCopyright />
      </div>

      <style jsx>
        {`
          .navbar :global(li) {
            @apply mx-4;
          }
        `}
      </style>
    </div>
  );
};

export { CenteredFooter };
