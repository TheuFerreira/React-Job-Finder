import { saveJob } from '../../services/api/jobService';
import './css/add.min.css';
import { useNavigate } from 'react-router-dom';

export default function Add() {
    const navigation = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const target = e.target;

        const title = target.title.value;
        const description = target.description.value;
        const company = target.company.value;
        const email = target.email.value;
        const salary = parseFloat(target.salary.value);

        saveJob(title, description, company, email, salary)
            .then((res) => {
                navigation('/');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div id="add-form-container" className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">Divulgue a vaga preenchendo o formulário</h1>
                </div>

                <div className="col-md-12" id="form-box">
                    <h2>Preencha os dados da melhor forma possível para encontrar mais rápido seu dev!</h2>

                    <form method="POST" onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Título da vaga:</label>
                            <input type="text" className="form-control" id="title" name="title" placeholder="Digite o título da vaga" required/>
                            <small id="titleHelp" className="form-text text-muted">O título é muito importante, seja claro e objetivo.</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Descrição da vaga:</label>
                            <textarea type="text" className="form-control" id="description" name="description" placeholder="Descreva as atividades do desenvolvedor..." required></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="company">Empresa contratante:</label>
                            <input type="text" className="form-control" id="company" name="company" placeholder="Digite a empresa que vai contratar" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">E-mail para contato:</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Digite o e-mail para contato" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="salary">Salário oferecido</label>
                            <input type="text" className="form-control" id="salary" name="salary" placeholder="Digite o Salário da vaga" required/>
                        </div>

                        <input type="hidden" name="new_job" value="1"/>

                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}