import "@ebay/skin/core";
import "@ebay/skin/marketsans";
import "@ebay/skin/tokens";
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
    if (selectedRegion) {
      getEarthquakes(selectedRegion).then(setEarthquakes);
    }
  }, [selectedRegion]);

  useEffect(() => {
    getContinents().then((continents) => {
      setContinents(continents);
      setSelectedRegion(continents[0].slug);
    });
  }, []);

  return (
    <div className="earthquake-fe">
      <RegionSelector
        regions={continents}
        onChange={setSelectedRegion}
        value={selectedRegion}
      />
      <EarthquakeList earthquakes={earthquakes} />
    </div>
  );
}

export default App;
