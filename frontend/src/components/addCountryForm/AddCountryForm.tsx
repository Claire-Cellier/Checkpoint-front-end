import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COUNTRY } from "../../api/GraphQLRequests";
import { Country } from "../../types";
import classes from "./AddCountryForm.module.scss";

type Props = {
  onAdded: (country: Country) => void;
};

export function AddCountryForm({ onAdded }: Props) {
  const [form, setForm] = useState({ name: "", code: "", emoji: "" });

  const [addCountry, { loading, error }] = useMutation(ADD_COUNTRY, {
    onCompleted: (data) => {
      onAdded(data.addCountry);
      setForm({ name: "", code: "", emoji: "" });
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCountry({ variables: { data: form } });
  };

  return (
    <div className={classes["form-container"]}>
      <form onSubmit={handleSubmit} >
        <div className={classes["form-input"]}>
        <label>Name</label>
        <input
          name="name"
          placeholder="Nom du pays"
          value={form.name}
          onChange={handleChange}
          required
        />
        </div>
        <div className={classes["form-input"]}>
        <label>Emoji</label>
        <input
          name="code"
          placeholder="Code (ex: FR)"
          value={form.code}
          onChange={handleChange}
          required
        />
        </div>
        <div className={classes["form-input"]}>
        <label>Code</label>
        <input
          name="emoji"
          placeholder="Emoji (🇫🇷)"
          value={form.emoji}
          onChange={handleChange}
          required
        />
        </div>
        <button type="submit" disabled={loading} className={classes["form-button"]}>
          {loading ? "Ajout..." : "Add"}
        </button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
}
