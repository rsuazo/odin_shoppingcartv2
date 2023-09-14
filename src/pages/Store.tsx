// import { Col, Row } from 'react-bootstrap';
// import { StoreItem } from '../components/StoreItem';
// import storeItems from '../data/items.json';
// import { Image } from '../components/Image';

// export function Store() {
//   return (
//     <>
//       <h1>Store</h1>
//       <Image />
//       <Row md={2} xs={1} lg={3} className="g-3">
//         {storeItems.map((item) => (
//           <Col key={item.id}>
//             <StoreItem {...item} />
//           </Col>
//         ))}
//       </Row>
//     </>
//   );
// }

import { Image } from '../components/Image';

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Image />
    </>
  );
}
