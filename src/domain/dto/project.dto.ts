export interface ProjectListItemDTO {
    id: string
    title: string
    description: string
    summary: string
    rating: number
    owner_name: string
    owner_job: string
    submission_date: Date
    targetDate: Date
    fund_actual : number
    fund_target : number
    status: string
}

interface GeoLocation {
    lat: number
    lng: number
}

interface OwnerDetailDTO {
    name: string
    job: string
}

export interface ProjectDetailDTO extends ProjectListItemDTO {
    location : GeoLocation
}

export interface ProjectCreateDTO {
    id: string
    title: string
    description: string
    summary: string
    rating: number
    submission_date: Date
    targetDate: Date
    fundActual : number
    fundTarget : number
    status: string
    location : GeoLocation
}