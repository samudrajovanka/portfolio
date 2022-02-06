import Link from '@components/elements/Link';
import Image from 'next/image';
import shimmer from '@lib/shimmer';

export default function CardDesign({ title, url, imgUrl }) {
  return (
    <Link href={url} isExternal className="card card-design">
      <div className="img-wrapper w-full aspect-[4/3]">
        <Image
          src={imgUrl}
          layout="fill"
          alt={title}
          objectFit="cover"
          placeholder="blur"
          blurDataURL={shimmer(400, 300)}
        />
      </div>
      <div className="card-design__title center-flex">
        <h6>{title}</h6>
      </div>
    </Link>
  );
}
