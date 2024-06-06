import type { Earthquake } from "../../models/earthquake";
import "./style.css";

export type EarthquakeListItemProps = {
  earthquake: Earthquake;
};

export function EarthquakeListItem({ earthquake }: EarthquakeListItemProps) {
  return (
    <div className="earthquake-list-item">
      <div>
        <h2>{earthquake.title}</h2>
        <p>{earthquake.place}</p>
      </div>
      <div className="magnitude">
        <span>{Math.round(earthquake.magnitude)}</span>
      </div>
    </div>
  );
}
