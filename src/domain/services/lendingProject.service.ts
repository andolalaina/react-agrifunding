import { LenderDashboardListItemDTO } from "../dto/dashboard.dto";

const mockData: LenderDashboardListItemDTO[] = [
    {
        id: '1',
        title: 'Project Alpha',
        description: 'Funding for renewable energy project',
        creationDate: new Date('2024-01-15'),
        targetDate: new Date('2024-12-31'),
        actualAmount: 50000,
        targetAmount: 100000,
        status: 'In Progress'
    },
    {
        id: '2',
        title: 'Project Beta',
        description: 'Expansion of tech startup',
        creationDate: new Date('2024-02-20'),
        targetDate: new Date('2024-11-30'),
        actualAmount: 75000,
        targetAmount: 150000,
        status: 'Completed'
    },
    {
        id: '3',
        title: 'Project Gamma',
        description: 'Development of new software',
        creationDate: new Date('2024-03-10'),
        targetDate: new Date('2024-10-15'),
        actualAmount: 30000,
        targetAmount: 80000,
        status: 'Pending'
    },
    {
        id: '4',
        title: 'Project Delta',
        description: 'Construction of community center',
        creationDate: new Date('2024-04-05'),
        targetDate: new Date('2024-09-25'),
        actualAmount: 60000,
        targetAmount: 120000,
        status: 'In Progress'
    },
    {
        id: '5',
        title: 'Project Epsilon',
        description: 'Research on sustainable agriculture',
        creationDate: new Date('2024-05-18'),
        targetDate: new Date('2024-12-20'),
        actualAmount: 45000,
        targetAmount: 90000,
        status: 'Completed'
    }
];
export const getLendingProjects = (page : number = 0, size : number = 2) => {
    const startIndex = (page) * size;
    const endIndex = ((page) * size) + size;
    return mockData.slice(startIndex, endIndex)
}

export const countLendingProjects = () => {
    return mockData.length
}