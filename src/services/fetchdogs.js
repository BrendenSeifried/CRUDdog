import { checkError, client } from './client';

export async function fetchDogs() {
  const resp = await client.from('DogsCRUD').select('*');
  return checkError(resp);
}

export async function fetchSingleDog(id) {
  const resp = await client.from('DogsCRUD').select('*').match({ id }).single();
  console.log(resp);
  return checkError(resp);
}
