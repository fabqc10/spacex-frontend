const API_URL = 'http://localhost:8080/api/v1';

export async function httpGetCrew() {
    const response = await fetch(`${API_URL}/crew`);
    return await response.json();
}
