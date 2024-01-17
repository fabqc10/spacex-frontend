const API_URL = 'http://localhost:8080/api/v1';

export async function httpGetCrew(page: number) {
    const response = await fetch(`${API_URL}/crew?page=${page}&limit=9`);
    return await response.json();
}

export async function httpGetLaunches(page: number){
    const response = await fetch(`${API_URL}/launches?page=${page}&limit4`);
    return await response.json();
}
