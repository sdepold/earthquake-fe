// Add if you're using floating labels
import { useEffect, useState } from "react";
import "./App.css";
import { EarthquakeList } from "./components/EarthquakeList";
import { RegionSelector } from "./components/RegionSelector";
import type { Continent } from "./models/continent";
import type { Earthquake } from "./models/earthquake";
import { getContinents, getEarthquakes } from "./services/earthquake-service";

function App() {
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
  const [continents, setContinents] = useState<Continent[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  useEffect(() => {
    getEarthquakes(selectedRegion).then(setEarthquakes);
  }, [selectedRegion]);

  useEffect(() => {
    getContinents().then(setContinents);
  }, []);

  return (
    <div className="earthquake-fe">
      <RegionSelector regions={continents} onChange={setSelectedRegion} />
      <EarthquakeList earthquakes={earthquakes} />
    </div>
  );
}

export default App;
