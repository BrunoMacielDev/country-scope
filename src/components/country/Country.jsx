import React, { useState } from "react";
import styles from "./Country.module.css";
import { VscSearch } from "react-icons/vsc";
import { CgCornerDownLeft } from "react-icons/cg";

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
      <div className={styles.country}>
        <div className={styles.section}>
          <h1>CountryScope</h1>
          <p>Please, enter a country</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.form}>
              <VscSearch />
              <input
                type="text"
                placeholder="Type to search..."
                name="country"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              />
              <button type="submit">
                <CgCornerDownLeft size={15} color="white"/>
              </button>
            </div>
          </form>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            {!commonName ? (
              <></>
            ) : (
              <>
                <h3>{commonName}</h3>
                <img src={flagURL} alt="bandera" />
                <table>
                  <tr>
                    <td><img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4cd.svg"/> Capital:</td>
                    <td>{capital}</td>
                  </tr>
                  <tr>
                    <td><img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f310.svg"/> Continent:</td>
                    <td>{continent}</td>
                  </tr>
                  <tr>
                    <td><img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4b2.svg"/> Currency:</td>
                    <td>{currency}</td>
                  </tr>
                  <tr>
                    <td><img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f465.svg" /> Population:</td>
                    <td>{population}</td>
                  </tr>
                  <tr>
                    <td><img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4d0.svg" /> Area:</td>
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
