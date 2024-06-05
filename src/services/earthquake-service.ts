import { fromDownstream } from "../models/earthquake";

export async function getEarthquakes() {
  const data = await fetch(
    "https://earthquake-api-ivory.vercel.app/earthquakes?starttime=2014-01-01&endtime=2014-01-02"
  );

  return data.json().then(({ features }) => {
    return features.map(fromDownstream);
  });
}
