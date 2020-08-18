import React from 'react';

export async function submitForm({ health, job, love, self, user }) {
    return await fetch('/api/form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            //'X-Auth-Token': localStorage.getItem('thalberg_token')
    },
        body: JSON.stringify({ health, job, love, self, user })
}).then((res) => console.log(res));
}

export async function fetchAnswers() {
return fetch(`/api/home`)
.then((res) => res.json())
}
