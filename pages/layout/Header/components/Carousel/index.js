import styles from "./Carousel.module.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Slider } from "react-responsive-carousel";

export default function Carousel() {
  const mockData = [
    {
      title: "Slide 1",
      subtitle: "Text for slide 1",
      image:
        "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      title: "Slide 2",
      subtitle: "Text for slide 2",
      image:
        "https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      title: "Slide 3",
      subtitle: "Text for slide 3",
      image:
        "https://images.pexels.com/photos/1655166/pexels-photo-1655166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ];
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
            backgroundColor: 'transparent',
            borderRadius: '50%',
            border: '1px solid #FFFFFF',
          };
          const style = isSelected
            ? { ...defStyle, backgroundColor: "#1292ee" }
            : { ...defStyle };
          return (
            <div
              style={style}
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
        {mockData?.map((slide, i) => {
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
