import React, {useState} from 'react';
import Logo from './assets/logo.png';
import './App.css';




function App() {
  const data =[
    {id: 1, title: 'Casper, the Friendly ghost', year: 1995},
    {id: 2, title: 'The Addams Family', year: 1991},
    {id: 3, title: 'Addams Family Values', year: 1993},
    {id: 4, title: 'Goosebumps!', year: 2015},
    {id: 5, title: 'The Goonies', year: 1985},
    {id: 6, title: 'The Simpsons Treehouse of Horror', year: 'is held every year'},
    {id: 7, title: 'Hocus Pocus', year: 1993},
    {id: 8, title: 'Ghostbusters', year: 1984},
    {id: 9, title: 'The Nightmare Before Christmas', year: 1993},
    {id: 10, title: 'It’s the Great Pumpkin, Charlie Brown', year: 1966}
  ];
  const [movie, setMovie] = useState(data);

  const movieRemover = (id) =>{
    let newList = movie.filter((jednostka) => jednostka.id !== id)
    setMovie(newList);
  }
  return (
    <div className="app-container">
      <div className="img-contain">
      <img className="img-container" src={Logo} alt="logo" id="logo"/>
      </div>
      <div className="outercard-wrap">
      {movie.map((jednostka)=>{
        const {id, title, year} = jednostka;
        return(
          <div className="card-container" key={id}>
            <div className="card-wrapper">
              <h2>{title}</h2>
              <h4>{year}</h4>
              </div>
              <button className="btn" onClick={()=>movieRemover(id)}>Watched!</button>
               </div>
        );
       
      })}
   </div>
    </div>
  );
}

export default App;

