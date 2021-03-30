import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MonsterInfo = () => {
  const { name } = useParams();
  const [classes, getClasses] = useState({});
  const nomeMonster= name.toLowerCase();
  
  
  useEffect(() => {
      axios.get(`https://www.dnd5eapi.co/api/monsters/${nomeMonster}`).then((res) => {
      getClasses(res.data);
    });
  }, []);

  console.log(nomeMonster);
  console.log(classes);

  return (

    <div className="card">
        <p><b>Monstro Escolhido: </b> {classes && classes.name}</p>
        <br/>
        <p><b>Tipo do Monstro: </b> {classes && classes.type}</p>
        <br/>
        <p><b>Habilidade: </b> {classes && classes.actions && classes.actions[0].name} </p>

    </div>
  );
  
};

export default MonsterInfo;