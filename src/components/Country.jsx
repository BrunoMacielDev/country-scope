import React, { useState } from "react";

function Country() {
  const [country, setCountry] = useState("");
  const [capital, setCapital] = useState("");
  const [commonName, setCommonName] = useState("");
  const [flagURL, setFlagURL] = useState("");
  const [continent, setContinent] = useState("");
  const [currency, setCurrency] = useState("");
  const [population, setPopulation] = useState("");
  const [area, setArea] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (country != "") {
      fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((info) => info.json())
        .then((data) => {
          setCommonName(data[0].name.common);
          setFlagURL(data[0].flags.png);
          console.log(flagURL);
          setCapital(data[0].capital);
          setContinent(data[0].continents[0]);
          let localCurrency = Object.values(data[0].currencies);
          setCurrency(localCurrency[0].name);
          setPopulation(data[0].population);
          setArea(data[0].area);
        });
    } else {
      return false;
    }
    setCountry("");
  };

  return (
    <>
      <div className="country">
        <div className="country-card">
          <div className="country-column">
            <h1>Country Scope</h1>
            <p>Please, enter a country</p>
            <form onSubmit={handleSubmit}>
              <div className="form-item">
                <input
                  type="text"
                  className="form-element"
                  placeholder="Country Name"
                  name="country"
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                />
                <div className="flex">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="country-card">
          <div className="country-column">
            {!commonName ? (
              <></>
            ) : (
              <>
                <h3>{commonName}</h3>
                <img src={flagURL} alt="bandera" />
                <table>
                  <tr>
                    <td>Capital</td>
                    <td>{capital}</td>
                  </tr>
                  <tr>
                    <td>Continent</td>
                    <td>{continent}</td>
                  </tr>
                  <tr>
                    <td>Currency</td>
                    <td>{currency}</td>
                  </tr>
                  <tr>
                    <td>Population</td>
                    <td>{population}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>{area}</td>
                  </tr>
                </table>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Country;
