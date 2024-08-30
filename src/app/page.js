import getPlaces from "@/api/getPlaces";
import HomeMapComponent from "@/components/place/HomeMapComponent";
import { findCenter } from "@/utils/geo";

export default async function Home() {
  const places = await getPlaces();
  const position = findCenter(places);
  console.log(position);
  return (
    <main className="text-center py-16">
      <h1 className="text-4xl">Mi Blog de Viajes</h1>
      <div className="my-8 h-96 px-4 lg:px-48">
        <HomeMapComponent position={position} zoom={2} markers={places} />
      </div>
    </main>
  );
}
