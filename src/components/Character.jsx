import axios from "axios"
import { useEffect, useState } from "react"
import Film from "./Film"
import VideoGames from "./VideoGames"
import ShortFilms from "./ShortFilms"
import TvShow from "./TvShow"

function Character({ num, page }) {
  const [char, setChar] = useState([])

  useEffect(() => {
    const getChar = async () => {
      const response = await axios.get(
        `https://api.disneyapi.dev/characters/?page=${page}`
      )
      setChar(response.data.data[num])
    }
    getChar();
  }, [])

  if (!char) return (<div>Hello Friend</div>)

  return (
    <div className="char-container">
      <div className="left">
        <h3>{char.name}</h3>
        <img id="myImg" src={char.imageUrl}></img>
      </div>

      <div className="film-container">
        <p> FILMS: </p>{char.films?.map((film, k) => {
          return (<Film film={film} key={k} />)
        })}</div>

      <div className="shortfilm-container">
        <p>Short Films:</p>{char.ShortFilms?.map((x, k) => {
          return (<ShortFilms film={x} key={k} />)
        })}</div>


      <div className="tvshow-container">
        <p>TV: </p>  {char.tvShows?.map((show, k) => {
          return (<TvShow show={show} key={k} />)
        })}
      </div>
      <div className="videogame-container">
        <p>Video Games:</p>
        {char.videoGames?.map((x, k) => {
          return (<VideoGames game={x} key={k} />)
        })}
      </div>
    </div >
  )
}

export default Character