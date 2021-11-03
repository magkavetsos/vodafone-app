import Image from "next/image";
import React from "react";
import styles from "./ImageContainer.module.css";
import { base64 } from "../../blurDataURL";
import HoverImageContent from "../HoverImageContent/index.js";

export default function ImageContainer(props) {
  const { title, img, width, height, hoveredId, setHoveredId } = props;
  return (
    <div
      className={styles.imageLayer}
      onMouseOver={() => setHoveredId(title)}
      onMouseLeave={() => setHoveredId("")}
    >
      {hoveredId !== title ? (
        <Image
          src={img}
          width={width}
          height={height}
          placeholder="blur"
          blurDataURL={base64}
        />
      ) : (
        <>
          <Image
            src="/bg.png"
            width={width}
            height={height}
          />
          <HoverImageContent title={title} />
        </>
      )}
    </div>
  );
}
