import './css/jobTitle.min.css';

export default function JobTitle(props) {
    const search = props.search;

    return (
        <>
            { 
                search === '' || search == null 
                    ? <h2 id="job-list-title">Veja as nossas vagas em destaque</h2> 
                    : <h2 id="job-list-title">Buscando vagas que contém: {search}</h2> 
            }
        </>
    );
}