
const make = "Kawasaki"
const model = "Ninja 300"

export async function fetchMotorcycles() {
  const headers = {
    'X-Api-Key': 'MAMd87F8F0NFClGJ2b9kMA==lk4zPnct7K3XFb5H'
  }

  const response =  await fetch(`https://api.api-ninjas.com/v1/motorcycles?make=${make}&model=${model}`, {
    headers : headers,
  });
  
  const result = await response.json();

  return result;
}