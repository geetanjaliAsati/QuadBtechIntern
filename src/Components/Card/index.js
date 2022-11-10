import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { HeartIcon, ShoppingCartIcon, StarIcon } from "@heroicons/react/solid";

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLink}>
        {/* <button className={styles.favButton}><HeartIcon /></button> */}

        <div className={styles.cardHeader}>
          <img className={styles.cardImg} src={item.show.image.medium} />
        </div>

        <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
        <h2>{item.show.name}</h2>
        <HeartIcon className={styles.heartButtonIcon} />
        </div>

        <div className={styles.rating}>
{/* HOW TO MAP TO SHOW PARTICULAR STARS */}

          <p>{item.show.rating.average}</p>--

          {/* HOW TO SHOW ONLY YEAR */}
          <p>{item.show.premiered}</p>
          <StarIcon className={styles.starIcon} aria-hidden="true" />
        </div>


        <div className={styles.cardBody}>
          <>
            {/* <p className={styles.cardTitle}> */}

            <div className={styles.cardMovieInfo}>
              {/* HOW TO PUT COMMA BETWEEN THE GENRES */}
              <span>{item.show.genres} / </span>
              <span>{item.show.language} </span>
              <span>
                {item.show.runtime ? ` / ${item.show.runtime} min` : ""}{" "}
              </span>
            </div>

            {/* <span className={styles.brand}>{item.show.genres[0]}</span> */}
            {/* </p> */}
          </>

          <div className={styles.addToCart}>
            <Link to={`/${item.show.id}`}>
              <button className={styles.addToCartButton}>
                <span className={styles.buttonText}>WATCH SHOW</span>
              </button>
            </Link>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
