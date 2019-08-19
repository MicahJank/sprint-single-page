import React, { useState, useEffect } from "react";
import {Form, Field, withFormik} from 'formik';

import axios from 'axios';
import { stat } from "fs";

 function SearchForm({ errors, touched, values, status, setCharacters }) {
  // TODO: Add stateful logic for query/form data

  const [searchCharacter, setSearchCharacter] = useState('');

  useEffect(() => {
    console.log('Status: ', status);
    console.log('values.search ', values.search);
    setSearchCharacter(values.search);
    axios.get(`https://rickandmortyapi.com/api/character/?name=${values.search}`)
      .then(apiData => {
        console.log('apiData: ', apiData);
        setCharacters(apiData.data.results);
      })
      .catch(err => {
        alert(err);
      })
  }, [status])


  return (
    <section className="search-form">
      <Form>
        <Field type='text' name='search' placeholder='Search characters...' />
        <button type='submit'>Search</button>
      </Form>
    </section>
  );
}

const formikHOC = withFormik({
  mapPropsToValues({ search }) {
      return {
          search: search || ''
      };
  },

  handleSubmit(values, { setStatus }) {
      console.log('values: ', values);
      setStatus(values.search);
     
  },
});

const SearchFormWithFormik = formikHOC(SearchForm);

export default SearchFormWithFormik;