//Importin React hooks
import { useState } from "react";

//Importing types and interfaces
import { BasketProductObjectType } from "../../../Types/ShoppingCartTypes";


type ProductImageHandlerPropsType = {
 imageURL: string,
 fallBackURL: string,
 product: BasketProductObjectType,
}

export default function ProductImageHandler(props: ProductImageHandlerPropsType) {
  const { imageURL, fallBackURL, product } = props;

  const [imgSrc, setImageSrc] = useState(imageURL);

  const onImageError = () => setImageSrc(fallBackURL);

  return (
    <img
      className="w-10 h-10 object-contain"
      src={imgSrc ? imgSrc : fallBackURL}
      onError={onImageError}
      alt={product.ProductName}
    />
  );
}
