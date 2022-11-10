import React from 'react';
import Card from "../../Components/Card";
import {useProduct} from "../../Context/ProductContext";
import styles from "./styles.module.css";
const Products = () => {
  const {productList, loading} = useProduct();
    console.log(productList );
  return (
    <div className={styles.cardGroup}>
      {
        !loading? (
          productList?.map((item) => {
            return(
              <Card item={item} />
            )
          })
          // <h1>
          //   Hello
          // {productList.toString()}
          // {/* {productList.show.name} */}
          // </h1>
        ) : (<h1>loading.......</h1>)
      }
    </div>
  )
}

export default Products