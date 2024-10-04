export interface LenderDashboardListItemDTO {
    id: string
    title: string
    description: string
    creationDate: Date
    targetDate: Date
    actualAmount : number
    targetAmount : number
    status: string
}