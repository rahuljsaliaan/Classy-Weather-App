import { Input } from "./components/Input";
import { Loader } from "./components/Loader";
import { useFetchWeather } from "./hooks/useFetchWeather";
import { Weather } from "./components/Weather";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

export default function App() {
  const [location, setLocation] = useLocalStorageState("location");

  function handleSetLocation(newLocation) {
    setLocation(newLocation);
  }

  const { weather, displayLocation, isLoading } = useFetchWeather(location);

  return (
    <div className="app">
      <h1>Classy Weather</h1>
      <Input
        location={location}
        onChangeLocation={(e) => handleSetLocation(e.target.value)}
      />
      {isLoading && <Loader />}
      {weather?.weathercode && (
        <Weather location={displayLocation} weather={weather} />
      )}
    </div>
  );
}
