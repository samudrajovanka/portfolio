import photoMeSquare from '@public/images/me_square.png';
import Image from 'next/image';
import cn from 'classnames';
import Heading from '@components/Heading';
import SocialMedia from '@components/SocialMedia';
import Cross from '@components/Icons/Cross.svg';
import Circle from '@components/Icons/Circle.svg';
import Triangle from '@components/Icons/Triangle.svg';
import Square from '@components/Icons/Square.svg';
import { useEffect, useRef } from 'react';

export default function Home() {
  const overlayIconRef = useRef();

  useEffect(() => {
    // console.log(overlayIconRef.current.childNodes);
    const parallax = (e) => {
      overlayIconRef.current.childNodes.forEach((element) => {
        const speed = element.getAttribute('data-speed');

        const x = -(window.innerWidth - e.pageX * speed) / 100;
        const y = -(window.innerHeight - e.pageY * speed) / 100;

        // eslint-disable-next-line no-param-reassign
        element.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', parallax);

    return () => {
      document.removeEventListener('mousemove', parallax);
    };
  });

  return (
    <>
      <div
        className={cn(
          'grid grid-cols-1 place-items-center content-center lg:grid-cols-12 lg:flex-row-reverse gap-5 lg:gap-10'
        )}
      >
        <div
          className={cn(
            'relative w-[200px] lg:w-8/12 lg:col-span-5 lg:order-last aspect-square bg-white rounded-full overflow-hidden flex justify-center'
          )}
        >
          <Image src={photoMeSquare} layout="fill" alt="Profile picture" objectFit="cover" placeholder="blur" />
        </div>

        <div className={cn('sm:w-10/12 md:w-full lg:col-span-7 flex flex-col gap-10 text-center lg:text-left')}>
          <div>
            <Heading>Hi! I am</Heading>
            <Heading className={cn('text-blue')}>Jovanka Samudra</Heading>
          </div>

          <p>
            I am an undergraduate Informatics student who is interested in Web Development, UI/UX Design, and Backend
            Development
          </p>

          <SocialMedia />
        </div>
      </div>

      <div className={cn('-z-10')}>
        <div ref={overlayIconRef}>
          <Circle
            className={cn(
              'text-blue text-[40px] fixed bottom-[40%] lg:top-auto lg:bottom-20 left-40 lg:left-[40%] opacity-0 md:opacity-100 transition-opacity duration-300 delay-100'
            )}
            data-speed="-4"
          />
          <Cross
            className={cn(
              'text-green text-[40px] fixed top-1/3 lg:top-[38%] left-10 lg:left-auto lg:right-[45%] opacity-0 md:opacity-100 transition-opacity duration-300 delay-200'
            )}
            data-speed="3"
          />
          <Square
            className={cn(
              'text-pink text-[28px] fixed top-1/4 lg:top-20 left-1/4 opacity-0 md:opacity-100 transition-opacity duration-300'
            )}
            data-speed="6"
          />
          <Cross
            className={cn(
              'text-pink text-[24px] fixed top-1/4 lg:top-[20%] right-1/4 opacity-0 md:opacity-100 transition-opacity duration-300 delay-75'
            )}
            data-speed="-4"
          />
          <Square
            className={cn(
              'text-yellow text-[32px] fixed top-1/3 lg:top-[30%] right-[20%] lg:right-[5%] opacity-0 md:opacity-100 transition-opacity duration-300 delay-100'
            )}
            data-speed="5"
          />
          <Triangle
            className={cn(
              'text-green text-[32px] fixed bottom-[45%] lg:bottom-[34%] right-[12%] lg:right-[6%] opacity-0 md:opacity-100 transition-opacity duration-300 delay-300'
            )}
            data-speed="-4"
          />
        </div>
      </div>
    </>
  );
}
