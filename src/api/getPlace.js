import { places } from "@/data/places";

export default async function getPlace(slug) {
    return places.find(place => place.slug === slug)
}