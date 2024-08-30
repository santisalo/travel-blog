"use client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { Link } from "next-view-transitions";

export default function MapPlace({ position, zoom, markers }) {
  return (
    <MapContainer
      style={{ height: "100%" }}
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        className="map-tiles"
      />
      {markers?.map((marker) => (
        <Marker key={marker.code} position={marker.position}>
          <Popup>
            <p style={{margin: 0, fontWeight: "bold", fontSize: "1.2rem"}}>{marker.name}</p>
            <p style={{margin: 0}}>{marker.country}</p>
            <Link href={"/place/" + marker.slug}>Go to place</Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
