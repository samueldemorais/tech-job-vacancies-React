
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"

export default ({story}) => {
    return (
      <>
          <div class="col p-3">
            <div class="card" style= {{width: "18rem"}}>
              <div class="card-body p-0">
                <h5 class="card-title text-center">{story.title}</h5>
                <p class="card-text">{story.requisitos}</p>
                <p class="card-text">{story.empresa}</p>
                <p class="card-text">{story.salario}</p>
              </div>
            </div>
          </div>
      </>
    )
  }