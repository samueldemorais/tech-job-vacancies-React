
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import CreateVacancies from "./CreateVacancies.jsx"


function App() {

  const story = {
    title: 'Python developer',
    requisitos: 'algum requisito',
    empresa: 'Phoebus',
    salario: 1000.00
    
  }

  


  return (
    <div className="App">
      <h1>Vagas de emprego em tecnologia</h1>
      <CreateVacancies story={story} />
    </div>
  );
  
}

export default App;
