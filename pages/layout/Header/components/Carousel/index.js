import styles from "./Carousel.module.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Slider } from "react-responsive-carousel";

export default function Carousel(props) {
  const { data } = props;
  return (
    <div className={styles.carouselGrid}>
      <Slider
        showArrows={false}
        showThumbs={false}
        swipeable={false}
        useKeyboardArrows={true}
        autoPlay
        infiniteLoop
        showStatus={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            color: "white",
            marginRight: 4,
            marginLeft: 4,
            display: "inline-block",
            cursor: "pointer",
            width: "9px",
            height: "9px",
            backgroundColor: isSelected ? "#1292ee" : "transparent",
            borderRadius: "50%",
            border: "1px solid #FFFFFF",
          };
          return (
            <div
              style={defStyle}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            ></div>
          );
        }}
      >
        {data?.map((slide, i) => {
          return (
            <div>
              <img src={slide?.image} height="366px" className={styles.img} />
              <div className={styles.carouselInfo}>
                <div className={styles.title}>{slide?.title}</div>
                <div className={styles.subtitle}>{slide?.subtitle}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
