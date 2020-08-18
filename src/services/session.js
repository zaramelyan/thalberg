const API_URL = '/api';

export function createSession({ username, password }) {
    return fetch(`${API_URL}/session`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })
    .then((res) => res.json())
}

export async function checkSession() {
    const res = await fetch(`${API_URL}/session`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('twitter_clone_token')
        }
        
    });
    console.log(res)
    return res.status === 200;
}

