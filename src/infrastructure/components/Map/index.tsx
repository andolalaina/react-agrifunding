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
    customLayers: Array<{
        name: string
        url: string
        colors: string[]
        labels: string[]
        isActive?: boolean
    }>
    height?: string
}

export const Map = ({center, zoom, markerPosition, markerPopup, customLayers, height } : MapProps) => {
  const [visibleLayers, setVisibleLayers] = useState<any>(
    customLayers.reduce((acc, layer) => ({ ...acc, [layer.name]: layer.isActive || false }), {})
  );

  const handleToggleLayer = (name: any) => {
    setVisibleLayers((prev: any) => ({ ...prev, [name]: !prev[name] }))
  }

  return (
    <MapContainer style={{ height }} center={center} zoom={zoom} scrollWheelZoom={true}>
      {customLayers.length > 0 && (
        <CustomLayerControl layers={customLayers} toggler={handleToggleLayer} />
      )}
      
      {customLayers.slice().reverse().filter((layer) => visibleLayers[layer.name]).map((layer, index) => (
        <div key={`layer-${layer.name}-${index}`}>
          <TileLayer url={layer.url} />
          <Legend title={layer.name} colors={layer.colors} labels={layer.labels} />
        </div>
      ))}
      
      {/* Base OSM layer */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {markerPosition && (
        <Marker position={markerPosition}>
          <Popup>{markerPopup}</Popup>
        </Marker>
      )}
    </MapContainer>
  )
}