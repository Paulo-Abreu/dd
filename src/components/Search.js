import React, { useState } from "react";
import axios from 'axios';

function Search() {
    const [filterClasses, filterClass] = useState([]);
    const [inputValue, getInput] = useState("");

    const filter = () => {
        axios
          .get(`https://www.dnd5eapi.co/api/monsters/${inputValue}`)
          .then((r) => {
          filterClass(r.data);
        });
      };

      console.log(filterClasses);
    return(
            <>
            <div className="SearchBar">
              <h1 id="titulo">Monsters D&D</h1>
                
          
        </div> 

        <div className="card">
          <form name="FormBusca" id="FormBusca">
            
            <input
                onChange={(e) => {
                getInput(e.target.value);
                }}
                value={inputValue}
            ></input>                
            <button type="button" onClick={filter} method="POST">
                Buscar
            </button>
            <p id="desc">se o nome houver espaços, separe-os com " - "</p>                    
          </form>
          <br/> 
          <p><b>Monstro Escolhido: </b> {filterClasses && filterClasses.name}</p>
          <br/>
          <p><b>Tipo do Monstro: </b> {filterClasses && filterClasses.type}</p>
          <br/>
          <p><b>Habilidade: </b> {filterClasses && filterClasses.actions && filterClasses.actions[0].name} </p>
        </div>
        </>
      );
}

export default Search;