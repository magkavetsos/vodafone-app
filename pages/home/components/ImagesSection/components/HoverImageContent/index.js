import styles from "./HoverImageContent.module.css";
import Image from "next/image";
import React from "react";

export default function HoverImageContent(props) {
  const { title } = props;
  return (
    <div className={styles.hoverImageContainer}>
      <div>
        <Image width="32" height="20" src="/eye.png" />
      </div>
      <div className={styles.title}>{title}</div>
      <hr className={styles.hr} />
    </div>
  );
}
