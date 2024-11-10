export interface ProjectListItemDTO {
    id: string
    title: string
    description: string
    rating: number
    owner: OwnerDetailDTO
    submissionDate: Date
    targetDate: Date
    fundActual : number
    fundTarget : number
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