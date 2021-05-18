
export async function submitForm({ health, job, love, self, user }) {
    return await fetch('/form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            //'X-Auth-Token': localStorage.getItem('thalberg_token')
    },
        body: JSON.stringify({ health, job, love, self, user })
}).then((res) => console.log(res));
}

export function fetchAnswers() {
    return fetch(`/home`)
    .then((res) => res.json())
}


// export async function checkToday() {
//     return await fetch('/api/form', {
//         method: 'GET',

//     })
// }