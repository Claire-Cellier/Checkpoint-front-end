import { useNavigate } from "react-router-dom";
import { Country } from "../../types";

interface CountryCardProps {
        readonly country: Country;
    }

export function CountryCard({ country }: CountryCardProps) {
  const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/country/${country.code}`);
    };
    
  return (
    <button onClick={handleClick} type="button">
        <p>{country.name}</p>
        <p>{country.emoji}</p>
    </button>
  );
}
