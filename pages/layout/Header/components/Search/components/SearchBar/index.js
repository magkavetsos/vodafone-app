import styles from "./SearchBar.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function SearchBar(props) {
  const { data } = props;
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={styles.searchGrid}>
      <label>Choose an element or type</label>
      <div className={styles.comboboxStyles}>
        <input name="enter name" />
        <button type="button" aria-label={"toggle menu"}>
          &#8595;
        </button>
      </div>
      <ul className={styles.menuStyles}>
        {isOpen &&
          data.map((item, index) => (
            <li
              // style={
              //   highlightedIndex === index ? { backgroundColor: "#bde4ff" } : {}
              // }
              key={`${item}${index}`}
            >
              {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
}
