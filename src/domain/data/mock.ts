import { ProjectDetailDTO } from "../dto/project.dto";

export const projects: ProjectDetailDTO[] = [
  {
    id: '1',
    title: 'Project Alpha',
    rating: 2.6,
    owner: {
      name: "Andry Rakotoarisoa",
      job: "Environmental Engineer"
    },
    description: 'This project focuses on harnessing renewable energy sources to promote sustainable development and reduce carbon emissions in rural areas.',
    submissionDate: new Date('2024-01-15'),
    targetDate: new Date('2024-12-31'),
    fundActual: 90000,
    fundTarget: 100000,
    status: 'In Progress',
    location: {
      lat: -20.1,
      lng: 46.5
    }
  },
  {
    id: '2',
    title: 'Project Beta',
    rating: 2.6,
    owner: {
      name: "Jean Randrianasolo",
      job: "Tech Entrepreneur"
    },
    description: 'This initiative aims to expand a promising tech startup, fostering innovation and creating job opportunities in the tech industry.',
    submissionDate: new Date('2024-02-20'),
    targetDate: new Date('2024-11-30'),
    fundActual: 75000,
    fundTarget: 150000,
    status: 'Completed',
    location: {
      lat: -19.9,
      lng: 46.2
    }
  },
  {
    id: '3',
    title: 'Project Gamma',
    rating: 2.6,
    owner: {
      name: "Hery Rabenarivo",
      job: "Software Developer"
    },
    description: 'This project involves the design and development of innovative software solutions tailored for local businesses to enhance productivity.',
    submissionDate: new Date('2024-03-10'),
    targetDate: new Date('2024-10-15'),
    fundActual: 30000,
    fundTarget: 80000,
    status: 'Pending',
    location: {
      lat: -20.3,
      lng: 45.9
    }
  },
  {
    id: '4',
    title: 'Project Delta',
    rating: 2.6,
    owner: {
      name: "Voahirana Rakotomalala",
      job: "Civil Engineer"
    },
    description: 'A community-centered project aimed at constructing a multi-purpose center to host social, educational, and recreational activities.',
    submissionDate: new Date('2024-04-05'),
    targetDate: new Date('2024-09-25'),
    fundActual: 60000,
    fundTarget: 120000,
    status: 'In Progress',
    location: {
      lat: -20.5,
      lng: 46.3
    }
  },
  {
    id: '5',
    title: 'Project Epsilon',
    rating: 2.6,
    owner: {
      name: "Feno Andriamihaja",
      job: "Agricultural Scientist"
    },
    description: 'A research initiative focused on developing sustainable agricultural techniques to improve food security and reduce environmental impact.',
    submissionDate: new Date('2024-05-18'),
    targetDate: new Date('2024-12-20'),
    fundActual: 45000,
    fundTarget: 90000,
    status: 'Completed',
    location: {
      lat: -19.8,
      lng: 46.7
    }
  }
];