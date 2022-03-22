import uid from '@lib/uid';

class SocialMedia {
  constructor({ label, url, icon }) {
    this.id = uid();
    this.label = label;
    this.url = url;
    this.icon = icon;
  }
}

const socialMedia = [
  new SocialMedia({
    url: 'https://github.com/samudrajovanka',
    icon: 'github',
    label: 'Github Profile',
  }),
  new SocialMedia({
    url: 'https://www.linkedin.com/in/jovanka-samudra/',
    icon: 'linkedin',
    label: 'LinkedIn Profile',
  }),
  new SocialMedia({
    url: 'https://dribbble.com/samudrajovanka',
    icon: 'dribbble',
    label: 'Dribbble Profile',
  }),
  new SocialMedia({
    url: 'mailto:jovankasamudra20@gmail.com',
    icon: 'email',
    label: 'Email Account',
  }),
  new SocialMedia({
    url: 'https://www.youtube.com/channel/UCFMhuDBjoV26MkjYKtwourg',
    icon: 'youtube',
    label: 'Youtube Profile',
  }),
];

export default socialMedia;
