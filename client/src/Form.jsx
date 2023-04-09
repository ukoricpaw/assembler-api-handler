import React, { useState, useCallback } from 'react';
import axios from 'axios'
import Movies from './Movies';
import styles from './styles.module.css'
import SingleForm from './SingleForm';

const Form = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_DATABASE_API}`);
  const handleClick = useCallback((e) => {
    e.preventDefault();
    const postUrl = async () => {
      await fetch("http://localhost:3000/get-url", {
        method: "POST",
        body: JSON.stringify({ url }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.text())
        .then((data) => {
          console.log(data)
          const getResponse = async () => {
            const response = await axios.get("http://localhost:3000/getJson")

            const convertToObject = () => {
              const ownString = JSON.parse(JSON.stringify(response.data))
              const str = ownString.replaceAll(String.fromCharCode(0), "");
              setData(JSON.parse(str))
            }

            convertToObject()
            setLoading(false)
          }
          setTimeout(() => { getResponse(); }, 1500)
        })
        .catch((error) => {
          console.log(error)
        });
    }
    postUrl();
  }, [url])


  if (loading) {
    return (
      <div className={styles.contentWrapper}>
        <div className={styles.formWrapper}>
          <h1>Выберите тип фильмов:</h1>
          <SingleForm handleClick={handleClick} url={url} setUrl={setUrl} />
        </div>
      </div>
    )
  }


  return (
    <div className={styles.ownContent}>
      <div className={styles.newForm}>
        <h1 className={styles.OwnTitle}>Movies</h1>
        <SingleForm handleClick={handleClick} url={url} setUrl={setUrl} />
      </div>
      <Movies props={data} />
    </div>
  )
}

export default Form