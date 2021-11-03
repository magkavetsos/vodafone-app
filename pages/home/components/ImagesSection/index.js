import React, { useState } from "react";
import styles from "./ImagesSection.module.css";
import ImageContainer from "./components/ImageContainer/index.js";

export default function ImagesSection(props) {
  const { imagesArray } = props;
  const [hoveredId, setHoveredId] = useState("");
  return (
    <div className={styles.imagesSectionContainer}>
      <div className={styles.oneImageColumn}>
        <ImageContainer
          img={imagesArray[0].img}
          width="370"
          height="650"
          setHoveredId={setHoveredId}
          hoveredId={hoveredId}
          title={imagesArray[0].title}
        />
      </div>
      <div className={styles.twoImagesColumn}>
        <ImageContainer
          img={imagesArray[1].img}
          width="371"
          height="301"
          setHoveredId={setHoveredId}
          hoveredId={hoveredId}
          title={imagesArray[1].title}
        />
        <ImageContainer
          img={imagesArray[2].img}
          width="371"
          height="301"
          setHoveredId={setHoveredId}
          hoveredId={hoveredId}
          title={imagesArray[2].title}
        />
      </div>
      <div className={styles.twoImagesColumn}>
        <ImageContainer
          img={imagesArray[3].img}
          width="371"
          height="301"
          setHoveredId={setHoveredId}
          hoveredId={hoveredId}
          title={imagesArray[3].title}
        />
        <ImageContainer
          img={imagesArray[4].img}
          width="371"
          height="301"
          setHoveredId={setHoveredId}
          hoveredId={hoveredId}
          title={imagesArray[4].title}
        />
      </div>
    </div>
  );
}
