import React from 'react'
import styles from "./styles.module.css"
import MovieItem from './MovieItem'

const Movies = ({ props }) => {
  return (
    <div className={styles.moviesContainer}>
      <div className={styles.movieList}>
        {props.results.map(movie => {
          return <MovieItem key={movie.id} props={movie} />
        })}

      </div>
    </div>
  )
}

export default React.memo(Movies)