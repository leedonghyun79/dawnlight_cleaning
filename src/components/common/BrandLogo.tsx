import Image from 'next/image';
import { company } from '@/data/company';

interface BrandLogoProps {
  inverse?: boolean;
  // 헤더처럼 크게 보여줄 때는 'lg' (업체명 24px, 아이콘 40px)
  size?: 'base' | 'lg';
}

export default function BrandLogo({ inverse = false, size = 'base' }: BrandLogoProps) {
  const isLarge = size === 'lg';

  return (
    <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap">
      <Image
        src="/images/logo-mark.svg"
        alt=""
        width={36}
        height={36}
        className={`${isLarge ? 'h-10 w-10' : 'h-8 w-8 sm:h-9 sm:w-9'} ${inverse ? 'brightness-0 invert' : ''}`}
      />
      <span
        className={`${isLarge ? 'text-[24px]' : 'text-base sm:text-lg'} font-bold tracking-tight ${
          inverse ? 'text-white' : 'text-navy'
        }`}
      >
        {company.name}
      </span>
    </span>
  );
}
