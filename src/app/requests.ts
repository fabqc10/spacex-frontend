const API_URL = 'http://localhost:8080/api/v1';

export async function httpGetCrew(page: number = 1) {
    const response = await fetch(`${API_URL}/crew?page=${page}&limit=9`);
    return await response.json();
}
