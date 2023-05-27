import Job from "./job/job";
import JobTitle from "./jobTitle/jobTitle";
import Search from "./search/search";
import './css/home.min.css';
import { useEffect, useState } from "react";
import { getAllJobs } from "../../services/api/jobService";
import { useSearchParams } from 'react-router-dom';

export default function Home(props) {

    const [ jobs, setJobs ] = useState([]);
    const [ searchParams ] = useSearchParams();
    const search = searchParams.get('search') ?? '';

    useEffect(() => {
        getAllJobs(search)
            .then((res) => res.json())
            .then((json) => setJobs(json));
    }, [search]);

    return (
        <>
            <div id="top-container" className="container-fluid">
                <h1 id="main-title" className="text-center">Encontre o emprego dos seus sonhos</h1>
                <p id="main-subtitle" className="text-center">Somos o site com mais vagas de tecnologia no mercado, direcionadas a home office</p>

                <Search/>
            </div>

            <main>
                <div id="jobs-container" className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <JobTitle search={search}/>

                            <ul id="job-list" className="list-group">
                                { jobs.map((data) => <Job key={data.id_job} data={data}/>) }
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}