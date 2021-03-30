import axios from "axios";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from './components/Search';
import Table from "./components/Monsters";

const Home = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/monsters").then((res) => {
      setClasses(res.data.results);
    });
  }, []);

  console.log(classes);
  return (
    <div className="Table">
      <Search />
      <div className="Table">
        <table>
          <thead>
              <tr>             
                  <td>MONSTROS</td>
              </tr>
          </thead>
          <tbody>
          {classes.length > 0 &&
            classes.map(({ name }) => (
              <div>
                <Link id="link" to={`/monsters-info/${name}`}><Table name={name} ></Table> </Link>
              </div>
          ))} 
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
