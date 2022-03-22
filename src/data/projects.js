import uid from '@lib/uid';

class Project {
  constructor({ name, url, stacks }) {
    this.id = uid();
    this.name = name;
    this.url = url;
    this.stacks = stacks;
  }
}

const projects = [
  new Project({
    name: 'Movie List',
    url: 'https://movie-list-next.vercel.app/',
    stacks: ['Next JS', 'Tailwind'],
  }),
  new Project({
    name: 'Statistic Corona',
    url: 'https://statistic-corona.herokuapp.com/',
    stacks: ['HTML', 'CSS', 'Vanila JS'],
  }),
  new Project({
    name: 'Bookshelf',
    url: 'https://book-shelf-site.netlify.app/',
    stacks: ['HTML', 'CSS', 'Vanila JS'],
  }),
  new Project({
    name: 'Football Geeks',
    url: 'https://football-geeks.web.app/',
    stacks: ['HTML', 'Materialize', 'Vanila JS'],
  }),
  new Project({
    name: 'Yu-Gi-Oh Card',
    url: 'https://yu-gi-oh-card.netlify.app/',
    stacks: ['Vue JS', 'SCSS'],
  }),
];

export default projects;
