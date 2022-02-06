import cn from 'classnames';
import PropTypes from 'prop-types';

import LinkedinIcon from '@icons/ic_linkedin.svg';
import GithubIcon from '@icons/ic_github.svg';
import EmailIcon from '@icons/ic_email.svg';
import DribbbleIcon from '@icons/ic_dribbble.svg';
import YoutubeIcon from '@icons/ic_youtube.svg';
import Link from '@components/elements/Link';

const icons = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  email: EmailIcon,
  dribbble: DribbbleIcon,
  youtube: YoutubeIcon,
};

function Logo({ Icon, id }) {
  return <Icon className="heading-4 icon" id={id} />;
}

export default function SocialMedia({ data, className }) {
  return (
    <div className={cn('social-media', className)}>
      {data.map(({ url, icon, label }) => (
        <Link href={url} isExternal aria-label={label} className="social-media__item" key={label}>
          <Logo Icon={icons[icon]} id={`icon-${icon}`} />
        </Link>
      ))}
    </div>
  );
}

SocialMedia.defaultProps = {
  className: '',
};

SocialMedia.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};
