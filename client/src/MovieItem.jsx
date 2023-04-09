import React from 'react'
import styles from "./styles.module.css"

const MovieItem = ({ props }) => {

  return (
    <div className={styles.movieItem}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={`https://image.tmdb.org/t/p/original/${props.poster_path}`} alt="image" />
        <div className={styles.score}>
          <div className={styles.star}>&#9733;</div>
          <div>{props.vote_average}</div>
        </div>
      </div>
      <p className={styles.title}>{props.title ? props.title : props.name}</p>
    </div>
  )
}

export default MovieItem