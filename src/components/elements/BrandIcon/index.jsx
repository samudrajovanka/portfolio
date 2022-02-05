import Image from 'next/image';
import logo from '@public/logo.png';

export default function BrandIcon() {
  return (
    <div className="brand-icon">
      <div className="brand-icon__image">
        <Image layout="fill" alt="Logo" src={logo} placeholder="blur" />
      </div>
      <p className="heading-5 md:heading-4 brand-icon__text">
        Jovan<span>.</span>
      </p>
    </div>
  );
}
