// import { useEffect, useState } from 'react';

// export function Image() {
//   const [imageURL, setImageURL] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/photos', { mode: 'cors' })
//       .then((response) => response.json())
//       .then((response) => setImageURL(response[0].url))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     imageURL && (
//       <>
//         <h1>An image</h1>
//         <img src={imageURL} alt={'placeholder text'} />
//       </>
//     )
//   );
// }

import { useEffect, useState } from 'react';
import { StoreItem } from '../components/StoreItem';

export function Image() {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5', { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => setImageURL(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {imageURL && (
        <>
          {imageURL.map((item) => {
            return <StoreItem {...item} />;
          })}
        </>
      )}
    </>
  );
}
