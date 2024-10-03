import { ProjectItem } from "../../components/ProjectItem/project-item"


const projectItems = [
    {
      id: "1",
      title: "Intro to GIS",
      description: "A comprehensive guide to Geographic Information Systems.",
      rating: 4.5,
      owner: "John Doe",
      submissionDate: "2023-05-12",
      fundActual: 120000,
      fundTarget: 800000
    },
    {
      id: "2",
      title: "Advanced React Patterns",
      description: "Exploring advanced design patterns in React.",
      rating: 4.8,
      owner: "Jane Smith",
      submissionDate: "2023-06-20",
      fundActual: 120000,
      fundTarget: 800000
    },
    {
      id: "3",
      title: "Machine Learning Basics",
      description: "An introduction to machine learning concepts and algorithms.",
      rating: 4.2,
      owner: "Alice Johnson",
      submissionDate: "2023-07-01",
      fundActual: 120000,
      fundTarget: 800000
    },
    {
      id: "4",
      title: "Data Science for Beginners",
      description: "A beginner-friendly course on data science and its applications.",
      rating: 4.7,
      owner: "Bob Brown",
      submissionDate: "2023-08-05",
      fundActual: 120000,
      fundTarget: 800000
    },
    {
      id: "5",
      title: "Full Stack Web Development",
      description: "Master full stack development with this all-in-one course.",
      rating: 4.9,
      owner: "Chris White",
      submissionDate: "2023-09-10",
      fundActual: 120000,
      fundTarget: 800000
    },
    {
      id: "6",
      title: "Cloud Computing Fundamentals",
      description: "Learn the basics of cloud computing technologies.",
      rating: 4.3,
      owner: "Emily Davis",
      submissionDate: "2023-10-02",
      fundActual: 120000,
      fundTarget: 800000
    },
    {
      id: "7",
      title: "Python for Data Analysis",
      description: "Learn how to analyze data using Python and its libraries.",
      rating: 4.6,
      owner: "David Green",
      submissionDate: "2023-04-18",
      fundActual: 120000,
      fundTarget: 800000
    },
    {
      id: "8",
      title: "JavaScript Essentials",
      description: "A course covering the essentials of JavaScript programming.",
      rating: 4.1,
      owner: "Sophia Lee",
      submissionDate: "2023-03-22",
      fundActual: 120000,
      fundTarget: 800000
    },
    {
      id: "9",
      title: "Docker and Kubernetes",
      description: "Learn how to manage containerized applications with Docker and Kubernetes.",
      rating: 4.4,
      owner: "Michael Scott",
      submissionDate: "2023-02-15",
      fundActual: 120000,
      fundTarget: 800000
    },
    {
      id: "10",
      title: "GraphQL for Beginners",
      description: "Get started with GraphQL and build your own API.",
      rating: 4.5,
      owner: "Olivia Brown",
      submissionDate: "2023-01-30",
      fundActual: 120000,
      fundTarget: 800000
    }
  ];

export const ProjectListScreen = () => {

    return (
        <>
        <h2>
            Project Lists
        </h2>
        { projectItems.map((item) => <ProjectItem data={item} />) }
        </>
    )
}