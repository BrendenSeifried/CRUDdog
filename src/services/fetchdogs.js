import { checkError, client } from './client';

export async function fetchDogs() {
  const resp = await client.from('DogsCRUD').select('*');
  console.log(resp);
  return checkError(resp);
}

