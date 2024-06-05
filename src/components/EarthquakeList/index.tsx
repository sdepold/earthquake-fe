import React from "react";
import type { Earthquake } from "../../models/earthquake";

export type EarthquakeListProps = {
  earthquakes: Earthquake[];
};

export function EarthquakeList({ earthquakes }: EarthquakeListProps) {
  return (
    <div>
      <h1>Earthquake List</h1>
      <ul>
        {earthquakes.map((earthquake: Earthquake) => (
          <li key={earthquake.id}>{earthquake.title}</li>
        ))}
      </ul>
    </div>
  );
}
