import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useProduct } from "../../Context/ProductContext";
import styles from "./styles.module.css";
import { HeartIcon, ShoppingCartIcon, StarIcon } from "@heroicons/react/solid";

const ProductDetail = () => {
  const { product_id } = useParams();
  const { productList, loading } = useProduct();
  useEffect(() => {
    if (productList) {
      getShowData(product_id);
    }
  }, [productList]);

  const [rshow, setRshow] = useState(null);

  const getShowData = (product_id) => {
    console.log(product_id);

    setRshow(productList.filter((shows) => shows.show.id == product_id)[0]);
    console.log(
      "hy",
      productList.filter((shows) => {
        if (shows.show.id == product_id) return shows;
      })
    );
    console.log(productList);
  };

  return (
    <>
      {rshow ? (
        <div className={styles.containerBox}>
          <div className={styles.flexBox}>
            <img src={rshow.show.image.original} className={styles.image}></img>

            <div className="">
              {/* <h2 className="">Watch min {rshow.runtime}</h2> */}
              {/* <div className={styles.rating}>
                      {[...Array(Math.round(product.rating.rate))].map((e, i) =>

                          <StarIcon
                              key={`star-${i}`}
                              className={styles.starIcon}
                              aria-hidden='true' />
                      )}
                      {[...Array(5 - Math.round(product.rating.rate))].map((e, i) =>

                          <StarIcon
                              key={`star-${i}`}
                              className={styles.emptyStarIcon}
                              aria-hidden='true' />
                      )}
                      <p className='text-xs ml-1 font-light mt-0.5'>{product.rating.count}</p>
                  </div> */}
              <p dangerouslySetInnerHTML={{ __html: rshow.show.summary }} />

              <div className="">
                <div className="">
                  <span>{rshow.price}</span>
                </div>

                <div className="modal-box">
                  {/* <div className={styles.addToCart}>
                    <button className={styles.addToCartButton} >
                      <span className={styles.buttonText}>
                        
                      </span>
                    </button>



                    
                  </div> */}

                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    BOOK A MOVIE TICKET
                  </button>

                  {/* <!-- Modal --> */}

                  <div
                    class="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="staticBackdropLabel" style={{color:"grey"}}>
                          {rshow.show.name} / {rshow.show.rating.average} <StarIcon style={{height:"20px"}}/> 
                          <StarIcon style={{height:"20px"}}/>
                          <StarIcon style={{height:"20px"}}/>
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <div style={{display:"flex"}}>
                          <img
                            src={rshow.show.image.original}
                            className={styles.image}
                            width="200px"
                          ></img>
                          
                          <div style={{color:"black", display:"flex", alignItems:"center", marginLeft:"2rem"}}>
                        {rshow.show.schedule.days} / {rshow.show.schedule.time} / 
                        {rshow.show.premiered}
                          </div>
                          </div>
                          
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" class="btn btn-primary">
                            Book Now!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ============= */}
                <div className={styles.HeartIconStyle}>
                  <HeartIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>...LOADING</h1>
      )}
    </>
  );
};

export default ProductDetail;
