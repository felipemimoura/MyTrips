import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { MapProps } from './interface'

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places?.map(({ id, name, slug, location }) => {
        const { latitude, longitude } = location
        return (
          <Marker
            key={`place-${id}`}
            title={name}
            position={[latitude, longitude]}
            eventHandlers={{
              click: () => {
                router.push(`/place/${slug}`)
              }
            }}
          />
        )
      })}
    </MapContainer>
  )
}

export default Map
