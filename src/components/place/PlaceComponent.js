"use client";
import { useMemo } from "react";
import LinksPlaces from "./LinksPlaces";
import dynamic from "next/dynamic";
import ReactCountryFlag from "react-country-flag";
import MorePlaces from "./MorePlaces";

export default function PlaceComponent({ places, place }) {
  const MapPlace = useMemo(
    () =>
      dynamic(() => import("@/components/place/map/MapPlace"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <section className="text-center pt-6">
      <h1 className="text-4xl">{place.name}</h1>
      <p>
        <span className="me-2">
          <ReactCountryFlag
            countryCode={place.countryCode}
            aria-label={place.country}
            svg
          />
        </span>
        {place.country}
      </p>
      <div className="my-3 h-48 px-4 lg:px-48">
        <MapPlace position={place.position} zoom={14} markers={[]} />
      </div>
      <MorePlaces places={places} actualPlace={place} />
    </section>
  );
}
