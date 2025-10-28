import { useNavigate } from "react-router-dom";
import { Country } from "../../types";
import classes from "./countryCard.module.scss";

interface CountryCardProps {
        readonly country: Country;
    }

export function CountryCard({ country }: CountryCardProps) {
  const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/country/${country.id}`);
    };
    
  return (
    <button className={classes["country"]} onClick={handleClick} type="button">
        <p>{country.name}</p>
        <p>{country.emoji}</p>
    </button>
  );
}
