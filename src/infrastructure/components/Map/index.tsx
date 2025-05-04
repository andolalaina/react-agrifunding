import { useState } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { Legend } from "./legend"
import { CustomLayerControl } from "./layer-control"

/**
 * A reusable Map component that displays a Leaflet map with customizable layers
 * @param {Object} props - Component props
 * @param {number[]} props.center - Map center coordinates [lat, lng]
 * @param {number} props.zoom - Map zoom level
 * @param {Object} props.markerPosition - Position for the marker [lat, lng]
 * @param {string} props.markerPopup - Content for marker popup
 * @param {Object[]} props.customLayers - Array of custom layer objects
 * @param {string} props.height - CSS height for the map container
 */

interface MapProps {
    center?: [number, number]
    zoom?: number
    markerPosition?: [number, number]
    markerPopup?: string
    customLayers?: Array<{
        name: string
        url: string
        colors: string[]
        labels: string[]
        isActive?: boolean
    }>
    geojsonLayer?: any
    height?: string
}

export const Map = ({center, zoom, markerPosition, markerPopup, customLayers, geojsonLayer, height } : MapProps) => {
  const [visibleLayers, setVisibleLayers] = useState<any>(
    customLayers?.reduce((acc, layer) => ({ ...acc, [layer.name]: layer.isActive || false }), {})
  );

  const handleToggleLayer = (name: any) => {
    setVisibleLayers((prev: any) => ({ ...prev, [name]: !prev[name] }))
  }

  return (
    <MapContainer style={{ height }} center={center} zoom={zoom} scrollWheelZoom={true}>
      {customLayers && customLayers.length > 0 && (
        <CustomLayerControl layers={customLayers} toggler={handleToggleLayer} />
      )}
      
      {customLayers?.slice().reverse().filter((layer) => visibleLayers[layer.name]).map((layer, index) => (
        <div key={`layer-${layer.name}-${index}`}>
          <TileLayer url={layer.url} />
          <Legend title={layer.name} colors={layer.colors} labels={layer.labels} />
        </div>
      ))}
      
      {/* Base OSM layer */}
      <TileLayer
        url='https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg'
        minZoom= {0}
        maxZoom= {18}
        // attribution= '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {markerPosition && (
        <Marker position={markerPosition}>
          <Popup>{markerPopup}</Popup>
        </Marker>
      )}

      {geojsonLayer && geojsonLayer.features.map((feature: any) => {
        return (
        <Marker position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}>
            <Popup>{markerPopup}</Popup>
          </Marker>
        )
      })}

    </MapContainer>
  )
}