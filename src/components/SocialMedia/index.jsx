import Github from '@components/Icons/Github.svg';
import Dribbble from '@components/Icons/Dribbble.svg';
import Linkedin from '@components/Icons/Linkedin.svg';
import Email from '@components/Icons/Email.svg';
import Link from 'next/link';
import cn from 'classnames';
import { motion } from 'framer-motion';

export default function SocialMedia() {
  const socialMedias = [
    {
      link: 'https://github.com/samudrajovanka',
      icon: Github,
      label: 'Github link',
    },
    {
      link: 'https://dribbble.com/samudrajovanka',
      icon: Dribbble,
      label: 'Dribbble link',
    },
    {
      link: 'https://www.linkedin.com/in/jovanka-samudra/',
      icon: Linkedin,
      label: 'Linkedin link',
    },
    {
      link: 'mailto:jovankasamudra20@gmail.com',
      icon: Email,
      label: 'Email',
    },
  ];

  return (
    <ul>
      {socialMedias.map((socialMedia, index) => (
        <motion.li
          key={index.toString()}
          className={cn('inline-block', index !== socialMedias.length - 1 ? 'mr-5' : null)}
          whileHover={{ scale: 1.2, y: [10, -10, 5, -3, 0] }}
        >
          <Link href={socialMedia.link} passHref>
            <a
              className={cn('text-white text-3xl lg:text-4xl')}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={socialMedia.label}
            >
              <socialMedia.icon />
            </a>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
