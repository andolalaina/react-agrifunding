import { ProjectDetailDTO } from "../dto/project.dto";

function generateRandomDescription() : string {
  return `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
}

export const projects: ProjectDetailDTO[] = [
  {
    id: '1',
    title: 'Project Alpha',
    rating: 2.6,
    owner: {
      name: "Andry Rakotoarisoa",
      job: "Environmental Engineer"
    },
    summary: 'This project focuses on harnessing renewable energy sources to promote sustainable development and reduce carbon emissions in rural areas.',
    description: generateRandomDescription(),
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
    summary: 'This initiative aims to expand a promising tech startup, fostering innovation and creating job opportunities in the tech industry.',
    description: generateRandomDescription(),
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
    summary: 'This project involves the design and development of innovative software solutions tailored for local businesses to enhance productivity.',
    description: generateRandomDescription(),
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
    summary: 'A community-centered project aimed at constructing a multi-purpose center to host social, educational, and recreational activities.',
    description: generateRandomDescription(),
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
    summary: 'A research initiative focused on developing sustainable agricultural techniques to improve food security and reduce environmental impact.',
    description: generateRandomDescription(),
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

