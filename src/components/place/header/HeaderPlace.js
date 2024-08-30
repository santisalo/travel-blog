import TrainPlace from "./TrainPlace";
import getPlaces from "@/api/getPlaces";

export default async function HeaderPlace({ actualPlace }) {
  return (
    <div className="h-20">
      <TrainPlace place={actualPlace} />
    </div>
  );
}
