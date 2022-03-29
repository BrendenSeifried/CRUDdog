import { checkError, client } from './client';

export async function fetchDogs() {
  const resp = await client.from('DogsCRUD').select('*');
  return checkError(resp);
}

export async function fetchSingleDog(id) {
  const resp = await client.from('DogsCRUD').select('*').match({ id }).single();
  return checkError(resp);
}

export async function createDog(dog) {
  const resp = await client.from('DogsCRUD').insert(dog);
  return checkError(resp);
}

export async function changeDog(change){
  const resp = await client.from('DogsCRUD').update(change).match({ id: change.id });
  return checkError(resp);
}
