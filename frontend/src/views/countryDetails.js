function countryDetails({ country }) {
    return (
      //country layout of queried information
      <div className="layout-details">
        <h3>{country.name}</h3>
        <div className="country-info">
          <div className="flag">
            <img src={country.flag} alt={`${country.name} flag`} />
          </div>
          <div className="info">
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Languages:</strong> {country.languages}</p>
            <p><strong>Currency:</strong> {country.currency}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Timezone:</strong> {country.timezone}</p>
          </div>
        </div>
      </div>
    )
  }

export default countryDetails