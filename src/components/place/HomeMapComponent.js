"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function HomeMapComponent({ position, zoom, markers }) {
  const MapPlace = useMemo(
    () =>
      dynamic(() => import("@/components/place/map/MapPlace"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return <MapPlace position={position} zoom={zoom} markers={markers} />;
}
