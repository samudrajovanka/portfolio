import Image from 'next/image';
import Link from 'next/link';
import logoImage from '@public/images/logo.png';
import cn from 'classnames';

export default function NavbarBrand() {
  return (
    <Link href="/">
      <a className={cn('flex items-center justify-center gap-3 text-white')}>
        <div>
          <div className={cn('relative h-10 aspect-square rounded-full overflow-hidden')}>
            <Image src={logoImage} alt="logo brand" layout="fill" placeholder="blur" />
          </div>
        </div>
        <p className={cn('font-fancy text-2xl')}>Jovan</p>
      </a>
    </Link>
  );
}
