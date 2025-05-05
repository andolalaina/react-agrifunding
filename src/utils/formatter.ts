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

export const formatDate = (date: Date | string) => {
    console.log(date)
    const dateObject = typeof date === 'string' ? new Date(date) : date;
    return Intl.DateTimeFormat('fr-FR', {
        dateStyle: "medium"
    }).format(dateObject)
}

export const formatStatus = (status: string) => {
    const statusMap: Record<string, string> = {
        "Pending": "En attente",
        "In Progress": "En cours",
        "Completed": "Terminé"
    }
    return statusMap[status] || status
}