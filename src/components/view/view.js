import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "../../services/api/jobService";
import './css/view.min.css';
import Company from '../../assets/images/company.svg';

export default function View() {
    const [ job, setJob ] = useState({});
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        getJobById(id)
            .then((res) => res.json())
            .then((data) => {
                setJob(data);
            })
            .catch((err) => console.log(err));
    }, [id])

    return (
        <div id="job-view-container" className="container">
            <div className="row text-center">
                <a className="back-link main-color" href="/">Voltar</a>

                <div id="img-container" className="col-md-12">
                    <img src={Company} alt="Company"/>
                </div>

                <div className="col-md-12">
                    <h1 className="main-color">{job.title}</h1>
                    <p className="bold">Quem eles estão buscando:</p>
                    <p className="job-desc">{job.description}</p>
                    <p><span className="bold">O salário informado é de:</span> R${job.salary}</p>
                    <p>
                        Para trabalhar na <span className="bold main-color">{job.company}</span> envie um e-mail para a <a className="main-color" href={`mail:to${job.email}`}>{job.email}</a>
                    </p>
                </div>
            </div>
        </div>
    );
}