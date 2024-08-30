import { shuffle } from "@/utils/shuffle";
import { Link } from "next-view-transitions";
import React from "react";

export default function LinksPlaces({ places, actualPlace }) {
  return (
    <div className="w-full flex flex-wrap p-2">
      {shuffle(places).map(
        (place) =>
          place.code !== actualPlace.code && (
            <Link className="mx-2 my-1 block" key={place.code} href={"/place/" + place.slug}>
              {place.name}
            </Link>
          )
      )}
    </div>
  );
}
