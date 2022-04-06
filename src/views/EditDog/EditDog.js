import React, { useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import AddDog from '../../components/AddDog';
import { useLoginContext } from '../../context/LoginContext';
import { fetchSingleDog, changeDog } from '../../services/fetchdogs';


export default function EditDog() {
  const params = useParams();
  const id = params.id;

  const { error, setError, name, setName, breed, setBreed, age, setAge, bio, setBio, image, setImage } = useLoginContext();

  // const [error, setError] = useState('');
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  // const [bio, setBio] = useState('');
  // const [breed, setBreed] = useState('');
  // const [image, setImage] = useState('');
  const history = useHistory();

  useEffect(() => {
    const grabDog = async () => {
      const data = await fetchSingleDog(id);
      setName(data.name);
      setAge(data.age);
      setBio(data.bio);
      setBreed(data.breed);
      setImage(data.image);
    };
    grabDog();
  }, [id]);

  const submitDog = async () => {
    try {
      await changeDog({ id, name, age, bio, breed, image });
      history.push(`/dogs/${id}`);
    } catch (e) {
      setError('Oh no! Something went wrong.');
    }
  };

  return (
    <div>
      <div>
        {error && <p>{error}</p>}
        <AddDog {...{ name, age, setName, setAge, bio, setBio, breed, setBreed, image, setImage, submitDog }}/>
      </div>
      <div>
        <Link exact to = {`/dogs/${id}`}>
          <h1>Cancel Edit</h1>
        </Link>
      </div>
    </div>
  );
}
