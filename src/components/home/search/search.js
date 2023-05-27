import './css/search.min.css';

export default function Search() {
    return (
        <form id="search-form" className="form-inline" action="/" method="GET">
            <div className="form-group col-md-10">
                <input type="text" className="form-control" id="job" name="search" placeholder="Digite a vaga que está buscando" required/>
            </div>

            <div className="col-md-2">
                <button type="submit" className="btn btn-primary">Procurar</button>
            </div>
        </form>
    );
}