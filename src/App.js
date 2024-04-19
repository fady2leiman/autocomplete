import { useState } from "react";
import countriesList from "./CountriesList";
import Autocomplete from "./Autocomplete";
function App() {
  const [countriesData, setCountriesData] = useState({
    Name: "",
    id: "",
  });
  return (
    <div className="container mx-auto">
      <div className="text-4xl front-extrabold dark:text-black py-20">
        <h1>React Autocomplete with tailwind css</h1>
      </div>
      <div className="grid md:grid-cols-5">
        <label className="block text-sm font-medium">Country Name</label>
        <div className="flex-col">
          <Autocomplete
            placeholder="Country Name..."
            value={countriesData.Name}
            onChangeMethod={(e) =>
              setCountriesData({
                ...countriesData,
                Name: e,
              })
            }
            suggestions={countriesList}
          ></Autocomplete>
        </div>
        <div className="flex-col">
          <input value={countriesData.Name}></input>
        </div>
      </div>
    </div>
  );
}

export default App;
