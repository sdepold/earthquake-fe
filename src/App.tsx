import { useEffect, useState } from "react";
import "./App.css";
import { EarthquakeList } from "./components/EarthquakeList";
import type { Earthquake } from "./models/earthquake";
import { getEarthquakes } from "./services/earthquake-service";

function App() {
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);

  useEffect(() => {
    getEarthquakes().then(setEarthquakes);
  }, []);

  return (
    <div className="earthquake-fe">
      <EarthquakeList earthquakes={earthquakes} />
    </div>
  );
}

export default App;
