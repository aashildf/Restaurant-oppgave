// import { Card, CardHeader, CardBody, CardFooter, Divider, Image, } from "@heroui/react";
import styles from "./DishCard.module.css";

export default function DishCard({ tittel, pris, ingredienser, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={tittel} />
      </div>

      <div className={styles.cardContent}>
        <h2 className={styles.title}>{tittel}</h2>
        <div className={styles.divider}></div>

        <p className={styles.ingredients}>{ingredienser}</p>
        <div className={styles.divider}></div>
        <p className={styles.price}>{pris}</p>
      </div>
    </div>
  );
}










//     <Card
//       isHoverable
//       isPressable
//        shadow="lg"     
//   radius="lg"    
//   >
//       <CardHeader className="p-0">
//         <div className="w-full h-[180px] overflow-hidden rounded-t-lg">
//           <Image
//             alt={tittel}
//             src={image}
//             width="100%"
//             height={180}
//             objectFit="cover"
//             radius="none"
//             className="w-full h-[180px] object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 "
//           />
//         </div>
//       </CardHeader>
//       <h2 className="text-lg font-semibold mt-2">{tittel}</h2>
//       <Divider className="my-2" />
      

//       <CardBody className="px-4">
//         <p className="text-gray-700 mb-1">{ingredienser}</p>
//       </CardBody>
//       <Divider className="my-2" />

//       <CardFooter className="flex justify-end px-4 pb-2">
//         <span className="font-bold text-green-700">{pris}</span>
//       </CardFooter>
//     </Card>
    
//   );
// }
