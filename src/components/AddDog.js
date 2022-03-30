import './AddDog.css';


export default function AddDog({ name, setName, age, setAge, bio, setBio, breed, setBreed, image, setImage, submitDog }) {


  return (
    <div className='all'>
      <div className='divphoto'>
        <label className='photo'> Link a Photo:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
        </label>
      </div>

      <div className='divinfo'>
        <label className='info'> Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>

        <label className='info'> Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
        </label>

        <label className='info'> Breed:
          <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)}/>
        </label>

      </div>

      <div className='divbio'>
        <label className='bio'> Background:
          <input type="text" value={bio} onChange={(e) => setBio(e.target.value)}/>
        </label>
      </div>

      

      <button className='addbtn' onClick={submitDog}>Submit</button>
      
    </div>
  );
}
