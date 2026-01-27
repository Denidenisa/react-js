import {FilmCard} from "./FilmCard"

export const Exo3 = () => {
  const films = [
    {
      id: 1,
      title: 'Sinners',
      director: 'Ryan Coogler',
      year: 2025, 
      poster: 'https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg',
      rating: 5,
    },

    {
      id: 2,
      title: 'Death Poets Society',
      director: 'Peter Weir',
      year: 1989, 
      poster: 'https://upload.wikimedia.org/wikipedia/en/8/86/Dead_poets_society.png',
      rating: 5,
    },
    {
      id: 3,
      title: 'Om Shanti Om',
      director: 'Farah Khan',
      year: 2007, 
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Om_Shanti_Om.jpg/250px-Om_Shanti_Om.jpg',
      rating: 5,
    },

    {
      id: 4,
      title: 'Better Days',
      director: ': Derek Tsang',
      year: 2019, 
      poster: 'https://m.media-amazon.com/images/M/MV5BZDAwNDEyODMtNGQ0NC00Y2M5LWE0OTctZjIwMWU3ZDlmMzMyXkEyXkFqcGc@._V1_.jpg',
      rating: 4,
    },
    {
      id: 5,
      title: 'Frankenstein',
      director: 'Guillermo del Toro',
      year: 2025, 
      poster: 'https://m.media-amazon.com/images/M/MV5BYzYzNDYxMTQtMTU4OS00MTdlLThhMTQtZjI4NGJmMTZmNmRiXkEyXkFqcGc@._V1_.jpg',
      rating: 4,
    },
    {
      id: 6,
      title: 'The Divine Fury',
      director: 'Jason Kim',
      year: 2019, 
      poster: 'https://fr.web.img4.acsta.net/pictures/19/07/08/08/02/0784480.jpg',
      rating: 4,
    },
   

    
  ]

  return (
    <div>
      
      <h2>Movies</h2>
      <div className="flex flex-row justify-center items-center gap-3">
        {films.map(film => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  )
}