import style from './Exo3.module.css' 

export const FilmCard = (props) => {
const { film } = props
  const { id, title, director, year, poster, rating } = film


  const cardStyle = ['', style.other, '','', style.moyen, style.perfect];

  return (
    <div className={`${style.card} ${cardStyle[rating]}`}>
      
     
      {poster && <img src={poster} alt={title} className={style.poster} />}
      
      <h3>{title} ({year})</h3>
      
      <div className={style.info}>
        <p>Director: {director}</p>
        
        
        <div className="rating-gap">
          {Array.from({ length: 5 },(_, index) => (
            <span key={index}>
        {index < rating ? '⭐' : '☆'}
            </span>
          ))}
     </div>
      </div>
    </div>
  )
}