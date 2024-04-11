import Image from 'next/image';

import icon from '../../public/icon.svg';
import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <Image
        className="mr-4"
        src={icon}
        alt="icon"
        width={size}
        height={size}
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
