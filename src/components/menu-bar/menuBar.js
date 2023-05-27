import './css/menuBar.min.css';

export default function MenuBar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Job Finder</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/">Ver vagas</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link btn btn-primary" href="/add">Abrir vaga</a>
                </li>
                </ul>
            </div>
        </nav>
    );
}