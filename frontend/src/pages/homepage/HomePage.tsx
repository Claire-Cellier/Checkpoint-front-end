import { useQuery } from "@apollo/client";
import { CountryCard } from "../../components/countryCard/CountryCard";
import { Country } from "../../types";
import { GET_COUNTRIES } from "../../api/GraphQLRequests";
import classes from "./HomePage.module.scss";
import { AddCountryForm } from "../../components/addCountryForm/AddCountryForm";
import { useState } from "react";


export function HomePage() {
  const { loading, error, data } = useQuery<{ countries: Country[] }>(GET_COUNTRIES);
  const [countries, setCountries] = useState<Country[]>([]);

  if (loading) return <p>Chargement des pays...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div className={classes['home-page']}>
      <AddCountryForm onAdded={(newCountry) => {
  setCountries(prev => [...prev, newCountry]);
}}/>
      <div className={classes['country-list']}>
        {data?.countries.map((country) => (
          <CountryCard key={country.id} country={country} />
        ))}
      </div>
    </div>
  );
}
