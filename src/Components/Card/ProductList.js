import ProductCard from "../Card/ProductCard"; // Import ProductCard component
import "../Card/ProductCard_ProductList_Style.css"

function ProductList() {
  const products = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e793478b3506bc06b72666052318b51db0727b825e43915faed9cd501f61e86?apiKey=0830991684b94f42bd968d44e66e6dd0&",
      name: "Water Pump & Timing Belt Set",
      brand: "SKF",
      code: "VKMC 03318",
      discountedPrice: "102.46",
      originalPrice: "283.76",
      rating: 1
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e793478b3506bc06b72666052318b51db0727b825e43915faed9cd501f61e86?apiKey=0830991684b94f42bd968d44e66e6dd0&",
      name: "card 2",
      brand: "SKF",
      code: "VKMC 22222222222",
      discountedPrice: "12.46",
      originalPrice: "283.76",
      rating: 4
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e793478b3506bc06b72666052318b51db0727b825e43915faed9cd501f61e86?apiKey=0830991684b94f42bd968d44e66e6dd0&",
      name: "asdsadadsadasdsa",
      brand: "SKsssssF",
      code: "sdsadsad",
      discountedPrice: "102.464444444",
      originalPrice: "283789.76",
      rating: 0
    },
   
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList;