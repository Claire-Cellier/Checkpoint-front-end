import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_COUNTRY_BY_CODE } from '../../api/GraphQLRequests';
import { Country } from '../../types';
import classes from './CountryDetail.module.scss';

export function CountryDetail() {
  const { code } = useParams<{ code: string }>();

  const { loading, error, data } = useQuery<{ country: Country }>(
    GET_COUNTRY_BY_CODE,
    {
      variables: { code: code! },
    }
  );

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;
  if (!data?.country) return <p>Pays introuvable</p>;

  const { country } = data;

  return (
    <div className={classes['country-detail']}>
      <p>{country.emoji}</p>
      <p>Name : {country.name} ({country.code})</p>
      <p>Continent : {country.continent.name}</p>
    </div>
  );
}