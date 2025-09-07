
import styles from "./components/netflix.module.css";
import styled from "styled-components";

const SeriesCard=({curEle})=>{
   const ratingClass=curEle.rating>8.6 ? styles.super_hit: styles.average;

const ButtonChai = styled.button({
  background: "#e50914",
  color: "#fff",
  border: "none",
  "border-radius": "4px",
  padding: "0.6rem 1.5rem",
  "font-size": "1.05rem",
  "font-weight": 600,
  cursor: "pointer",
  transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
  "box-shadow": "0 2px 8px rgba(229,9,20,0.10)",
  "letter-spacing": "1px",
  "&:hover": {
    background: "#b0060f",
    transform: "translateY(-2px) scale(1.04)",
    "box-shadow": "0 4px 16px rgba(229,9,20,0.18)",
  },
});

    return (
          <li className={styles.card}>

            <div>
             <img
  src={curEle.img_url}
  alt={`${curEle.name} poster`}
  className="w-full h-auto sm:w-[400px] sm:h-[320px] md:w-[500px] md:h-[400px] rounded-lg shadow-md"
/>


            </div>
            <div className={styles["card-content"]}>
            <h2>Name: {curEle.name}</h2>
            <h3>Rating:<span className={`${styles.rating} ${ratingClass}`}> {curEle.rating}</span></h3>
            <p>
              Created by Chaitanya Jadhav, a passionate developer who brings creativity
              and enthusiasm to every project. This component showcases the beloved
              K-drama "{curEle.name}" with its impressive {curEle.rating} rating,
              reflecting the show's compelling storytelling and emotional depth that has
              captivated audiences worldwide.
            </p>
           <a href={curEle.watch_url}><ButtonChai className={styles.button}>

              Watch Now
            </ButtonChai>
            </a> 
            </div>
          </li>
        );


};

export default SeriesCard;