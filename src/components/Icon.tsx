import Image from 'next/image';

export function Icon({ className = '' }: { className?: string }) {
  return (
    <div className={`relative h-8 w-8 ${className}`}>
      <Image src="/icon.svg" alt="Blog to EPUB" fill className="dark:invert" />
    </div>
  );
}
