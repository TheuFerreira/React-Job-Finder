import Company from '../../../assets/images/company.svg';
import './css/job.min.css';

export default function Job(props) {
    const data = props.data;

    return (
        <>
            <li className={`list-group-item ${data.is_new === true ? 'new-job' : ''}`}>
                <img src={Company} alt="company"/>
                <p>{data.company}</p>
                <h2>{data.title}</h2>
                <p>R${data.salary}</p>
                <span className="new-job-label">Nova</span>
                <a className="btn btn-primary" href={`/view/${data.id_job}`}>Ver vaga</a>
            </li>
        </>
    );
}