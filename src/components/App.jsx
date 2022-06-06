
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import CreateVacancies from "./CreateVacancies.jsx"
import { useEffect, useState } from 'react';


const carregarVagas = () => {
    fetch('../public/vagas.json', 
  {headers:{accept: "aplication/json"}}
  ).then(res => res.json()
  ).then(res => console.log(res))
}


function App() {

  const story = {
    img: 'https://www.tshirtgeek.com.br/wp-content/uploads/2021/03/com001.jpg',
    title: 'Python developer',
    requisitos: 'Conhecimento em banco de dados (preferencialmente PostgreSQL); Conhecimento em metodologias ágeis; Experiência em framework Javascript (preferencialmente React JS).',
    empresa: 'Phoebus',
    salario: '1000.00' 
  }

  useEffect(()=>{fetch("../../vagas.json")
  .then(response => {
     return response.json();
  })
  .then(jsondata => console.log(jsondata));},[])
  


  return (
    <div className="App">
      <h1 class="text-center my-5" style="font-size: 60px; color:#4682B4; -webkit-text-stroke: 2px #1F3A3D">tech job vacancies</h1>
      <CreateVacancies card={story} />
    </div>
  );
  
}

export default App;
