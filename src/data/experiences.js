import uid from '@lib/uid';

class Experience {
  static TYPE = {
    FULL_TIME: 'Full Time',
    PART_TIME: 'Part Time',
    FREELANCE: 'Freelance',
  };

  constructor({ company, startMonth, endMonth, position, type, stacks }) {
    this.id = uid();
    this.company = company;
    this.startMonth = new Date(startMonth);
    this.endMonth = new Date(endMonth);
    this.position = position;
    this.type = type;
    this.stacks = stacks;
  }
}

const experiences = [
  new Experience({
    company: 'Ayo Pulih',
    startMonth: '2021-04',
    endMonth: '2021-05',
    position: 'Backend Developer',
    type: Experience.TYPE.FREELANCE,
    stacks: ['Node JS', 'Express JS', 'MongoDB'],
  }),
];

export default experiences;
