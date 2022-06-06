import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"

export default () => {
    return (
        <>
            <div className='container'>
            <button 
            className="btn btn-info button" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasRight" 
            aria-controls="offcanvasRight" 
            style={{border:"1px solid #4682B4", backgroundColor:"#4682B4", color:"white"}}>
            Adicionar História
            </button>
            
            <section className="card-deck row">
            <div className="row row-cols-3 row-cols-md-3 g-4">
            </div>
            </section>
            
        </div>
        <div 
            className="offcanvas offcanvas-end" 
            tabindex="-1" id="offcanvasRight" 
            aria-labelledby="offcanvasRightLabel">
            
            <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Adiciona uma História Contada do seu jeito!</h5>
            
            </div>
            <div className="offcanvas-body">
            <form>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Título</label>
                    <input type="text" className="form-control" id="titleArea" placeholder="Crie um título para a sua história" />
                    
                    <label for="exampleFormControlTextarea1" className="form-label">Sinopse</label>
                    <textarea className="form-control" id="synopsisArea" rows="3" maxlength="141"></textarea>
                    
                    <label for="exampleFormControlTextarea2" className="form-label">História</label>
                    <textarea className="form-control" id="storyArea" rows="3"></textarea>
                    
                    <label for="exampleFormControlInput1" className="form-label">Autor</label>
                    <input type="text" className="form-control" id="authorArea" placeholder="Nome do autor da história" />
                    
                    <label for="imgArea" className="form-label">Imagem</label>
                    <input type="text" className="form-control" id="imgArea" 
                    placeholder="Insira a URL da sua imagem" />
                </div>
                
                <div className="d-grid gap-2 d-md-block my-3 float-end">
                <button className="btn btn-secondary" type="close" data-bs-dismiss="offcanvas" >Fechar</button>
                <button className="btn btn-info" type="submit" style={{border:"1px solid", backgroundColor:"#4682B4"}}>Enviar</button>
                </div>
            </form>
            </div>
        </div>
    </>
    )
}