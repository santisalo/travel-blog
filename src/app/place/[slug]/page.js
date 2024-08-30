import getPlace from "@/api/getPlace";
import getPlaces from "@/api/getPlaces";
import PlaceComponent from "@/components/place/PlaceComponent";
export default async function PlacePage({ params }) {
  const place = await getPlace(params.slug);
  const places = await getPlaces();
  return <PlaceComponent places={places} place={place} />;
}
