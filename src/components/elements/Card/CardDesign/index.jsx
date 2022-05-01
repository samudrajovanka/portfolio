import Link from '@components/elements/Link';
import Image from 'next/image';
import shimmer from '@lib/shimmer';

export default function CardDesign({ title, url, imgUrl, ...props }) {
  return (
    <Link href={url} isExternal {...props}>
      <div className="card card-design">
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
          <h2 className="heading-4">{title}</h2>
        </div>
      </div>
    </Link>
  );
}
