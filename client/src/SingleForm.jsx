import React from 'react'
import styles from './styles.module.css'

const SingleForm = ({ setUrl, url, handleClick }) => {
  return (
    <form className={styles.form}>
      <select value={url} onChange={event => {
        setUrl(event.target.value)
      }}>
        <option value={`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_DATABASE_API}`}>Popular </option>
        <option value={`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_DATABASE_API}`}>Now playing</option>
        <option value={`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_DATABASE_API}`}>Top rated</option>
        <option value={`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_DATABASE_API}`}>Upcoming</option>
        <option value={`https://api.themoviedb.org/3/tv/top_rated?api_key=${import.meta.env.VITE_DATABASE_API}`}>Popular TV shows</option>
      </select>
      <input type="submit" onClick={(e) => handleClick(e)} value="Смотреть" />
    </form>
  )
}

export default SingleForm