import axiosInstance from "./axios.service";

export const getPrecipitationDroughtIndexData = async (lat: number, lng: number) => {
    const geometry = {
        type: "Point",
        coordinates: [lng, lat]
    }
    const requestParams = {
        analysis_zone: {
            type: "Feature",
            geometry: geometry,
            properties: {}
        }
    }
    const response = await axiosInstance.post("layers/spei", requestParams)
    return {
        id: "precipitation_drought",
        url: response.data.layer_url,
        name: "Risque de sécheresse",
        colors: response.data.viz_params.palette,
        labels: ["Faible", "Moyen", "Élevé"],
        isActive: true
    }
}

export const getAccessibilityIndexData = async (lat: number, lng: number) => {
    const geometry = {
        type: "Point",
        coordinates: [lng, lat]
    }
    const requestParams = {
        analysis_zone: {
            type: "Feature",
            geometry: geometry,
            properties: {}
        }
    }
    const response = await axiosInstance.post("layers/accessibility", requestParams)
    return {
        id: "accessibility",
        url: response.data.layer_url,
        name: "Accessibilité routière",
        colors: response.data.viz_params.palette,
        labels: ["Faible", "Moyenne", "Normale"],
        isActive: true
    }
}