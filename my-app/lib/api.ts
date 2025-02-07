const API_URL = "http://127.0.0.1:8000/api/socios/"; // Ajusta según tu configuración

export async function fetchData(endpoint: string) {
  const response = await fetch(`${API_URL}/${endpoint}/`);
  return response.json();
}

export async function createData(endpoint: string, data: any) {
  const response = await fetch(`${API_URL}/${endpoint}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}
