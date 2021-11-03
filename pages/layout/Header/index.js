import styles from "./Header.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "./components/Carousel/index.js";
import Navbar from "./components/Navbar/index.js";

export default function Header() {
  return (
    <div className={styles.headerGrid}>
      this is the header
      <div>
        <Carousel />
        <Navbar />
      </div>
    </div>
  );
}
