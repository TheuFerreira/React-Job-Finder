export function getAllJobs(search) {
    return fetch(`http://localhost:5214/Job/All/:search?search=${search}`);
}

export function saveJob(title, description, company, email, salary) {
    const data = {
        'title': title,
        'description': description,
        'company': company,
        'email': email,
        'salary': salary
    };

    return fetch(`http://localhost:5214/Job`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

export function getJobById(id) {
    return fetch(`http://localhost:5214/Job/ById/${id}`);
}