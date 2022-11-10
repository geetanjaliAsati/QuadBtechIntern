import axios from "axios";
const { useContext, createContext, useState, useEffect } = require("react");

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
//   const [product, setProduct] = useState({});
//   const [productId, setProductId] = useState("");
  console.log(children);

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      await axios
        .get("https://api.tvmaze.com/search/shows?q=all")
        .then((res) => {
          setProductList(res.data);
          setLoading(false);
        });
    };
    getProducts();
    console.log(productList);
  }, []);

//   useEffect(() => {
//     setLoading(true);
//     const getProduct = async () => {
//       productId &&
//         productId.length > 0 &&
//         (await axios
//           .get(`https://api.tvmaze.com/search/shows?q=all${productId}`)
//           .then((res) => {
//             setProduct(res.data);
//             setLoading(false);
//           }));
//     };
//     getProduct();
//   }, [productId]);

  const values = {
    productList,
    loading,
    // product,
    // setProductId,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
