import React from 'react';
import { Link } from 'react-router-dom';
import DogList from '../DogCard/DogList';

export default function Home() {
  return (
    <div>
        Have a friend looking for adoption? 
      <Link exact to = '/dogs/new'>
          Click Here!
      </Link>
      <h1>Take a look at our wonderful dogs! Click any picture to view more info.</h1>

      <DogList />
    </div>
  );
}







// import React, { useEffect, useState } from 'react';

// import { fetchDogs } from '../../services/fetchdogs';

// export default function Home() {
// //   const [dog, setDog] = useState([]);

// //   useEffect(()=> {
// //     const fetchDoggosFunct = async () => {
// //       const data = await fetchDogs();
// //       setDog(data);
// //     };
// //     fetchDoggosFunct();
// //   }, []);

//   return (
//     <div>Home
// {/* 
//       {dog.map((data) => (
//         <div key={data.id}>
//           {data.name}
//           Age: ({data.age})
//          Breed: ({data.breed})
//          Bio: {data.bio}

//         </div>
//       ))} */}


//     </div>
//   );
// }
