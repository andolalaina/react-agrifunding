export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
        style: "currency",
        currency: "MGA"
    }).format(amount)
}

export const formatCompact = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
        notation: "compact"
    }).format(amount)
}

export const formatDate = (date: Date) => {
    return Intl.DateTimeFormat('fr-FR', {
        dateStyle: "medium"
    }).format(date)
}

export const formatStatus = (status: string) => {
    const statusMap: Record<string, string> = {
        "Pending": "En attente",
        "In Progress": "En cours",
        "Completed": "Terminé"
    }
    return statusMap[status] || status
}